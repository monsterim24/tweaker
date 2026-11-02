const home=document.getElementById('home'),checkout=document.getElementById('checkout');
function showCheckout(value){home.classList.toggle('hidden',value);checkout.classList.toggle('hidden',!value);window.scrollTo(0,0);}
document.getElementById('product').addEventListener('click',()=>showCheckout(true));
document.getElementById('back').addEventListener('click',()=>showCheckout(false));
document.getElementById('paypal').addEventListener('click',()=>alert('PayPal checkout has not been connected yet. No payment was made.'));
document.getElementById('test').addEventListener('click',()=>{
  // This is a visual-only developer demo. Never use client-side codes to authorize downloads.
  const code=document.getElementById('code').value;
  document.getElementById('testResult').textContent=code.length ? 'Test UI received a code. No payment or download was authorized.' : 'Enter a test code.';
});
