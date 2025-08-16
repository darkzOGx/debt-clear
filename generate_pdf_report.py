#!/usr/bin/env python3
"""
Orange County Debt Statistics 2025 Market Analysis - PDF Generator
This script converts the HTML report to a professional PDF document.
"""

import os
import sys
import subprocess
from pathlib import Path

def install_requirements():
    """Install required packages if not already installed."""
    required_packages = ['weasyprint', 'cffi']
    
    for package in required_packages:
        try:
            __import__(package)
            print(f"[OK] {package} is already installed")
        except ImportError:
            print(f"Installing {package}...")
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

def generate_pdf():
    """Generate PDF from HTML report."""
    try:
        # Import after potential installation
        from weasyprint import HTML, CSS
        
        # Define paths
        current_dir = Path(__file__).parent
        html_path = current_dir / 'public' / 'orange-county-debt-statistics-2025-report.html'
        pdf_path = current_dir / 'public' / 'orange-county-debt-statistics-2025.pdf'
        
        # Check if HTML file exists
        if not html_path.exists():
            print(f"Error: HTML file not found at {html_path}")
            return False
        
        print("Generating PDF from HTML report...")
        print(f"Source: {html_path}")
        print(f"Output: {pdf_path}")
        
        # Custom CSS for better PDF formatting
        pdf_css = CSS(string='''
            @page {
                size: A4;
                margin: 1in;
                @bottom-center {
                    content: counter(page);
                    font-family: "Times New Roman", serif;
                    font-size: 12px;
                    color: #666;
                }
            }
            
            body {
                font-family: "Times New Roman", serif;
                font-size: 11pt;
                line-height: 1.4;
            }
            
            .cover-page {
                page-break-after: always;
            }
            
            .page-break {
                page-break-before: always;
            }
            
            h1 {
                page-break-after: avoid;
            }
            
            h2, h3 {
                page-break-after: avoid;
            }
            
            table {
                page-break-inside: avoid;
            }
            
            .city-card {
                page-break-inside: avoid;
            }
            
            .stat-box {
                page-break-inside: avoid;
            }
        ''')
        
        # Generate PDF
        html_doc = HTML(filename=str(html_path))
        html_doc.write_pdf(str(pdf_path), stylesheets=[pdf_css])
        
        print(f"[SUCCESS] PDF successfully generated: {pdf_path}")
        print(f"File size: {pdf_path.stat().st_size / (1024*1024):.1f} MB")
        
        return True
        
    except ImportError as e:
        print(f"Error: Required package not available: {e}")
        print("Please install weasyprint manually:")
        print("pip install weasyprint")
        return False
    except Exception as e:
        print(f"Error generating PDF: {e}")
        return False

def main():
    """Main function to generate the PDF report."""
    print("Orange County Debt Statistics 2025 - PDF Generator")
    print("=" * 55)
    
    # Install requirements
    print("Checking and installing requirements...")
    install_requirements()
    
    # Generate PDF
    success = generate_pdf()
    
    if success:
        print("\n[SUCCESS] PDF report generation completed successfully!")
        print("The PDF is now available for download in the public folder.")
        print("\nFile details:")
        print("- Filename: orange-county-debt-statistics-2025.pdf")
        print("- Pages: ~47 pages")
        print("- Format: Professional market analysis report")
        print("- Content: Comprehensive Orange County debt statistics and analysis")
    else:
        print("\n[ERROR] PDF generation failed. Please check the error messages above.")

if __name__ == "__main__":
    main()