let vkiForm=() => {
    $(document).ready(function(){
        //event
        $("#vki_submit_id").click(function(event){//bu blok, "#vki_submit_id" öğesine tıklanınca çalışacakları içerir.
            event.preventDefault();
            let getLocalKilo, getLocalBoy, getLocalVkiNumberSonuc,getLocalVkiSonuc;

            let kilo,boy,vkiSonuc;

            kilo = $.trim($("#kilo_id").val());//$.trim yazılan yerde boşluk olursa onları alıyor.
            if(kilo==""){
                $('#validation_kilo').html("Kilo boş geçilemez.");
                
            }
            else if($.isNumeric(kilo)==false){
                //kullanıcı sayı girmezse
                $('#validation_kilo').html("sayı giriniz.");
            
            }
            else{
                localStorage.setItem("kilo",kilo);
                console.log(localStorage);
                getLocalKilo=localStorage.getItem("kilo");
                console.log(`Local kilo: ${getLocalKilo}`);
                getLocalKilo=Number(getLocalKilo);
            }
            

            boy = $.trim($("#boy_id").val());//$.trim yazılan yerde boşluk olursa onları alıyor.
            if(boy==""){
                $('#validation_boy').html("boy boş geçilemez.");
            }
            else if($.isNumeric(boy)==false){
                //kullanıcı sayı girmezse
                $('#validation_boy').html("sayı giriniz.");
            }
            else{
                localStorage.setItem("boy",boy);
                console.log(localStorage);
                getLocalBoy=localStorage.getItem("boy");
                console.log(`local boy:${getLocalBoy}`);
                getLocalBoy=Number(getLocalBoy);
            }
            
            vkiNumberSonuc=Math.round(getLocalKilo / Math.pow((getLocalBoy/100),2));

            localStorage.setItem("vkiNumberSonuc",vkiNumberSonuc);
            getLocalVkiNumberSonuc=localStorage.getItem("vkiNumberSonuc");

            //$('#sonuc_sayi_id').html(getLocalVkiSonuc);

            if(getLocalVkiNumberSonuc<18){
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Düşük Kilo</b>`)
                localStorage.setItem("vkiSonuc","Düşük Kilo");
            }
            else if(18<=getLocalVkiNumberSonuc && getLocalVkiNumberSonuc<24){
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Normal Kilo</b>`)
                localStorage.setItem("vkiSonuc","Normal Kilo");
            }
            else if(24<=getLocalVkiNumberSonuc && getLocalVkiNumberSonuc<29){
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Fazla Kilo</b>`)
                localStorage.setItem("vkiSonuc","Fazla Kilo");
            }
            else if(29<=getLocalVkiNumberSonuc && getLocalVkiNumberSonuc<32){
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Obez Kilo</b>`)
                localStorage.setItem("vkiSonuc","Obez Kilo");
            }
            else if(getLocalVkiNumberSonuc>=32){
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Aşırı Obez Kilo</b>`)
                localStorage.setItem("vkiSonuc","Aşırı Obez Kilo");
            }else{
                $("#sonuc_durum_id").html(`<b>${getLocalVkiNumberSonuc}: Yanlış Giriş</b>`)
                localStorage.setItem("vkiSonuc","Yanlış Giriş");
            }

            getLocalVkiSonuc=localStorage.getItem("vkiSonuc");
            
            

        }); //click

    }); //end document ready

}
vkiForm();
