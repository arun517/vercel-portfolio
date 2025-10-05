const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.resolve(__dirname, 'public/Arun_Thakur_Advanced_Resume.html');
    await page.goto(`file://${htmlPath}`, { 
      waitUntil: 'networkidle0' 
    });
    
    // Generate PDF
    const pdfPath = path.resolve(__dirname, 'src/Arun_Thakur_Resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      printBackground: true,
      preferCSSPageSize: true
    });
    
    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  } finally {
    await browser.close();
  }
}

generatePDF();
