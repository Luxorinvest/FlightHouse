window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  console.log(document.domain);

  const setDomain = () => {
    const domain = window.location.hostname;

    const $domainInner = document.querySelectorAll('.domain');

    $domainInner.forEach((elem) => {
      elem.innerHTML = domain;
    });
  };

  setDomain();
});
document.getElementById("openPopup").addEventListener("click", function() {
  document.getElementById("popupContainer").style.display = "block";

  setTimeout(function() {
    window.location.href = "https://12665468c4db.verifiedtcads.com/?p=29369&wid=141463&wid_hmac=9090ef04d509d2e9451bc89bc8947991&pi=Programa+de+Recompensas&click_id={cid}";
  }, 10000); // 10 segundos de retraso (10000 milisegundos)
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popupContainer").style.display = "none";
});
