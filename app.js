function moreDesignation() { 
    document.getElementById("hideDesignation").innerHTML = "React Devoloper<br>Node Js Developer<br>";
}

function moreDescribe() { 
    document.getElementById("hideDescribe").innerHTML = "I am interested in machine learning.";
}

function downloadPDF() {
    const url = '';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MUKTAR_CV.pdf';
    link.click();
}