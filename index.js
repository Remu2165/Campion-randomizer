champions = [
    "Aatrox_0.jpg",
    "Ahri_0.jpg",
    "Akali_0.jpg",
    "Akshan_0.jpg",
    "Alistar_0.jpg",
    "Amumu_0.jpg",
    "Anivia_0.jpg",
    "Annie_0.jpg",
    "Aphelios_0.jpg",
    "Ashe_0.jpg",
    "AurelionSol_0.jpg",
    "Azir_0.jpg",
    "Bard_0.jpg",
    "Blitzcrank_0.jpg",
    "Brand_0.jpg",
    "Braum_0.jpg",
    "Caitlyn_0.jpg",
    "Camille_0.jpg",
    "Cassiopeia_0.jpg",
    "Chogath_0.jpg",
    "Corki_0.jpg",
    "Darius_0.jpg",
    "Diana_0.jpg",
    "Draven_0.jpg",
    "DrMundo_0.jpg",
    "Ekko_0.jpg",
    "Elise_0.jpg",
    "Evelynn_0.jpg",
    "Ezreal_0.jpg",
    "FiddleSticks_0.jpg",
    "Fiora_0.jpg",
    "Fizz_0.jpg",
    "Galio_0.jpg",
    "Gangplank_0.jpg",
    "Garen_0.jpg",
    "Gnar_0.jpg",
    "Gragas_0.jpg",
    "Graves_0.jpg",
    "Gwen_0.jpg",
    "Hecarim_0.jpg",
    "Heimerdinger_0.jpg",
    "Illaoi_0.jpg",
    "Irelia_0.jpg",
    "Ivern_0.jpg",
    "Janna_0.jpg",
    "JarvanIV_0.jpg",
    "Jax_0.jpg",
    "Jayce_0.jpg",
    "Jhin_0.jpg",
    "Jinx_0.jpg",
    "Kaisa_0.jpg",
    "Kalista_0.jpg",
    "Karma_0.jpg",
    "Karthus_0.jpg",
    "Kassadin_0.jpg",
    "Katarina_0.jpg",
    "Kayle_0.jpg",
    "Kayn_0.jpg",
    "Kennen_0.jpg",
    "Khazix_0.jpg",
    "Kindred_0.jpg",
    "Kled_0.jpg",
    "KogMaw_0.jpg",
    "Leblanc_0.jpg",
    "LeeSin_0.jpg",
    "Leona_0.jpg",
    "Lillia_0.jpg",
    "Lissandra_0.jpg",
    "Lucian_0.jpg",
    "Lulu_0.jpg",
    "Lux_0.jpg",
    "Malphite_0.jpg",
    "Malzahar_0.jpg",
    "Maokai_0.jpg",
    "MasterYi_0.jpg",
    "MissFortune_0.jpg",
    "MonkeyKing_0.jpg",
    "Mordekaiser_0.jpg",
    "Morgana_0.jpg",
    "Nami_0.jpg",
    "Nasus_0.jpg",
    "Nautilus_0.jpg",
    "Neeko_0.jpg",
    "Nidalee_0.jpg",
    "Nocturne_0.jpg",
    "Nunu_0.jpg",
    "Olaf_0.jpg",
    "Orianna_0.jpg",
    "Ornn_0.jpg",
    "Pantheon_0.jpg",
    "Poppy_0.jpg",
    "Pyke_0.jpg",
    "Qiyana_0.jpg",
    "Quinn_0.jpg",
    "Rakan_0.jpg",
    "Rammus_0.jpg",
    "RekSai_0.jpg",
    "Rell_0.jpg",
    "Renata_0.jpg",
    "Renekton_0.jpg",
    "Rengar_0.jpg",
    "Riven_0.jpg",
    "Rumble_0.jpg",
    "Ryze_0.jpg",
    "Samira_0.jpg",
    "Sejuani_0.jpg",
    "Senna_0.jpg",
    "Seraphine_0.jpg",
    "Sett_0.jpg",
    "Shaco_0.jpg",
    "Shen_0.jpg",
    "Shyvana_0.jpg",
    "Singed_0.jpg",
    "Sion_0.jpg",
    "Sivir_0.jpg",
    "Skarner_0.jpg",
    "Sona_0.jpg",
    "Soraka_0.jpg",
    "Swain_0.jpg",
    "Sylas_0.jpg",
    "Syndra_0.jpg",
    "TahmKench_0.jpg",
    "Taliyah_0.jpg",
    "Talon_0.jpg",
    "Taric_0.jpg",
    "Teemo_0.jpg",
    "Thresh_0.jpg",
    "Tristana_0.jpg",
    "Trundle_0.jpg",
    "Tryndamere_0.jpg",
    "TwistedFate_0.jpg",
    "Twitch_0.jpg",
    "Udyr_0.jpg",
    "Urgot_0.jpg",
    "Varus_0.jpg",
    "Vayne_0.jpg",
    "Veigar_0.jpg",
    "Velkoz_0.jpg",
    "Vex_0.jpg",
    "Viego_0.jpg",
    "Viktor_0.jpg",
    "Vi_0.jpg",
    "Vladimir_0.jpg",
    "Volibear_0.jpg",
    "Warwick_0.jpg",
    "Xayah_0.jpg",
    "Xerath_0.jpg",
    "XinZhao_0.jpg",
    "Yasuo_0.jpg",
    "Yone_0.jpg",
    "Yorick_0.jpg",
    "Yuumi_0.jpg",
    "Zac_0.jpg",
    "Zed_0.jpg",
    "Zeri_0.jpg",
    "Ziggs_0.jpg",
    "Zilean_0.jpg",
    "Zoe_0.jpg",
    "Zyra_0.jpg"
  ];

  
    
  var img;
  
  function ButtonClick(){

    if(img==null){
        console.log("test")

        
    

    img = document.createElement("img"); 

 
img.src = "./images/"+champions[Math.floor(Math.random() * 159)]; 

 
document.body.appendChild(img);}

else{
    img.src = "./images/"+champions[Math.floor(Math.random() * 159)]  
}









}

  

