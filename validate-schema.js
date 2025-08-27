import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract and analyze JSON-LD scripts
function analyzeSchemas(htmlContent) {
  const schemaRegex = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  const schemas = [];
  let match;
  
  while ((match = schemaRegex.exec(htmlContent)) !== null) {
    try {
      const jsonContent = match[1].trim();
      if (jsonContent) {
        const schema = JSON.parse(jsonContent);
        schemas.push(schema);
      }
    } catch (e) {
      console.error('Error parsing schema:', e.message);
      console.error('Content:', match[1].substring(0, 100));
    }
  }
  
  return schemas;
}

// Check for duplicates
function findDuplicates(schemas) {
  const typeCount = {};
  const duplicates = [];
  
  schemas.forEach((schema, index) => {
    const type = schema['@type'];
    if (type) {
      if (!typeCount[type]) {
        typeCount[type] = [];
      }
      typeCount[type].push(index);
    }
  });
  
  Object.entries(typeCount).forEach(([type, indices]) => {
    if (type === 'FAQPage' && indices.length > 1) {
      duplicates.push({
        type,
        count: indices.length,
        indices,
        critical: true
      });
    }
  });
  
  return { typeCount, duplicates };
}

// Analyze index.html
console.log('=== Analyzing index.html ===');
const indexPath = path.join(__dirname, 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');
const indexSchemas = analyzeSchemas(indexContent);

console.log(`\nFound ${indexSchemas.length} schemas in index.html:`);
const { typeCount, duplicates } = findDuplicates(indexSchemas);

Object.entries(typeCount).forEach(([type, indices]) => {
  console.log(`- ${type}: ${indices.length} instance(s)`);
});

if (duplicates.length > 0) {
  console.log('\n⚠️  DUPLICATE SCHEMAS FOUND:');
  duplicates.forEach(dup => {
    console.log(`- ${dup.type}: ${dup.count} instances ${dup.critical ? '(CRITICAL!)' : ''}`);
  });
} else {
  console.log('\n✅ No duplicate FAQPage schemas found in index.html');
}

// Check dist/index.html if it exists
const distPath = path.join(__dirname, 'dist', 'index.html');
if (fs.existsSync(distPath)) {
  console.log('\n=== Analyzing dist/index.html ===');
  const distContent = fs.readFileSync(distPath, 'utf8');
  const distSchemas = analyzeSchemas(distContent);
  
  console.log(`\nFound ${distSchemas.length} schemas in dist/index.html:`);
  const distResult = findDuplicates(distSchemas);
  
  Object.entries(distResult.typeCount).forEach(([type, indices]) => {
    console.log(`- ${type}: ${indices.length} instance(s)`);
  });
  
  if (distResult.duplicates.length > 0) {
    console.log('\n⚠️  DUPLICATE SCHEMAS FOUND IN PRODUCTION BUILD:');
    distResult.duplicates.forEach(dup => {
      console.log(`- ${dup.type}: ${dup.count} instances ${dup.critical ? '(CRITICAL!)' : ''}`);
    });
  } else {
    console.log('\n✅ No duplicate FAQPage schemas found in production build');
  }
}

// Summary
console.log('\n=== SUMMARY ===');
console.log('Development (index.html):');
console.log(`- Total schemas: ${indexSchemas.length}`);
console.log(`- FAQPage schemas: ${typeCount['FAQPage'] ? typeCount['FAQPage'].length : 0}`);

if (fs.existsSync(distPath)) {
  const distContent = fs.readFileSync(distPath, 'utf8');
  const distSchemas = analyzeSchemas(distContent);
  const distResult = findDuplicates(distSchemas);
  
  console.log('\nProduction (dist/index.html):');
  console.log(`- Total schemas: ${distSchemas.length}`);
  console.log(`- FAQPage schemas: ${distResult.typeCount['FAQPage'] ? distResult.typeCount['FAQPage'].length : 0}`);
}

console.log('\n📝 Note: React components will dynamically add schemas at runtime.');
console.log('The EnhancedFAQSchema component in Home.jsx will add one FAQPage schema.');
console.log('The FAQ page (/faq route) will add its own FAQPage schema.');