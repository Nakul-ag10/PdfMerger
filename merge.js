const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

let pdfMerge = async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file
  await merger.add(p2);
  let id = new Date().getTime();
  await merger.save(`public/merged${id}.pdf`); //save under given name and reset the internal document
  return id;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
module.exports = {pdfMerge}