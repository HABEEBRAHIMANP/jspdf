
    function convertHTMLToPDF() {
      const { jsPDF } = window.jspdf;

      var doc = new jsPDF('l', 'mm', [1200, 1810]);
      var pdfjs = document.querySelector('#html-template');

      doc.html(pdfjs, {
          callback: function(doc) {
              doc.save("output.pdf");
          },
          x: 10,
          y: 10
      });

    //   doc.output('dataurlnewwindow');
  }
