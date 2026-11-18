const panel=document.querySelector('.chat-panel');
const messages=document.querySelector('#chat-messages');

function openChat(){panel.classList.add('open');panel.setAttribute('aria-hidden','false');}
function closeChat(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true');}
document.querySelectorAll('[data-chat-open]').forEach(b=>b.addEventListener('click',openChat));
document.querySelector('.chat-close').addEventListener('click',closeChat);

function addMessage(text,kind='bot'){const el=document.createElement('div');el.className='message '+kind;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}

const answers={
cair:'Gula Aren Cair tersedia kemasan ¼ liter Rp13.500, ½ liter Rp26.000, dan 1 liter Rp50.000. Cocok untuk coffee shop, es kopi, dan teh. Harga final serta pengiriman dikonfirmasi berdasarkan lokasi dan jumlah pesanan.',
semut:'Gula Aren Semut tersedia ¼ kg Rp9.000, ½ kg Rp21.000, dan 1 kg Rp40.000. Kemasan menggunakan pouch.',
batok:'Gula Aren Batok tersedia ¼ kg Rp7.500, ½ kg Rp16.000, dan 1 kg Rp32.000. Kemasan menggunakan bungkus.',
pesan:'Anda dapat kirim kebutuhan melalui formulir di halaman ini atau pesan langsung melalui Instagram @arennova_03. Untuk pemesanan WhatsApp, minta tautan WhatsApp melalui akun tersebut. Stok dan ongkir dikonfirmasi tim ARENNOVA.'
};

document.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.answer;addMessage(button.textContent,'user');setTimeout(()=>addMessage(answers[key]),180)}));
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{openChat();addMessage(button.dataset.product,'user');setTimeout(()=>addMessage('Untuk '+button.dataset.product+', silakan pilih ukuran dan kebutuhan per bulan. Anda juga dapat mengisi formulir dengan perkiraan volume dan lokasi.'),180)}));

const form=document.querySelector('#lead-form');
const status=document.querySelector('#lead-status');
form.addEventListener('submit',async(event)=>{event.preventChanged?event.preventChanged():event.preventDefault();const data=Object.fromEntries(new FormData(form).entries());status.textContent='Permintaan siap dikirim. Untuk sementara, lanjutan formulir memerlukan konfigurasi Google Apps Script.';console.info('ARENNOVA lead:',data);});
