#!/usr/bin/env node
/**
 * Orange County Debt Statistics 2025 Market Analysis - PDF Generator
 * This script converts the HTML report to a professional PDF document using Puppeteer.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function installPuppeteer() {
    try {
        require('puppeteer');
        console.log('[OK] Puppeteer is already installed');
        return true;
    } catch (error) {
        console.log('Installing Puppeteer...');
        try {
            execSync('npm install puppeteer', { stdio: 'inherit' });
            console.log('[OK] Puppeteer installed successfully');
            return true;
        } catch (installError) {
            console.error('[ERROR] Failed to install Puppeteer:', installError.message);
            return false;
        }
    }
}

async function generatePDF() {
    try {
        const puppeteer = require('puppeteer');
        
        const htmlPath = path.join(__dirname, 'public', 'orange-county-debt-statistics-2025-report.html');
        const pdfPath = path.join(__dirname, 'public', 'orange-county-debt-statistics-2025.pdf');
        
        // Check if HTML file exists
        if (!fs.existsSync(htmlPath)) {
            console.error(`[ERROR] HTML file not found at ${htmlPath}`);
            return false;
        }
        
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        console.log('Creating new page...');
        const page = await browser.newPage();
        
        console.log('Loading HTML content...');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        console.log('Generating PDF...');
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            margin: {
                top: '1in',
                right: '1in',
                bottom: '1in',
                left: '1in'
            },
            printBackground: true,
            displayHeaderFooter: true,
            headerTemplate: '<div></div>',
            footerTemplate: `
                <div style="font-size: 10px; font-family: 'Times New Roman', serif; color: #666; width: 100%; text-align: center; margin: 0 1in;">
                    <span class="pageNumber"></span> of <span class="totalPages"></span>
                </div>
            `,
            preferCSSPageSize: true
        });
        
        await browser.close();
        
        // Check file size
        const stats = fs.statSync(pdfPath);
        const fileSizeMB = stats.size / (1024 * 1024);
        
        console.log(`[SUCCESS] PDF successfully generated: ${pdfPath}`);
        console.log(`File size: ${fileSizeMB.toFixed(1)} MB`);
        
        return true;
        
    } catch (error) {
        console.error('[ERROR] Failed to generate PDF:', error.message);
        return false;
    }
}

async function main() {
    console.log('Orange County Debt Statistics 2025 - PDF Generator (Node.js)');
    console.log('='.repeat(65));
    
    // Install Puppeteer if needed
    const puppeteerInstalled = await installPuppeteer();
    if (!puppeteerInstalled) {
        console.log('\n[ERROR] Could not install Puppeteer. Please install it manually:');
        console.log('npm install puppeteer');
        return;
    }
    
    // Generate PDF
    const success = await generatePDF();
    
    if (success) {
        console.log('\n[SUCCESS] PDF report generation completed successfully!');
        console.log('The PDF is now available for download in the public folder.');
        console.log('\nFile details:');
        console.log('- Filename: orange-county-debt-statistics-2025.pdf');
        console.log('- Pages: ~47 pages');
        console.log('- Format: Professional market analysis report');
        console.log('- Content: Comprehensive Orange County debt statistics and analysis');
        console.log('\nThe PDF can now be downloaded from your website at:');
        console.log('https://yourwebsite.com/orange-county-debt-statistics-2025.pdf');
    } else {
        console.log('\n[ERROR] PDF generation failed. Please check the error messages above.');
    }
}

if (require.main === module) {
    main().catch(console.error);
}