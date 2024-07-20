<script src="Registration.js"></script>
<script>
function submitForm() {
    document.getElementById("myForm").submit();
    window.location.href = "thankyou.html";
    setTimeout(function(){
        window.location.href = "home.html";
    }, 3000);
}
</script>// JavaScript Document