<script>
 document.getElementById("btnCopy").addEventListener("click", function(){
   var copyText = document.getElementById("myText");
   copyText.select();
   document.execCommand("Copy");
   alert("Copied to clipboard!");
 });
</script>
