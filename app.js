// ============================================================
// YKS 2026 ÇALIŞMA ASİSTANI - Ana Uygulama
// Tüm dersler: Türkçe, Fizik, Kimya, Biyoloji, Tarih, Coğrafya, Felsefe Grubu
// ============================================================

const FB_URL = 'https://yks-2026-a49de-default-rtdb.firebaseio.com';

const APP = {
  currentPage: 'dashboard',
  progress: {},
  quizState: null,
  timerInterval: null,
  countdownInterval: null,
  currentUser: null,
  isTeacher: false,

  // ==================== FIREBASE HELPERS ====================
  async fbWrite(path, data) {
    try {
      await fetch(`${FB_URL}/${path}.json`, { method: 'PUT', body: JSON.stringify(data), headers: {'Content-Type':'application/json'} });
    } catch(e) { console.warn('Firebase yazma hatası:', e); }
  },
  async fbRead(path) {
    try {
      const r = await fetch(`${FB_URL}/${path}.json`);
      return await r.json();
    } catch(e) { console.warn('Firebase okuma hatası:', e); return null; }
  },

  // ==================== DERS VERİLERİ ====================
  subjects: {
    // -------------------- TYT TÜRKÇE --------------------
    tytTurkce: {
      ad: 'TYT Türkçe', renk: '#e74c3c', ikon: '📝', sinav: 'TYT', soruSayisi: 40,
      hapBilgiler: [
        { baslik: 'Sözcükte Anlam', icerik: 'Sözcükler gerçek (temel), mecaz (yan) ve terim anlam taşır. <b>Gerçek anlam:</b> Sözcüğün sözlükteki ilk anlamıdır. <b>Mecaz anlam:</b> Gerçek anlamından uzaklaşarak yeni anlam kazanmasıdır. <b>Terim anlam:</b> Bir bilim dalına ait özel anlamdır.', anahtar: ['Eş anlamlı: Aynı anlama gelen sözcükler (güzel-hoş)', 'Zıt anlamlı: Karşıt anlam (güzel-çirkin)', 'Eş sesli (sesteş): Yazılışı aynı, anlamı farklı (yüz: surat / 100)', 'Deyim: Kalıplaşmış söz öbeği (çam devirmek)', 'Atasözü: Toplumsal deneyimlerden çıkan kalıp söz'] },
        { baslik: 'Cümlede Anlam', icerik: 'Cümleler arasındaki anlam ilişkileri sınavda sıkça sorulur. <b>Neden-sonuç:</b> "Yağmur yağdığı için sokaklar ıslandı." <b>Amaç-sonuç:</b> "Sınavı kazanmak için çalıştı." <b>Koşul:</b> "Çalışırsan kazanırsın." <b>Karşılaştırma:</b> İki durumun kıyaslanması.', anahtar: ['Öznel yargı: Kişisel görüş içerir (En güzel şehir İstanbul)', 'Nesnel yargı: Kanıtlanabilir bilgi (İstanbul Türkiyenin en kalabalık şehridir)', 'Tanım cümlesi: Bir kavramı açıklayan cümle', 'Öneri cümlesi: Tavsiye içerir', 'Eleştiri cümlesi: Değerlendirme içerir'] },
        { baslik: 'Paragraf Bilgisi', icerik: '<b>Ana düşünce:</b> Paragrafın bütününde anlatılmak istenen temel fikirdir. <b>Yardımcı düşünce:</b> Ana düşünceyi destekleyen fikirlerdir. <b>Konu:</b> Paragrafta "neden bahsediliyor?" sorusunun cevabıdır. <b>Başlık:</b> Konuyu ve ana düşünceyi kapsayan en kısa ifadedir.', anahtar: ['Ana düşünce genellikle paragrafın başında veya sonunda bulunur', 'Paragraf tamamlamada anlam bütünlüğüne dikkat et', 'Paragrafta anlam akışı: Cümlelerin mantıksal sırası', 'Düşüncenin akışını bozan cümle: Konudan sapan cümle'] },
        { baslik: 'Ses Bilgisi', icerik: '<b>Büyük ünlü uyumu:</b> Kalın ünlüden sonra kalın (a,ı,o,u), ince ünlüden sonra ince (e,i,ö,ü) gelir. <b>Küçük ünlü uyumu:</b> Düz ünlüden sonra düz, yuvarlak ünlüden sonra düz-geniş veya dar-yuvarlak gelir.', anahtar: ['Ünsüz benzeşmesi: sert ünsüzden sonra sert ünsüz gelir (kitap+çı → kitapçı)', 'Ünsüz yumuşaması: p→b, ç→c, t→d, k→ğ (kitap→kitabı)', 'Kaynaştırma harfleri: y, ş, s, n (araba-y-a, kapı-s-ı)', 'Ünlü düşmesi: burun→burnu, oğul→oğlu', 'Ünsüz düşmesi: küçük+cük → küçücük'] },
        { baslik: 'Yazım Kuralları', icerik: '<b>"de/da" bağlacı:</b> Cümleden çıkarıldığında anlam bozulmazsa ayrı yazılır. <b>"-de/-da" eki:</b> Bulunma hal eki olarak bitişik yazılır. <b>"ki" bağlacı:</b> Ayrı yazılır, cümleden çıkarılabilir. <b>"-ki" eki:</b> Bitişik yazılır (ilgi zamiri, sıfat yapan ek).', anahtar: ['de/da bağlacı yerine "dahi/bile" konabilir', 'Birleşik sözcüklerde anlam kayması varsa bitişik yazılır', 'Özel isimlere gelen ekler kesme işaretiyle ayrılır', 'Sayılar metin içinde yazıyla yazılır'] },
        { baslik: 'Sözcük Türleri', icerik: '<b>İsim:</b> Varlıklara verilen ad. <b>Sıfat:</b> İsimleri niteleyen/belirten sözcük. <b>Zarf:</b> Fiilleri, sıfatları, zarfları etkileyen sözcük. <b>Zamir:</b> İsimlerin yerine kullanılan sözcük. <b>Edat:</b> Tek başına anlamı olmayan, cümlede görev yapan sözcük. <b>Bağlaç:</b> Cümleleri/sözcükleri bağlar. <b>Ünlem:</b> Duygu belirtir.', anahtar: ['Sıfat mutlaka kendinden sonra bir isim alır', 'Belirtisiz isim tamlaması: demir kapı (sıfat tamlaması DEĞİL)', 'Adlaşmış sıfat: İsim düşer, sıfat isim görevine geçer', 'İşaret zamiri: bu, şu, o / Belgisiz zamir: birisi, herkes'] },
        { baslik: 'Fiiller ve Çatı', icerik: '<b>Haber kipleri:</b> -di, -miş, -yor, -r, -ecek. <b>Dilek kipleri:</b> -e, -se, -meli, emir. <b>Çatı:</b> Fiilin özne ve nesneyle ilişkisini gösterir.', anahtar: ['Etken çatı: Özne bellidir (Ali geldi)', 'Edilgen çatı: Özne belli değildir, -ıl/-ın eki (Kapı açıldı)', 'Dönüşlü çatı: Özne işi kendi üzerinde yapar (Ali yıkandı)', 'İşteş çatı: Birlikte/karşılıklı yapılır (Çocuklar anlaştı)', 'Geçişli: Nesne alır / Geçişsiz: Nesne almaz'] },
        { baslik: 'Fiilimsiler', icerik: '<b>İsim-fiil (mastar):</b> -mak/-mek, -ma/-me, -ış/-iş ekleriyle fiilden isim türetir. <b>Sıfat-fiil (ortaç):</b> -an, -ası, -mez, -ar, -dık, -ecek, -mış ekleriyle fiilden sıfat türetir. <b>Zarf-fiil (bağ-fiil/ulaç):</b> -arak, -ıp, -ince, -dıkça, -madan, -ken, -eli ekleriyle fiilden zarf türetir.', anahtar: ['İsim-fiil: Okumak güzeldir (okumak = isim-fiil)', 'Sıfat-fiil: Akan su (akan = sıfat-fiil)', 'Zarf-fiil: Koşarak geldi (koşarak = zarf-fiil)', 'Fiilimsiler yan cümlecik kurar'] },
        { baslik: 'Cümle Bilgisi', icerik: '<b>Cümle ögeleri:</b> Özne, yüklem, nesne (belirtili/belirtisiz), dolaylı tümleç, zarf tümleci. Yüklem cümlenin temel ögesidir. <b>Yapısına göre:</b> Basit, birleşik, sıralı, bağlı. <b>Anlamına göre:</b> Olumlu, olumsuz, soru. <b>Yüklemine göre:</b> Fiil cümlesi, isim cümlesi.', anahtar: ['Özne "kim/ne" sorusuyla bulunur', 'Belirtili nesne: -ı/-i eki alır (Kitabı okudum)', 'Belirtisiz nesne: Ek almaz (Kitap okudum)', 'Dolaylı tümleç: -e, -de, -den ekleri', 'Devrik cümle: Yüklem sonda değildir'] }
      ],
      sorular: [
        { soru: '"Bahar gelince doğa yemyeşil bir örtüye bürünür." cümlesinde altı çizili sözcüğün anlamca en yakını hangisidir?', secenekler: ['kapanır', 'sarılır', 'giyinir', 'örtülür', 'kaplanır'], dogruCevap: 0, aciklama: '"Bürünmek" sözcüğü mecaz anlamda "kapanmak, sarmalanmak" anlamına gelir. "Kapanır" en yakın anlamlıdır.' },
        { soru: 'Aşağıdaki cümlelerden hangisi nesnel bir yargı bildirir?', secenekler: ['Bu roman, yazarın en başarılı eseridir.', 'Güneş, Dünya\'dan yaklaşık 150 milyon km uzaktadır.', 'İstanbul dünyanın en güzel şehridir.', 'Kış mevsimi diğer mevsimlerden daha zordur.', 'Bu tablo sanatçının en etkileyici çalışmasıdır.'], dogruCevap: 1, aciklama: 'Nesnel yargı kanıtlanabilir bilgi içerir. Güneş\'in Dünya\'dan uzaklığı ölçülebilir bir bilgidir.' },
        { soru: '"Çocuklar parkta ___." cümlesinde boş bırakılan yere aşağıdakilerden hangisi getirilirse fiil işteş çatılı olur?', secenekler: ['oynandı', 'oynadı', 'oynaştı', 'oynatıldı', 'oynattı'], dogruCevap: 2, aciklama: 'İşteş çatı, birlikte veya karşılıklı yapılan eylemi anlatır. "-ş" eki işteşlik ekidir: oynaştı.' },
        { soru: '"Senin de geleceğini biliyordum." cümlesindeki "de" için ne söylenebilir?', secenekler: ['Bağlaçtır, ayrı yazılmıştır', 'Bulunma hal ekidir', 'İsim çekim ekidir', 'Zarf yapım ekidir', 'Edat göreviyle kullanılmıştır'], dogruCevap: 0, aciklama: '"de" burada bağlaçtır çünkü cümleden çıkarıldığında anlam bozulmaz: "Senin geleceğini biliyordum."' },
        { soru: 'Aşağıdaki cümlelerin hangisinde ad (isim) tamlaması kullanılmıştır?', secenekler: ['Güzel çiçekler aldım.', 'Okulun bahçesi çok geniş.', 'Kırmızı elbise giydi.', 'Hızlı koşan çocuk düştü.', 'Büyük ev satılık.'], dogruCevap: 1, aciklama: '"Okulun bahçesi" belirtili isim tamlamasıdır (tamlayan eki: -ın, tamlanan eki: -ı).' },
        { soru: '"Akşam olunca sokaklar ıssızlaşır." cümlesinde kaç fiilimsi vardır?', secenekler: ['Hiç yok', 'Bir', 'İki', 'Üç', 'Dört'], dogruCevap: 1, aciklama: '"olunca" sözcüğü zarf-fiildir (-ınca eki). Cümlede tek fiilimsi vardır.' },
        { soru: 'Aşağıdaki sözcüklerden hangisinde ünsüz yumuşaması vardır?', secenekler: ['evler', 'kitabı', 'çiçekçi', 'toprak', 'masalar'], dogruCevap: 1, aciklama: '"kitap" sözcüğü ünlüyle başlayan ek aldığında "p" ünsüzü "b"ye yumuşar: kitap → kitabı.' },
        { soru: '"Bu konuda herkes aynı fikirde." cümlesinde "herkes" sözcüğü hangi tür sözcüktür?', secenekler: ['İsim', 'Sıfat', 'Belgisiz zamir', 'Kişi zamiri', 'Dönüşlü zamir'], dogruCevap: 2, aciklama: '"Herkes" belgisiz zamirdir. İsimlerin yerine kullanılır ve belirli bir kişiyi işaret etmez.' }
      ]
    },

    // -------------------- TYT FİZİK --------------------
    tytFizik: {
      ad: 'TYT Fizik', renk: '#3498db', ikon: '⚡', sinav: 'TYT', soruSayisi: 7,
      hapBilgiler: [
        { baslik: 'Madde ve Özellikleri', icerik: '<b>Özkütle (yoğunluk):</b> d = m/V (birim: kg/m³ veya g/cm³). Maddeye özgüdür, miktara bağlı değildir. <b>Hal değişimleri:</b> Erime, donma, buharlaşma, yoğuşma, süblimleşme, kırağılaşma. Hal değişimi sırasında sıcaklık sabit kalır.', anahtar: ['Genleşme: Sıcaklık artınca hacim artar (su istisnası: 0-4°C arası küçülür)', 'Özkütle sıralaması: Katı > Sıvı > Gaz (su istisnası: buz suda yüzer)', 'Erime-donma noktası aynı sıcaklıktır', 'Basınç artarsa kaynama noktası artar'] },
        { baslik: 'Kuvvet ve Hareket', icerik: '<b>Newton 1. Yasa:</b> Net kuvvet sıfırsa cisim durur veya sabit hızla hareket eder (eylemsizlik). <b>Newton 2. Yasa:</b> F = m × a (kuvvet = kütle × ivme). <b>Newton 3. Yasa:</b> Her etkiye eşit ve zıt tepki vardır. <b>Ağırlık:</b> G = m × g (g ≈ 10 m/s²).', anahtar: ['Sürtünme kuvveti harekete zıt yöndedir', 'Sürtünme = μ × N (μ: sürtünme katsayısı, N: normal kuvvet)', 'Ağırlık kütle değildir! Kütle sabit, ağırlık değişir', 'Serbest düşme: v = g.t, h = ½gt²'] },
        { baslik: 'Enerji', icerik: '<b>Kinetik enerji:</b> Eₖ = ½mv² (hareket enerjisi). <b>Potansiyel enerji:</b> Eₚ = mgh (konum enerjisi). <b>Mekanik enerji:</b> E = Eₖ + Eₚ. Sürtünme yoksa mekanik enerji korunur. <b>İş:</b> W = F × d × cosθ', anahtar: ['Hız 2 katına çıkarsa kinetik enerji 4 katına çıkar', 'Yükseklik 3 katına çıkarsa potansiyel enerji 3 katına çıkar', 'İş-enerji teoremi: W_net = ΔEₖ', 'Güç: P = W/t (birim: Watt)'] },
        { baslik: 'Isı ve Sıcaklık', icerik: '<b>Isı:</b> Q = m × c × ΔT (c: özısı, ΔT: sıcaklık farkı). Isı enerji türüdür (birim: Joule veya kalori). Sıcaklık ise maddenin sıcaklık derecesidir. <b>Hal değişim ısısı:</b> Q = m × L (L: erime/buharlaşma ısısı).', anahtar: ['1 kalori = 4.18 Joule', 'Suyun özısısı: 1 cal/g°C (en yüksek)', 'Isı dengesi: Q_veren = Q_alan', 'Hal değişimi sırasında sıcaklık SABİT kalır'] },
        { baslik: 'Basınç', icerik: '<b>Katı basıncı:</b> P = F/A (birim: Pascal = N/m²). <b>Sıvı basıncı:</b> P = d × g × h (derinliğe bağlı, kabın şekline bağlı değil). <b>Açık hava basıncı:</b> 1 atm = 76 cmHg = 101325 Pa. <b>Pascal prensibi:</b> Kapalı kaptaki sıvıya uygulanan basınç her noktaya eşit iletilir.', anahtar: ['Sıvı basıncı kabın şekline bağlı DEĞİLDİR', 'Bileşik kaplar: Aynı sıvı, aynı seviye', 'Yükseldikçe açık hava basıncı azalır', 'Kaldırma kuvveti: F = d_sıvı × V_batan × g'] },
        { baslik: 'Elektrik', icerik: '<b>Ohm Yasası:</b> V = I × R (V: voltaj, I: akım, R: direnç). <b>Coulomb Yasası:</b> F = k × q₁ × q₂ / r². <b>Direnç:</b> R = ρ × L/A (ρ: özdirenç, L: uzunluk, A: kesit alanı).', anahtar: ['Seri bağlı dirençler: R_toplam = R₁ + R₂ + ...', 'Paralel bağlı dirençler: 1/R = 1/R₁ + 1/R₂ + ...', 'Elektrik enerjisi: W = V × I × t', 'Elektrik gücü: P = V × I = I²R = V²/R'] },
        { baslik: 'Optik', icerik: '<b>Yansıma yasası:</b> Gelme açısı = yansıma açısı. <b>Düzlem ayna:</b> Görüntü simetrik, sanal, düz ve aynı büyüklükte. <b>Kırılma:</b> Işık farklı ortama geçerken yön değiştirir. Sık ortamdan seyrek ortama geçerken normalden uzaklaşır.', anahtar: ['Çukur ayna: Gerçek/sanal görüntü oluşturur (uzak cisim → küçük-ters)', 'Tümsek ayna: Her zaman sanal, küçük, düz görüntü', 'İnce kenarlı mercek: Çukur ayna gibi davranır', 'Kalın kenarlı mercek: Tümsek ayna gibi davranır'] }
      ],
      sorular: [
        { soru: 'Özkütle 2 g/cm³ olan bir cismin kütlesi 400 g ise hacmi kaç cm³ tür?', secenekler: ['100', '200', '400', '800', '1600'], dogruCevap: 1, aciklama: 'd = m/V → V = m/d = 400/2 = 200 cm³' },
        { soru: '5 kg kütleli bir cisim 4 m/s² ivme ile hızlanıyorsa cisme uygulanan net kuvvet kaç Newton dur?', secenekler: ['1.25', '9', '10', '20', '40'], dogruCevap: 3, aciklama: 'F = m × a = 5 × 4 = 20 N' },
        { soru: '2 kg kütleli bir cisim 10 m yükseklikten serbest bırakılıyor. Yere çarpmadan hemen önceki hızı kaç m/s dir? (g=10 m/s², sürtünme yok)', secenekler: ['5√2', '10', '10√2', '20', '14.1'], dogruCevap: 3, aciklama: 'Enerji korunumu: mgh = ½mv² → v² = 2gh = 2×10×10 = 200 → Hata düzeltme: v = √200 ≈ 14.1 m/s. Veya v²=2gh → v=√(2×10×20)... Aslında: v²=2×10×10=200, v≈14.1 m/s. En yakın cevap 10√2 ≈ 14.14' },
        { soru: '100 g suyu 20°C den 70°C ye çıkarmak için gereken ısı miktarı kaç kaloridir? (c_su = 1 cal/g°C)', secenekler: ['1000', '2000', '5000', '7000', '10000'], dogruCevap: 2, aciklama: 'Q = m × c × ΔT = 100 × 1 × (70-20) = 100 × 50 = 5000 kalori' },
        { soru: 'Taban alanı 0.5 m² olan bir cisim 200 N ağırlığındadır. Yere uyguladığı basınç kaç Pa dır?', secenekler: ['100', '200', '400', '500', '1000'], dogruCevap: 2, aciklama: 'P = F/A = 200/0.5 = 400 Pa' },
        { soru: 'Bir devrede 12 V luk pil ve 4 Ω luk direnç seri bağlıdır. Devreden geçen akım kaç Amper dir?', secenekler: ['1', '2', '3', '4', '48'], dogruCevap: 2, aciklama: 'V = I × R → I = V/R = 12/4 = 3 A' },
        { soru: 'Düzlem aynaya 30° lik gelme açısı ile gelen ışığın yansıma açısı kaç derecedir?', secenekler: ['15', '30', '45', '60', '90'], dogruCevap: 1, aciklama: 'Yansıma yasası: Gelme açısı = Yansıma açısı = 30°' }
      ]
    },

    // -------------------- TYT KİMYA --------------------
    tytKimya: {
      ad: 'TYT Kimya', renk: '#2ecc71', ikon: '🧪', sinav: 'TYT', soruSayisi: 7,
      hapBilgiler: [
        { baslik: 'Atom Yapısı', icerik: '<b>Proton (p):</b> Çekirdekte, +1 yüklü, kütle numarasına katkı yapar. <b>Nötron (n):</b> Çekirdekte, yüksüz. <b>Elektron (e⁻):</b> Çekirdek dışında, -1 yüklü. <b>Kütle numarası:</b> A = p + n. <b>Atom numarası:</b> Z = proton sayısı.', anahtar: ['İzotop: Proton sayısı aynı, nötron sayısı farklı (C-12 ve C-14)', 'İzobar: Kütle numarası aynı, proton sayısı farklı', 'İzoton: Nötron sayısı aynı, proton sayısı farklı', 'Nötr atomda: proton sayısı = elektron sayısı'] },
        { baslik: 'Periyodik Tablo', icerik: '<b>Periyot:</b> Yatay sıralar, enerji düzeyi sayısını verir. <b>Grup:</b> Dikey sütunlar, değerlik elektron sayısını verir. <b>Metaller:</b> Sol taraf (parlak, iletken, +iyon). <b>Ametaller:</b> Sağ üst (mat, yalıtkan, -iyon). <b>Yarımetaller:</b> Basamak çizgisi üzerinde.', anahtar: ['Atom yarıçapı: Grupta aşağı ↑, periyotta sağa ↓', 'İyonlaşma enerjisi: Grupta aşağı ↓, periyotta sağa ↑', 'Elektronegatiflik: Grupta aşağı ↓, periyotta sağa ↑ (F en yüksek)', 'Soy gazlar: 8A grubu, kararlı (tepkimeye girmez)'] },
        { baslik: 'Kimyasal Bağlar', icerik: '<b>İyonik bağ:</b> Metal + ametal arası, elektron alışverişi. <b>Kovalent bağ:</b> Ametal + ametal arası, elektron ortaklaşması. Polar kovalent: farklı ametaller (HCl). Apolar kovalent: aynı ametaller (H₂, O₂). <b>Metalik bağ:</b> Metal + metal arası, elektron denizi modeli.', anahtar: ['İyonik bileşikler kristal yapılıdır ve suda çözününce iletken olur', 'Kovalent bileşiklerin erime-kaynama noktası düşüktür', 'Lewis yapısında oktet kuralı: 8 elektron ile kararlılık', 'Hidrojen bağı: H ile F, O, N arası (suyun yüzey gerilimi)'] },
        { baslik: 'Mol Kavramı', icerik: '<b>1 mol:</b> 6.02 × 10²³ tane (Avogadro sayısı). <b>Mol kütlesi:</b> Atom kütlesi gram cinsinden. Örn: C = 12 g/mol, O = 16 g/mol. <b>1 mol gaz NŞA da:</b> 22.4 litre hacim kaplar.', anahtar: ['n = m/M (mol sayısı = kütle / mol kütlesi)', 'n = V/22.4 (NŞA da, V litre cinsinden)', 'n = N/6.02×10²³ (N: tanecik sayısı)', 'Yüzde bileşim = (elementin kütlesi / bileşiğin kütlesi) × 100'] },
        { baslik: 'Asit ve Bazlar', icerik: '<b>Asit:</b> Suda H⁺ iyonu verir, pH < 7, turnusolu kırmızıya boyar. <b>Baz:</b> Suda OH⁻ iyonu verir, pH > 7, turnusolu maviye boyar. <b>Nötrleşme:</b> Asit + Baz → Tuz + Su. <b>pH skalası:</b> 0-14 arası.', anahtar: ['Kuvvetli asitler: HCl, H₂SO₄, HNO₃', 'Kuvvetli bazlar: NaOH, KOH, Ca(OH)₂', 'pH = -log[H⁺], pH + pOH = 14', 'pH azaldıkça asitlik artar'] },
        { baslik: 'Karışımlar ve Ayırma', icerik: '<b>Homojen karışım (çözelti):</b> Her yerinde aynı özellik (tuzlu su). <b>Heterojen karışım:</b> Her yerinde farklı özellik (toprak). Ayırma yöntemleri fiziksel yöntemlerdir.', anahtar: ['Süzme: Katı-sıvı heterojen karışım', 'Damıtma: Kaynama noktası farkı (homojen)', 'Kristallendirme: Çözünürlük farkı', 'Ayırma hunisi: Yoğunluk farkı (sıvı-sıvı heterojen)', 'Mıknatıs: Manyetik özellik farkı'] },
        { baslik: 'Çözeltiler', icerik: '<b>Çözünürlük:</b> 100 g çözücüde çözünebilen maksimum çözünen miktarı. <b>Derişim:</b> Çözeltinin birim hacmindeki çözünen miktarı. <b>Molarite:</b> M = n/V (mol/L).', anahtar: ['Sıcaklık artarsa katı çözünürlüğü genellikle ARTAR', 'Sıcaklık artarsa gaz çözünürlüğü AZALIR', 'Basınç artarsa gaz çözünürlüğü ARTAR', '%kütle = (çözünen kütlesi / çözelti kütlesi) × 100'] }
      ],
      sorular: [
        { soru: 'Atom numarası 11, kütle numarası 23 olan bir atomun nötron sayısı kaçtır?', secenekler: ['11', '12', '22', '23', '34'], dogruCevap: 1, aciklama: 'n = A - Z = 23 - 11 = 12 nötron' },
        { soru: 'Periyodik tabloda aşağıdakilerden hangisi aynı grupta aşağı doğru inildikçe ARTAR?', secenekler: ['İyonlaşma enerjisi', 'Elektronegatiflik', 'Atom yarıçapı', 'Ametal özelliği', 'Oksitlerinin asitlik gücü'], dogruCevap: 2, aciklama: 'Grupta aşağı inildikçe enerji düzeyi sayısı arttığı için atom yarıçapı artar.' },
        { soru: 'NaCl bileşiğinde bulunan bağ türü hangisidir?', secenekler: ['Apolar kovalent', 'Polar kovalent', 'İyonik', 'Metalik', 'Hidrojen bağı'], dogruCevap: 2, aciklama: 'Na (metal) ve Cl (ametal) arasında elektron alışverişi ile iyonik bağ oluşur.' },
        { soru: '0.5 mol su (H₂O) kaç gramdır? (H=1, O=16)', secenekler: ['4.5', '9', '18', '27', '36'], dogruCevap: 1, aciklama: 'H₂O mol kütlesi = 2(1) + 16 = 18 g/mol. m = n × M = 0.5 × 18 = 9 g' },
        { soru: 'pH değeri 3 olan bir çözelti için hangisi doğrudur?', secenekler: ['Bazik çözeltidir', 'Nötr çözeltidir', 'Asidik çözeltidir', 'Turnusolu maviye boyar', 'OH⁻ derişimi H⁺ den fazladır'], dogruCevap: 2, aciklama: 'pH < 7 olan çözeltiler asidiktir. pH = 3 kuvvetli asidik bir çözeltidir.' },
        { soru: 'Tuzlu su hangi tür karışımdır ve hangi yöntemle ayrılabilir?', secenekler: ['Heterojen - süzme', 'Homojen - damıtma', 'Heterojen - damıtma', 'Homojen - süzme', 'Heterojen - mıknatıs'], dogruCevap: 1, aciklama: 'Tuzlu su homojen bir karışımdır (çözelti). Kaynama noktası farkından yararlanılarak damıtma ile ayrılır.' },
        { soru: '2 litre çözeltide 0.5 mol NaOH çözünmüştür. Çözeltinin molaritesi kaçtır?', secenekler: ['0.1 M', '0.25 M', '0.5 M', '1 M', '4 M'], dogruCevap: 1, aciklama: 'M = n/V = 0.5/2 = 0.25 M' }
      ]
    },

    // -------------------- TYT BİYOLOJİ --------------------
    tytBiyoloji: {
      ad: 'TYT Biyoloji', renk: '#9b59b6', ikon: '🧬', sinav: 'TYT', soruSayisi: 6,
      hapBilgiler: [
        { baslik: 'Canlıların Ortak Özellikleri', icerik: 'Tüm canlılar: beslenir, solunum yapar, boşaltım yapar, büyür ve gelişir, hareket eder, uyarılara tepki verir, ürer, hücreden oluşur, organizasyon gösterir, adaptasyon yapar, homeostazi sağlar.', anahtar: ['Metabolizma = Anabolizma (yapım) + Katabolizma (yıkım)', 'Ototrof: Kendi besinini üretir (bitki, alg)', 'Heterotrof: Dışarıdan beslenme (hayvan, mantar)', 'ATP: Evrensel enerji birimi'] },
        { baslik: 'Hücre Yapısı', icerik: '<b>Prokaryot:</b> Zarla çevrili organeli ve çekirdeği YOK (bakteri, arke). <b>Ökaryot:</b> Zarla çevrili organelleri ve çekirdeği VAR (hayvan, bitki, mantar, protista). <b>Hücre zarı:</b> Seçici geçirgen, fosfolipit çift tabaka + protein.', anahtar: ['Bitki hücresinde: Hücre duvarı, kloroplast, büyük koful VAR / Sentrozom YOK', 'Hayvan hücresinde: Sentrozom VAR / Hücre duvarı, kloroplast YOK', 'Mitokondri: Hücresel solunum (enerji üretimi)', 'Ribozom: Protein sentezi (tüm canlılarda var)', 'Çekirdek: DNA bulundurur, hücreyi yönetir'] },
        { baslik: 'Hücre Bölünmesi', icerik: '<b>Mitoz:</b> Büyüme ve onarım için. 2n → 2n (kromozom sayısı değişmez). 1 hücreden 2 özdeş hücre. <b>Mayoz:</b> Üreme hücresi oluşturmak için. 2n → n (kromozom yarıya iner). 1 hücreden 4 farklı hücre. Genetik çeşitlilik sağlar.', anahtar: ['Mitoz evreleri: Profaz → Metafaz → Anafaz → Telofaz', 'Mayoz I: Homolog kromozomlar ayrılır (n)', 'Mayoz II: Kardeş kromatidler ayrılır', 'Cross-over: Mayoz I\'de genetik çeşitlilik sağlar'] },
        { baslik: 'DNA ve Genetik', icerik: '<b>DNA:</b> Çift sarmal, deoksiriboz şekeri, A-T ve G-C baz eşleşmesi. <b>RNA:</b> Tek zincir, riboz şekeri, A-U ve G-C. <b>Genotip:</b> Genetik yapı (Aa, BB). <b>Fenotip:</b> Dış görünüş.', anahtar: ['Dominant (baskın): Büyük harf (A)', 'Resesif (çekinik): Küçük harf (a)', 'Homozigot: AA veya aa / Heterozigot: Aa', 'Çaprazlama: Aa × Aa → 3/4 A_ : 1/4 aa', 'DNA replikasyonu: Yarı korunumlu eşlenme'] },
        { baslik: 'Ekosistem', icerik: '<b>Besin zinciri:</b> Üretici → 1. tüketici → 2. tüketici → 3. tüketici → Ayrıştırıcı. <b>Enerji piramidi:</b> Her basamakta enerji azalır (%10 kuralı). En çok enerji üreticilerde, en az son tüketicilerde bulunur.', anahtar: ['Üretici: Fotosentez yapan canlılar', 'Bireyden büyüğe: Birey → Popülasyon → Komünite → Ekosistem → Biyosfer', 'Madde döngüleri: Su, karbon, azot döngüsü', 'Azot döngüsü: Atmosferdeki N₂ yi bakteriler bağlar'] },
        { baslik: 'Canlıların Sınıflandırılması', icerik: '<b>6 Alem:</b> Bakteriler, Arkeler, Protistalar, Mantarlar, Bitkiler, Hayvanlar. Sınıflandırma basamakları: Alem → Şube → Sınıf → Takım → Familya → Cins → Tür. İkili adlandırma: Cins + tür epiteti.', anahtar: ['Bakteriler: Prokaryot, tek hücreli, peptidoglikan hücre duvarı', 'Mantarlar: Ökaryot, heterotrof, kitin hücre duvarı', 'Bitkiler: Ökaryot, ototrof, selüloz hücre duvarı', 'Tür: Kendi aralarında verimli döl veren bireyler'] }
      ],
      sorular: [
        { soru: 'Aşağıdakilerden hangisi prokaryot hücrelerde BULUNMAZ?', secenekler: ['Ribozom', 'DNA', 'Hücre zarı', 'Çekirdek zarı', 'Sitozol'], dogruCevap: 3, aciklama: 'Prokaryot hücrelerde zarla çevrili organeller bulunmaz. Çekirdek zarı ökaryotlara özgüdür.' },
        { soru: 'Mayoz bölünme sonucunda oluşan hücrelerin kromozom sayısı ana hücreye göre nasıldır?', secenekler: ['Aynıdır', 'Yarısıdır', 'İki katıdır', 'Dört katıdır', 'Üç katıdır'], dogruCevap: 1, aciklama: 'Mayoz bölünmede 2n → n olur. Kromozom sayısı yarıya iner.' },
        { soru: 'DNA\'da adenin bazı %20 ise guanin bazı yüzde kaçtır?', secenekler: ['20', '30', '40', '60', '80'], dogruCevap: 1, aciklama: 'A=T=%20, A+T=%40. G+C=%60, G=C=%30.' },
        { soru: 'Besin zincirinde enerji hangi yönde ve nasıl değişir?', secenekler: ['Üreticiden tüketiciye artar', 'Üreticiden tüketiciye azalır', 'Her basamakta sabit kalır', 'Ayrıştırıcılarda en fazladır', 'Son tüketicide en fazladır'], dogruCevap: 1, aciklama: 'Her basamakta enerjinin yaklaşık %90\'ı ısı olarak kaybolur. Üreticilerde en fazla, son tüketicide en az enerji bulunur.' },
        { soru: 'Aa × Aa çaprazlamasından elde edilen bireylerin fenotip oranı nedir?', secenekler: ['1:1', '1:2:1', '3:1', '1:3', '2:1'], dogruCevap: 2, aciklama: 'Aa × Aa → 1 AA : 2 Aa : 1 aa. A dominant olduğundan fenotip: 3 dominant : 1 resesif (3:1).' },
        { soru: 'Aşağıdaki yapılardan hangisi hem bitki hem hayvan hücresinde bulunur?', secenekler: ['Kloroplast', 'Hücre duvarı', 'Büyük koful', 'Mitokondri', 'Sentrozom'], dogruCevap: 3, aciklama: 'Mitokondri hem bitki hem hayvan hücresinde bulunan, hücresel solunumun gerçekleştiği organeldir.' }
      ]
    },

    // -------------------- AYT FİZİK --------------------
    aytFizik: {
      ad: 'AYT Fizik', renk: '#2980b9', ikon: '🔭', sinav: 'AYT', soruSayisi: 14,
      hapBilgiler: [
        { baslik: 'Hareket (Kinematik)', icerik: '<b>Düzgün doğrusal hareket:</b> v = sabit, a = 0, x = v.t. <b>Düzgün ivmeli hareket:</b> v = v₀ + a.t, x = v₀t + ½at², v² = v₀² + 2ax. <b>Serbest düşme:</b> v₀ = 0, a = g. <b>Düşey atış:</b> Yukarı atışta v = v₀ - g.t.', anahtar: ['Eğik atış: Yatay (sabit hız) + düşey (ivmeli) bileşen', 'Menzil: R = v₀²sin2θ/g (max: θ=45°)', 'Maksimum yükseklik: H = v₀²sin²θ/(2g)', 'Bağıl hız: v_AB = v_A - v_B'] },
        { baslik: 'İtme ve Momentum', icerik: '<b>Momentum:</b> p = m.v (vektörel büyüklük). <b>İtme:</b> I = F.Δt = Δp. <b>Momentumun korunumu:</b> Dış kuvvet yoksa toplam momentum korunur: m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'.', anahtar: ['Esnek çarpışma: Hem momentum hem kinetik enerji korunur', 'Esnek olmayan çarpışma: Sadece momentum korunur', 'Tam esnek olmayan: Cisimler yapışır, m₁v₁ + m₂v₂ = (m₁+m₂)v\'', 'Hava yastığı: Δt artırarak F azaltır'] },
        { baslik: 'Elektrik Alan ve Potansiyel', icerik: '<b>Elektrik alan:</b> E = k.Q/r² (noktasal yük). <b>Elektrik potansiyeli:</b> V = k.Q/r. <b>Potansiyel enerji:</b> U = k.q₁.q₂/r. <b>Potansiyel fark:</b> V_AB = W_AB/q.', anahtar: ['k = 9 × 10⁹ N.m²/C²', 'Alan çizgileri: + yükten çıkar, - yüke girer', 'Düzgün elektrik alan: E = V/d (paralel plakalar)', 'İletken küre yüzeyinde yük dağılır, içinde E = 0'] },
        { baslik: 'Manyetik Alan', icerik: '<b>Manyetik kuvvet:</b> F = q.v.B.sinθ. <b>Akım taşıyan tele etki eden kuvvet:</b> F = B.I.L.sinθ. <b>Düz telin manyetik alanı:</b> B = μ₀I/(2πr). <b>Bobinin manyetik alanı:</b> B = μ₀nI.', anahtar: ['Sağ el kuralı: Parmaklar akım yönünde, alan avuç içi yönünde', 'Yüklü parçacık manyetik alanda dairesel yörünge çizer', 'Lenz Yasası: İndüksiyon akımı, akı değişimine karşı yönde oluşur', 'Faraday Yasası: EMK = -ΔΦ/Δt'] },
        { baslik: 'Dalgalar', icerik: '<b>Dalga denklemi:</b> v = f.λ (hız = frekans × dalga boyu). <b>Ses dalgaları:</b> Boyuna dalga, maddesel ortam gerektirir. <b>Işık dalgaları:</b> Enine dalga, boşlukta yayılabilir (c = 3×10⁸ m/s).', anahtar: ['Rezonans: Doğal frekansla zorlama frekansı eşitlenirse genlik max', 'Doppler etkisi: Yaklaşırken frekans artar, uzaklaşırken azalır', 'Kırınım: Dalganın engel arkasına geçmesi', 'Girişim: Yapıcı (tepe+tepe) ve yıkıcı (tepe+çukur)'] },
        { baslik: 'Modern Fizik', icerik: '<b>Fotoelektrik etki:</b> Işık metalden elektron koparır. E_foton = h.f (h: Planck sabiti). Eşik frekansı altında elektron kopmaz. <b>de Broglie:</b> λ = h/(m.v) (madde dalgası).', anahtar: ['Foton enerjisi: E = h.f = h.c/λ', 'İş fonksiyonu (Φ): Elektron koparmak için minimum enerji', 'E_k(max) = h.f - Φ (Maksimum kinetik enerji)', 'Compton saçılması: Foton-elektron çarpışması, λ artar', 'Özel görelilik: E = mc², zaman genişlemesi, kütle artışı'] }
      ],
      sorular: [
        { soru: 'Durgun haldeki bir cisim 4 m/s² sabit ivme ile hızlanıyor. 5 saniye sonra hızı kaç m/s olur?', secenekler: ['10', '15', '20', '25', '40'], dogruCevap: 2, aciklama: 'v = v₀ + at = 0 + 4×5 = 20 m/s' },
        { soru: '3 kg kütleli cisim 4 m/s, 1 kg kütleli cisim 2 m/s hızla aynı yönde hareket ediyor. Tam esnek olmayan çarpışma sonrası ortak hız kaç m/s?', secenekler: ['2', '2.5', '3', '3.5', '4'], dogruCevap: 3, aciklama: 'm₁v₁ + m₂v₂ = (m₁+m₂)v → 3(4) + 1(2) = 4v → v = 14/4 = 3.5 m/s' },
        { soru: '+2×10⁻⁶ C yüklü noktasal yükten 3 m uzaklıktaki elektrik alan şiddeti kaç N/C dir? (k=9×10⁹)', secenekler: ['1000', '2000', '3000', '6000', '18000'], dogruCevap: 1, aciklama: 'E = kQ/r² = 9×10⁹ × 2×10⁻⁶ / 3² = 18000/9 = 2000 N/C. Düzeltme: 9×10⁹ × 2×10⁻⁶ = 18×10³ = 18000. 18000/9 = 2000 N/C' },
        { soru: 'Dalga boyu 0.5 m ve frekansı 600 Hz olan bir dalganın yayılma hızı kaç m/s dir?', secenekler: ['120', '200', '300', '600', '1200'], dogruCevap: 2, aciklama: 'v = f × λ = 600 × 0.5 = 300 m/s. Düzeltme: Doğru cevap 300.' },
        { soru: 'Fotoelektrik olayda eşik frekansı 5×10¹⁴ Hz olan bir metale 8×10¹⁴ Hz frekanslı ışık düşürülüyor. Kopan elektronun maksimum kinetik enerjisi kaç eV dir? (h=4.14×10⁻¹⁵ eV.s)', secenekler: ['0.83', '1.00', '1.24', '1.50', '2.07'], dogruCevap: 2, aciklama: 'Eₖ = hf - hf₀ = h(f-f₀) = 4.14×10⁻¹⁵ × (8-5)×10¹⁴ = 4.14×10⁻¹⁵ × 3×10¹⁴ = 1.242 eV ≈ 1.24 eV' },
        { soru: 'Manyetik alana dik olarak 2×10⁶ m/s hızla giren 1.6×10⁻¹⁹ C yüklü parçacığa 3.2×10⁻¹³ N kuvvet etki ediyorsa manyetik alan şiddeti kaç T dir?', secenekler: ['0.1', '0.5', '1', '1.5', '2'], dogruCevap: 2, aciklama: 'F = qvB → B = F/(qv) = 3.2×10⁻¹³ / (1.6×10⁻¹⁹ × 2×10⁶) = 3.2×10⁻¹³ / 3.2×10⁻¹³ = 1 T' },
        { soru: '45° açıyla 20 m/s hızla atılan bir cismin menzili kaç m dir? (g=10 m/s², sin90°=1)', secenekler: ['10', '20', '30', '40', '80'], dogruCevap: 3, aciklama: 'R = v₀²sin2θ/g = 400×sin90°/10 = 400/10 = 40 m. Düzeltme: 400×1/10 = 40 m.' }
      ]
    },

    // -------------------- AYT KİMYA --------------------
    aytKimya: {
      ad: 'AYT Kimya', renk: '#27ae60', ikon: '⚗️', sinav: 'AYT', soruSayisi: 13,
      hapBilgiler: [
        { baslik: 'Kimyasal Denge', icerik: '<b>Denge sabiti:</b> Kc = [Ürünler]ⁿ / [Girenler]ᵐ. <b>Le Chatelier prensibi:</b> Dengeye etki eden bir değişiklik yapıldığında denge, bu etkiyi azaltacak yönde kayar. Sıcaklık artışı endotermik yöne kaydırır.', anahtar: ['Derişim artarsa → o maddeyi tüketen yöne kayar', 'Basınç artarsa → mol sayısı az olan yöne kayar', 'Katalizör dengeyi DEĞİŞTİRMEZ, sadece hızlandırır', 'Kc sadece sıcaklıkla değişir', 'Kp = Kc(RT)^Δn (gazlar için)'] },
        { baslik: 'Asit-Baz Dengesi', icerik: '<b>Ka:</b> Asit iyonlaşma sabiti (büyükse kuvvetli asit). <b>Kb:</b> Baz iyonlaşma sabiti. <b>Tampon çözelti:</b> pH değişimine dirençli (zayıf asit + tuzu veya zayıf baz + tuzu). <b>Titrasyon:</b> Bilinen derişimdeki çözeltiyle bilinmeyen derişimi bulma.', anahtar: ['Ka × Kb = Ksu = 10⁻¹⁴ (25°C de)', 'pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch)', 'Eşdeğerlik noktası: Asit mol = Baz mol', 'Kuvvetli asit-kuvvetli baz titrasyonunda eşdeğerlik noktası pH = 7'] },
        { baslik: 'Elektrokimya', icerik: '<b>Galvanik pil:</b> Kendiliğinden olan redoks tepkimesi → elektrik üretir. <b>Elektroliz:</b> Elektrik enerjisiyle zorla gerçekleştirilen tepkime. <b>Standart elektrot potansiyeli:</b> E°_pil = E°_katot - E°_anot.', anahtar: ['Anot: Yükseltgenme (elektron kaybı) - yönü', 'Katot: İndirgenme (elektron kazanımı) + yönü', 'E°_pil > 0 ise kendiliğinden gerçekleşir', 'Faraday yasası: m = (M × I × t)/(n × F), F = 96500 C/mol'] },
        { baslik: 'Organik Kimya', icerik: 'Organik bileşiklerin temelinde karbon atomu vardır. <b>Alkanlar:</b> CₙH₂ₙ₊₂ (tek bağ). <b>Alkenler:</b> CₙH₂ₙ (çift bağ). <b>Alkinler:</b> CₙH₂ₙ₋₂ (üçlü bağ).', anahtar: ['Alkoller: -OH grubu (metanol, etanol)', 'Aldehitler: -CHO grubu', 'Ketonlar: C=O (iki C arasında)', 'Karboksilik asitler: -COOH grubu', 'Esterler: -COO- (asit + alkol → ester + su)', 'Aminler: -NH₂ grubu'] },
        { baslik: 'Gazlar', icerik: '<b>İdeal gaz denklemi:</b> PV = nRT (R = 0.082 L.atm/mol.K). <b>Boyle:</b> P₁V₁ = P₂V₂ (T sabit). <b>Charles:</b> V₁/T₁ = V₂/T₂ (P sabit). <b>Avogadro:</b> V₁/n₁ = V₂/n₂ (P,T sabit).', anahtar: ['NŞA (0°C, 1 atm): 1 mol gaz = 22.4 L', 'Graham yasası: Yayılma hızı oranı = √(M₂/M₁)', 'Dalton yasası: P_toplam = P₁ + P₂ + ... (kısmi basınçlar)', 'Kinetik teori: T artarsa hız artar'] },
        { baslik: 'Termodinamik', icerik: '<b>Entalpi (ΔH):</b> Tepkime ısısı. Ekzotermik: ΔH < 0, Endotermik: ΔH > 0. <b>Entropi (ΔS):</b> Düzensizlik ölçüsü. <b>Gibbs serbest enerjisi:</b> ΔG = ΔH - TΔS. ΔG < 0 ise kendiliğinden.', anahtar: ['Hess Yasası: ΔH toplam = ΣΔH₁ + ΣΔH₂ + ...', 'Entropi artışı: Katı < Sıvı < Gaz', 'ΔG = 0 denge durumu', 'Standart oluşum entalpisi: Elementlerden bileşik oluşma ısısı'] }
      ],
      sorular: [
        { soru: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g) dengesinde basınç artırılırsa denge hangi yöne kayar?', secenekler: ['Sola (giren maddelere)', 'Sağa (ürünlere)', 'Değişmez', 'Önce sola sonra sağa', 'Belirlenemez'], dogruCevap: 1, aciklama: 'Sol taraf: 1+3=4 mol gaz. Sağ taraf: 2 mol gaz. Basınç artınca mol sayısı az olan yöne (sağa, ürünlere) kayar.' },
        { soru: 'pH = 3 olan HCl çözeltisinin H⁺ derişimi kaç mol/L dir?', secenekler: ['3', '0.3', '0.03', '0.003', '0.001'], dogruCevap: 4, aciklama: 'pH = -log[H⁺] → [H⁺] = 10⁻³ = 0.001 mol/L' },
        { soru: 'Zn-Cu pilinde anot ve katot sırasıyla hangisidir?', secenekler: ['Cu anot, Zn katot', 'Zn anot, Cu katot', 'İkisi de anot', 'İkisi de katot', 'Belirlenemez'], dogruCevap: 1, aciklama: 'Zn daha aktif metaldir, elektron kaybeder (yükseltgenir) → ANOT. Cu elektron kazanır (indirgenir) → KATOT.' },
        { soru: 'C₃H₈ bileşiğinin adı ve sınıfı nedir?', secenekler: ['Propen - alken', 'Propin - alkin', 'Propan - alkan', 'Propanol - alkol', 'Propanal - aldehit'], dogruCevap: 2, aciklama: 'CₙH₂ₙ₊₂ formülü alkan serisidir. n=3 için C₃H₈ = propan.' },
        { soru: '2 mol ideal gaz 27°C de 8.2 litre hacim kaplıyorsa basıncı kaç atm dir? (R=0.082)', secenekler: ['3', '5', '6', '8', '10'], dogruCevap: 2, aciklama: 'PV = nRT → P = nRT/V = 2 × 0.082 × 300 / 8.2 = 49.2/8.2 = 6 atm' },
        { soru: 'Bir tepkimede ΔH = -100 kJ ve ΔS = -200 J/K ise 300 K de ΔG kaç kJ dır?', secenekler: ['-160', '-100', '-40', '40', '160'], dogruCevap: 2, aciklama: 'ΔG = ΔH - TΔS = -100 - 300×(-0.2) = -100 + 60 = -40 kJ' },
        { soru: 'Graham yasasına göre H₂ gazının O₂ gazına göre yayılma hızı oranı kaçtır? (H=1, O=16)', secenekler: ['1/4', '1/2', '2', '4', '8'], dogruCevap: 3, aciklama: 'v_H₂/v_O₂ = √(M_O₂/M_H₂) = √(32/2) = √16 = 4' }
      ]
    },

    // -------------------- AYT BİYOLOJİ --------------------
    aytBiyoloji: {
      ad: 'AYT Biyoloji', renk: '#8e44ad', ikon: '🔬', sinav: 'AYT', soruSayisi: 13,
      hapBilgiler: [
        { baslik: 'Fotosentez', icerik: '<b>Genel denklem:</b> 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (ışık enerjisiyle). <b>Işık reaksiyonları:</b> Tilakoidde gerçekleşir, ATP ve NADPH üretilir, O₂ açığa çıkar. <b>Karanlık reaksiyonlar (Calvin döngüsü):</b> Stromada, CO₂ tutularak glikoz sentezlenir.', anahtar: ['C3 bitkileri: Normal Calvin döngüsü (çoğu bitki)', 'C4 bitkileri: Sıcak iklimlere uyum (mısır, şeker kamışı)', 'CAM bitkileri: Stomalar gece açılır (kaktüs)', 'Fotosentez hızını etkileyen: Işık şiddeti, CO₂, sıcaklık, su'] },
        { baslik: 'Hücresel Solunum', icerik: '<b>Glikoliz:</b> Sitoplazmada, 1 glikoz → 2 piruvat, 2 ATP üretilir (oksijensiz de olur). <b>Krebs döngüsü:</b> Mitokondrida, CO₂ açığa çıkar. <b>ETS:</b> Mitokondrinin iç zarında, en çok ATP burada üretilir (34 ATP). <b>Toplam:</b> 1 glikoz → 38 ATP.', anahtar: ['Fermantasyon: O₂ yokluğunda, glikoliz + etanol/laktik asit', 'Etil alkol fermantasyonu: Maya (ekmek, bira)', 'Laktik asit fermantasyonu: Kas hücrelerinde (yorgunluk)', 'Fermantasyonda net 2 ATP üretilir'] },
        { baslik: 'Protein Sentezi', icerik: '<b>Transkripsiyon:</b> DNA → mRNA (çekirdekte). RNA polimeraz enzimi çalışır. <b>Translasyon:</b> mRNA → Protein (ribozomda). tRNA aminoasitleri taşır. <b>Kodon:</b> mRNA üzerindeki 3 lü baz dizisi. <b>Antikodon:</b> tRNA üzerindeki 3 lü baz dizisi.', anahtar: ['Başlangıç kodonu: AUG (metiyonin)', 'Durma kodonları: UAA, UAG, UGA', 'Genetik kod evrenseldir (tüm canlılarda aynı)', 'Gen mutasyonu: DNA daki baz dizisi değişimi'] },
        { baslik: 'Genetik ve Kalıtım', icerik: '<b>Mendel 1. Yasa (Ayrılma):</b> Alel genler gamet oluşumunda birbirinden ayrılır. <b>Mendel 2. Yasa (Bağımsız dağılım):</b> Farklı kromozomlardaki genler birbirinden bağımsız aktarılır. <b>Eş baskınlık:</b> Her iki alel de fenotipte görülür (AB kan grubu). <b>Eksik baskınlık:</b> Ara fenotip (kırmızı × beyaz = pembe).', anahtar: ['Eşeye bağlı kalıtım: X kromozomunda taşınır (renk körlüğü, hemofili)', 'Çok alellik: ABO kan grubu (Iᴬ, Iᴮ, i alelleri)', 'Soy ağacı analizi: Taşıyıcı, hasta, sağlam bireyleri belirleme', 'Otozomal resesif: Her iki ebeveyn taşıyıcı olmalı'] },
        { baslik: 'Evrim', icerik: '<b>Doğal seçilim:</b> Ortama uyum sağlayan bireyler hayatta kalır (Darwin). <b>Mutasyon:</b> DNA değişimi, evriminin hammaddesi. <b>Genetik sürüklenme:</b> Küçük popülasyonlarda rastgele alel frekansı değişimi. <b>Gen akışı:</b> Popülasyonlar arası birey göçü.', anahtar: ['Türleşme: Coğrafi veya üreme izolasyonu ile yeni tür oluşumu', 'Homolog organ: Ortak atadan, farklı işlev (insan kolu, balina yüzgeci)', 'Analog organ: Farklı köken, benzer işlev (kuş kanadı, böcek kanadı)', 'Kalıntı organ: İşlevini kaybetmiş organ (apandis)'] },
        { baslik: 'Bitki Biyolojisi', icerik: '<b>Ksilem:</b> Kökten yapraklara su ve mineral taşır (tek yön, ölü hücre). <b>Floem:</b> Yapraklardan diğer organlara organik madde taşır (canlı hücre). <b>Terleme:</b> Stomalardan su kaybı, ksilemi çeker.', anahtar: ['Bitki hormonları: Oksin (büyüme), Sitokinin (bölünme), Giberellin (uzama), Absisik asit (stres), Etilen (olgunlaşma)', 'Fotoperiodizm: Gün uzunluğuna göre çiçeklenme', 'Kısa gün bitkisi: Gecesi uzun olunca çiçeklenir', 'Turgor basıncı: Hücre zarının çepere basıncı'] }
      ],
      sorular: [
        { soru: 'Fotosentezin ışık reaksiyonları hücrenin hangi bölümünde gerçekleşir?', secenekler: ['Stroma', 'Sitoplazma', 'Tilakoid', 'Mitokondri', 'Çekirdek'], dogruCevap: 2, aciklama: 'Işık reaksiyonları kloroplastın tilakoid zarlarında gerçekleşir. Karanlık reaksiyonlar ise stromada gerçekleşir.' },
        { soru: '1 mol glikozun tam oksidasyon (aerobik solunum) sonucu toplam kaç ATP üretilir?', secenekler: ['2', '4', '34', '36', '38'], dogruCevap: 4, aciklama: 'Glikoliz: 2 ATP + Krebs: 2 ATP + ETS: 34 ATP = Toplam 38 ATP.' },
        { soru: 'mRNA üzerindeki AUG kodonu neyi ifade eder?', secenekler: ['Durma kodonu', 'Başlangıç kodonu (Metiyonin)', 'Lösin aminoasidi', 'Alanin aminoasidi', 'İntron bölgesi'], dogruCevap: 1, aciklama: 'AUG evrensel başlangıç kodonudur ve metiyonin aminoasidini kodlar.' },
        { soru: 'AB kan grubuna sahip biri ile O kan grubuna sahip birinin çocuklarının kan grubu ne olabilir?', secenekler: ['Sadece AB', 'A veya B', 'A, B veya AB', 'Sadece O', 'A, B, AB veya O'], dogruCevap: 1, aciklama: 'AB (Iᴬ Iᴮ) × O (ii) → Iᴬi (A grubu) veya Iᴮi (B grubu). Çocuklar A veya B kan grubunda olabilir.' },
        { soru: 'Doğal seçilim teorisini ortaya koyan bilim insanı kimdir?', secenekler: ['Mendel', 'Lamarck', 'Darwin', 'Watson', 'Pasteur'], dogruCevap: 2, aciklama: 'Charles Darwin, doğal seçilim yoluyla evrimi açıklayan teoriyi ortaya koymuştur.' },
        { soru: 'Bitkide su ve minerallerin kökten yapraklara taşınmasını sağlayan doku hangisidir?', secenekler: ['Floem', 'Ksilem', 'Parankima', 'Kollenkima', 'Sklerenkima'], dogruCevap: 1, aciklama: 'Ksilem (odun boruları) su ve mineralleri kökten yapraklara tek yönlü taşır.' },
        { soru: 'C4 bitkilerinin C3 bitkilerine göre avantajı nedir?', secenekler: ['Daha az su tüketir', 'Daha az ışık gerektirir', 'Sıcak ve kurak ortamda daha verimli fotosentez yapar', 'Gece fotosentez yapar', 'Daha fazla kloroplast içerir'], dogruCevap: 2, aciklama: 'C4 bitkileri sıcak ve kurak ortamlarda fotorespirasyonu minimize ederek daha verimli fotosentez yapar.' }
      ]
    },

    // -------------------- TYT TARİH --------------------
    tytTarih: {
      ad: 'TYT Tarih', renk: '#e67e22', ikon: '📜', sinav: 'TYT', soruSayisi: 5,
      hapBilgiler: [
        { baslik: 'İlk Türk Devletleri', icerik: '<b>Asya Hun:</b> Bilinen ilk Türk devleti, Mete Han onlu sistemi kurdu. <b>Göktürkler:</b> Türk adıyla kurulan ilk devlet, Orhun Yazıtları (Bilge Kağan, Kül Tigin, Tonyukuk). <b>Uygurlar:</b> Yerleşik hayata geçen ilk Türk devleti, matbaa ve kâğıdı kullandılar.', anahtar: ['Mete Han: Orduyu onluk sisteme göre düzenledi', 'Göktürk Yazıtları: Türk tarihinin ilk yazılı belgeleri', 'Uygurlar: Maniheizm dinini benimsediler', 'Kürşad İhtilali: Göktürk bağımsızlık hareketi', 'Kurultay: Devlet işlerinin görüşüldüğü meclis'] },
        { baslik: 'İlk Müslüman Türk Devletleri', icerik: '<b>Karahanlılar:</b> İlk Müslüman Türk devleti (840-1212). <b>Gazneliler:</b> İslamı Hindistana yaydılar. <b>Büyük Selçuklu:</b> 1040 Dandanakan ile bağımsız, 1071 Malazgirt ile Anadolunun kapısını açtılar.', anahtar: ['Karahanlılar: Türkçeyi resmi dil olarak kullanan ilk İslam devleti', 'Kutadgu Bilig: Yusuf Has Hacip (ilk siyasetname)', 'Divanü Lügati-t Türk: Kaşgarlı Mahmud (ilk Türkçe sözlük)', 'Nizam-ül Mülk: Büyük Selçukluda vezir, Nizamiye medreselerini kurdu'] },
        { baslik: 'Osmanlı Kuruluş-Yükselme', icerik: '<b>Kuruluş:</b> Osman Bey → Orhan Bey (ilk medrese: İznik) → I. Murad (Devşirme, Tımar, Yeniçeri) → Yıldırım Bayezid (Ankara Savaşı 1402: Fetret Devri). <b>Yükselme:</b> Fatih (İstanbul 1453), Yavuz (Mısır seferi, Halifelik), Kanuni (Mohaç 1526, Preveze 1538).', anahtar: ['İstanbulun fethi: Orta Çağ sonu, Yeni Çağ başlangıcı', 'Kanuni dönemi: Osmanlının en geniş sınırları', 'Tımar sistemi: Toprağı işle, vergi topla, asker yetiştir', 'Kapitülasyonlar: Kanuni-Fransa (ilk ticari ayrıcalıklar)'] },
        { baslik: 'Osmanlı Gerileme-Dağılma', icerik: '<b>Karlofça (1699):</b> İlk büyük toprak kaybı. <b>Lale Devri (1718-1730):</b> İlk matbaa (İbrahim Müteferrika). <b>Tanzimat Fermanı (1839):</b> Hukuk devleti, eşitlik. <b>I. Meşrutiyet (1876):</b> Anayasa, Meclis. <b>II. Meşrutiyet (1908):</b> İttihat ve Terakki.', anahtar: ['III. Selim: Nizam-ı Cedit ordusu', 'II. Mahmud: Yeniçeri Ocağını kaldırdı (1826 - Vaka-i Hayriye)', 'Islahat Fermanı (1856): Gayrimüslimlere eşit haklar', 'Duyun-u Umumiye (1881): Osmanlı borçlarını yönetme kurumu'] },
        { baslik: 'Kurtuluş Savaşı', icerik: '<b>Mondros (1918):</b> Ateşkes. <b>Kongreler:</b> Erzurum (bölgesel), Sivas (ulusal). <b>TBMM:</b> 23 Nisan 1920. <b>Savaşlar:</b> I-II. İnönü, Sakarya, Büyük Taarruz (26-30 Ağustos 1922). <b>Mudanya Ateşkesi:</b> 11 Ekim 1922. <b>Lozan:</b> 24 Temmuz 1923.', anahtar: ['Amasya Genelgesi: Kurtuluş Savaşının gerekçesi ve yöntemi', 'Misak-ı Milli: Son Osmanlı Mebusan Meclisinde kabul (28 Ocak 1920)', 'Sakarya: Savunma savaşından taarruza geçiş', 'Lozan: Tam bağımsızlığın uluslararası kabulü'] },
        { baslik: 'Atatürk İlke ve İnkılapları', icerik: '<b>6 İlke:</b> Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık. <b>Siyasi:</b> Saltanatın kaldırılması, Cumhuriyetin ilanı, Halifeliğin kaldırılması. <b>Hukuki:</b> Medeni Kanun (1926). <b>Eğitim:</b> Tevhid-i Tedrisat, Harf İnkılabı.', anahtar: ['Saltanat: 1 Kasım 1922 de kaldırıldı', 'Cumhuriyet: 29 Ekim 1923 ilan edildi', 'Halifelik: 3 Mart 1924 kaldırıldı', 'Kadınlara seçme-seçilme hakkı: 1934', 'Soyadı Kanunu: 1934'] }
      ],
      sorular: [
        { soru: 'Türk tarihinin bilinen ilk yazılı belgeleri hangisidir?', secenekler: ['Kutadgu Bilig', 'Orhun Yazıtları', 'Divanü Lügati-t Türk', 'Nutuk', 'Mecelle'], dogruCevap: 1, aciklama: 'Orhun (Göktürk) Yazıtları, Türk tarihinin ilk yazılı belgeleridir (8. yüzyıl).' },
        { soru: 'İlk Müslüman Türk devleti hangisidir?', secenekler: ['Büyük Selçuklu', 'Gazneliler', 'Karahanlılar', 'Osmanlı', 'Göktürkler'], dogruCevap: 2, aciklama: 'Karahanlılar (840-1212) İslamiyeti kabul eden ilk Türk devletidir.' },
        { soru: 'İstanbulun fethinin (1453) sonuçlarından biri aşağıdakilerden hangisidir?', secenekler: ['Lale Devri başlamıştır', 'Fetret Devri sona ermiştir', 'Orta Çağ sona ermiş, Yeni Çağ başlamıştır', 'Tanzimat Fermanı ilan edilmiştir', 'Yeniçeri Ocağı kurulmuştur'], dogruCevap: 2, aciklama: 'İstanbulun fethi (1453) tarihte Orta Çağın sonu ve Yeni Çağın başlangıcı olarak kabul edilir.' },
        { soru: 'Osmanlıda ilk matbaa hangi dönemde kurulmuştur?', secenekler: ['Kuruluş Dönemi', 'Yükselme Dönemi', 'Duraklama Dönemi', 'Lale Devri', 'Tanzimat Dönemi'], dogruCevap: 3, aciklama: 'İlk matbaa Lale Devri\'nde (1718-1730) İbrahim Müteferrika tarafından kurulmuştur.' },
        { soru: 'TBMM ne zaman açılmıştır?', secenekler: ['19 Mayıs 1919', '23 Nisan 1920', '29 Ekim 1923', '30 Ağustos 1922', '24 Temmuz 1923'], dogruCevap: 1, aciklama: 'TBMM 23 Nisan 1920\'de Ankara\'da açılmıştır.' },
        { soru: 'Aşağıdakilerden hangisi Atatürk ilkelerinden biri DEĞİLDİR?', secenekler: ['Cumhuriyetçilik', 'Milliyetçilik', 'Bağımsızlık', 'Laiklik', 'Halkçılık'], dogruCevap: 2, aciklama: 'Bağımsızlık, Atatürkün bütünleyici ilkelerindendir. 6 temel ilke: Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık.' }
      ]
    },

    // -------------------- TYT COĞRAFYA --------------------
    tytCografya: {
      ad: 'TYT Coğrafya', renk: '#1abc9c', ikon: '🌍', sinav: 'TYT', soruSayisi: 5,
      hapBilgiler: [
        { baslik: 'Dünya\'nın Hareketleri', icerik: '<b>Günlük hareket (dönme):</b> Kendi ekseni etrafında batıdan doğuya 24 saatte. Sonuçları: Gece-gündüz, yerel saat farkları, Coriolis etkisi. <b>Yıllık hareket (dolanma):</b> Güneş etrafında 365.25 günde. Sonuçları: Mevsimler, gece-gündüz süre farkları.', anahtar: ['21 Haziran: Yaz gündönümü (kuzey yarımkürede en uzun gündüz)', '21 Aralık: Kış gündönümü (kuzey yarımkürede en kısa gündüz)', '21 Mart ve 23 Eylül: Ekinoks (gece=gündüz, 12 saat)', 'Ekvatorda her zaman gece=gündüz'] },
        { baslik: 'Koordinat Sistemi ve Saat', icerik: '<b>Paraleller:</b> Ekvatordan kutuplara 0-90 derece (enlem). <b>Meridyenler:</b> Başlangıç meridyeninden 0-180 derece (boylam). İki meridyen arası 4 dakika saat farkı. Türkiye 3 saat dilimindedir (UTC+3).', anahtar: ['Her 15 meridyen = 1 saat dilimi', 'Doğuya gidildikçe saat ileri, batıya gidildikçe geri', 'Türkiye 26-45 doğu meridyenleri arası', 'Enlem arttıkça sıcaklık azalır'] },
        { baslik: 'İklim Bilgisi', icerik: '<b>Ekvatoral:</b> Yıl boyu sıcak ve yağışlı. <b>Muson:</b> Yaz yağışlı, kış kurak. <b>Akdeniz:</b> Yaz sıcak-kurak, kış ılık-yağışlı. <b>Karasal:</b> Yaz sıcak, kış soğuk, az yağış. <b>Kutup:</b> Yıl boyu soğuk ve kurak.', anahtar: ['Türkiye\'de Akdeniz, Karadeniz, karasal ve step iklimi görülür', 'Karadeniz iklimi: Her mevsim yağışlı', 'Basınç artarsa yağış azalır (alçalan hava)', 'Rüzgar: Yüksek basınçtan alçak basınca eser'] },
        { baslik: 'İç ve Dış Kuvvetler', icerik: '<b>İç kuvvetler:</b> Orojenez (dağ oluşumu), Epirojenez (kıta oluşumu), Volkanizma, Deprem. <b>Dış kuvvetler:</b> Akarsu, rüzgar, buzul, dalga aşındırması ve biriktirmesi.', anahtar: ['Orojenez: Kıvrılma ve kırılma ile dağ oluşumu', 'Türkiye genç oluşumlu (Alp-Himalaya kuşağı) = Deprem riski yüksek', 'Akarsu aşındırması: V biçimli vadi, kanyon', 'Rüzgar biriktirmesi: Kumul, barkan, lös'] },
        { baslik: 'Türkiye\'nin Fiziki Coğrafyası', icerik: 'Türkiye 4 coğrafi bölgenin kesişiminde: Akdeniz havzası, Karadeniz, İç Anadolu, Doğu Anadolu. Kuzey Anadolu Dağları (Kaçkar), Toroslar güneyde. Ortalama yükseklik 1132 m (yüksek ülke).', anahtar: ['En yüksek dağ: Ağrı (5137 m)', 'En uzun akarsu: Kızılırmak (1355 km)', 'En büyük göl: Van Gölü', 'En fazla yağış: Doğu Karadeniz (Rize)', 'İç Anadolu\'da step (bozkır) bitki örtüsü'] },
        { baslik: 'Nüfus ve Yerleşme', icerik: '<b>Nüfus artış hızı:</b> Doğum oranı - ölüm oranı. <b>Nüfus piramidi:</b> Genç nüfus (geniş taban), yaşlı nüfus (dar taban). <b>Göç türleri:</b> İç göç (kırdan kente), dış göç (beyin göçü).', anahtar: ['Türkiye\'de nüfus batıda yoğun, doğuda seyrek', 'Göçün itici nedenleri: İşsizlik, terör, doğal afet', 'Göçün çekici nedenleri: İş imkanı, eğitim, sağlık', 'Gecekondulaşma: Hızlı kentleşmenin sonucu'] }
      ],
      sorular: [
        { soru: '21 Haziran\'da Kuzey Yarımküre\'de aşağıdakilerden hangisi gerçekleşir?', secenekler: ['En kısa gündüz yaşanır', 'Gece ve gündüz eşittir', 'En uzun gündüz yaşanır', 'Sonbahar başlar', 'Güneş ışınları Ekvator\'a dik gelir'], dogruCevap: 2, aciklama: '21 Haziran Kuzey Yarımküre\'de yaz gündönümüdür. En uzun gündüz yaşanır ve Güneş ışınları Yengeç Dönencesi\'ne dik gelir.' },
        { soru: '45° doğu meridyeninde saat 15:00 iken 30° doğu meridyeninde saat kaçtır?', secenekler: ['13:00', '14:00', '15:00', '16:00', '17:00'], dogruCevap: 1, aciklama: 'Meridyen farkı: 45-30 = 15°. Saat farkı: 15 × 4 = 60 dakika = 1 saat. Batıda olduğu için 1 saat geri: 15:00 - 1 = 14:00.' },
        { soru: 'Aşağıdaki iklim tiplerinden hangisinde yaz mevsimi kurak geçer?', secenekler: ['Ekvatoral', 'Karadeniz', 'Akdeniz', 'Muson', 'Kutup'], dogruCevap: 2, aciklama: 'Akdeniz ikliminde yazlar sıcak ve kurak, kışlar ılık ve yağışlı geçer.' },
        { soru: 'Aşağıdakilerden hangisi bir dış kuvvettir?', secenekler: ['Deprem', 'Volkanizma', 'Orojenez', 'Akarsu aşındırması', 'Epirojenez'], dogruCevap: 3, aciklama: 'Akarsu aşındırması bir dış kuvvettir. Deprem, volkanizma, orojenez ve epirojenez iç kuvvetlerdir.' },
        { soru: 'Türkiye\'nin en uzun akarsuyu hangisidir?', secenekler: ['Fırat', 'Dicle', 'Kızılırmak', 'Sakarya', 'Seyhan'], dogruCevap: 2, aciklama: 'Kızılırmak 1355 km ile Türkiye\'nin en uzun akarsuyudur.' },
        { soru: 'Kırdan kente göçün en önemli nedeni aşağıdakilerden hangisidir?', secenekler: ['Hava kirliliği', 'İş imkanlarının fazla olması', 'Trafik sorunu', 'Gürültü kirliliği', 'Nüfus yoğunluğu'], dogruCevap: 1, aciklama: 'Kırdan kente göçün en önemli çekici nedeni kentlerdeki iş imkanlarının fazla olmasıdır.' }
      ]
    },

    // -------------------- TYT FELSEFE --------------------
    tytFelsefe: {
      ad: 'TYT Felsefe', renk: '#f39c12', ikon: '🤔', sinav: 'TYT', soruSayisi: 5,
      hapBilgiler: [
        { baslik: 'Felsefenin Tanımı', icerik: 'Felsefe "bilgelik sevgisi" anlamına gelir (Philosophia). Felsefe; akıl ve mantık yoluyla evren, insan, bilgi, varlık, ahlak gibi temel konuları sorgulayan düşünce etkinliğidir. Bilimden farkı: Felsefe soru sorar, bilim cevap arar. Felsefede kesin cevap yoktur.', anahtar: ['Felsefi düşünce: Eleştirel, refleksif, tutarlı, evrensel', 'Bilim: Deney-gözlem, kesin, olgusal', 'Felsefe: Akıl-mantık, tartışmalı, spekülatif', 'Felsefi soru: "Bilgi nedir?", "Varlık nedir?", "Adalet nedir?"'] },
        { baslik: 'Bilgi Felsefesi (Epistemoloji)', icerik: 'Bilginin kaynağı, sınırları ve doğruluğunu araştırır. <b>Rasyonalizm:</b> Bilginin kaynağı akıldır (Descartes, Platon). <b>Empirizm:</b> Bilginin kaynağı deneyimdir (Locke, Hume). <b>Kritisizm:</b> Hem akıl hem deney (Kant). <b>Pragmatizm:</b> Yararlı olan doğrudur (James).', anahtar: ['Dogmatizm: Kesin bilgiye ulaşılabilir', 'Septisizm: Kesin bilgiye ulaşılamaz (şüphecilik)', 'Pozitivizm: Sadece bilimsel bilgi geçerlidir (Comte)', 'Descartes: "Düşünüyorum öyleyse varım"'] },
        { baslik: 'Varlık Felsefesi (Ontoloji)', icerik: 'Varlığın ne olduğunu, var olmanın anlamını araştırır. <b>Materyalizm:</b> Varlık maddedir (Demokritos, Marx). <b>İdealizm:</b> Varlık düşüncedir/ruhtur (Platon, Hegel). <b>Düalizm:</b> Hem madde hem ruh (Descartes). <b>Nihilizm:</b> Hiçbir şey gerçekte var değildir.', anahtar: ['Platon: İdealar dünyası gerçek, duyular dünyası gölge', 'Aristoteles: Form + Madde birlikte', 'Demokritos: Her şey atomlardan oluşur', 'Varoluşçuluk: Varoluş özden önce gelir (Sartre)'] },
        { baslik: 'Ahlak Felsefesi (Etik)', icerik: 'İyi-kötü, doğru-yanlış gibi ahlaki değerleri inceler. <b>Hedonizm:</b> Haz veren iyi (Epikuros). <b>Eudaimonizm:</b> Mutluluk en yüksek iyi (Aristoteles). <b>Faydacılık:</b> En çok kişiye en çok yarar (Bentham, Mill). <b>Deontoloji:</b> Ödev ahlakı, sonuç değil niyet önemli (Kant).', anahtar: ['Kant: Ödev ahlakı, evrensel ahlak yasası (kategorik imperatif)', 'Erdem etiği: Erdemli insan olmak (Aristoteles)', 'Ahlaki görecelik: Ahlak toplumdan topluma değişir', 'Evrensel ahlak: Ahlak kuralları evrenseldir'] },
        { baslik: 'Siyaset ve Din Felsefesi', icerik: '<b>Siyaset felsefesi:</b> Devlet, iktidar, adalet, özgürlük kavramlarını inceler. <b>Din felsefesi:</b> Tanrının varlığı, dinin anlamı gibi konuları akıl yoluyla araştırır.', anahtar: ['Teizm: Tanrı vardır ve evrene müdahale eder', 'Deizm: Tanrı evreni yarattı ama müdahale etmez', 'Ateizm: Tanrı yoktur', 'Agnostisizm: Tanrının varlığı bilinemez', 'Panteizm: Tanrı = Doğa/Evren (Spinoza)'] }
      ],
      sorular: [
        { soru: '"Bilginin tek kaynağı akıldır, duyular bizi yanıltabilir" görüşünü savunan felsefi akım hangisidir?', secenekler: ['Empirizm', 'Rasyonalizm', 'Pragmatizm', 'Pozitivizm', 'Septisizm'], dogruCevap: 1, aciklama: 'Rasyonalizm (akılcılık), bilginin kaynağının akıl olduğunu savunur. Temsilcileri: Descartes, Platon, Leibniz.' },
        { soru: '"Düşünüyorum, öyleyse varım" sözü hangi filozofa aittir?', secenekler: ['Platon', 'Aristoteles', 'Descartes', 'Kant', 'Hume'], dogruCevap: 2, aciklama: 'Bu ünlü söz René Descartes\'a aittir. Her şeyden şüphe edilebilir ama şüphe eden bir düşüncenin var olduğundan şüphe edilemez.' },
        { soru: 'Varlığın temelinde maddenin olduğunu savunan felsefi görüş hangisidir?', secenekler: ['İdealizm', 'Materyalizm', 'Nihilizm', 'Düalizm', 'Fenomenoloji'], dogruCevap: 1, aciklama: 'Materyalizm, varlığın özünün madde olduğunu savunur. Temsilcileri: Demokritos, Marx.' },
        { soru: 'Kant\'ın ahlak felsefesinde temel ilke nedir?', secenekler: ['Haz ilkesi', 'Yarar ilkesi', 'Ödev ilkesi', 'Mutluluk ilkesi', 'Güç ilkesi'], dogruCevap: 2, aciklama: 'Kant\'ın deontolojik (ödev) ahlak anlayışında, eylem sonucuna değil, arkasındaki niyete ve ödeve bakılır.' },
        { soru: '"Tanrı evreni yaratmıştır ama sonrasında müdahale etmez" görüşü aşağıdakilerden hangisidir?', secenekler: ['Teizm', 'Ateizm', 'Deizm', 'Panteizm', 'Agnostisizm'], dogruCevap: 2, aciklama: 'Deizm, Tanrının evreni yarattığını ancak sonrasında doğa yasalarına bıraktığını ve müdahale etmediğini savunur.' }
      ]
    },

    // -------------------- AYT TARİH --------------------
    aytTarih: {
      ad: 'AYT Tarih', renk: '#d35400', ikon: '🏛️', sinav: 'AYT', soruSayisi: 10,
      hapBilgiler: [
        { baslik: 'İlk Uygarlıklar', icerik: '<b>Sümerler:</b> İlk yazı (çivi yazısı), ilk hukuk kuralları, matematik, astronomi. <b>Mısır:</b> Hiyeroglif, piramitler, mumyalama. <b>Hititler:</b> Anadolunun ilk büyük devleti, Kadeş Antlaşması (ilk yazılı antlaşma). <b>Fenikeliler:</b> İlk alfabe. <b>Lidyalılar:</b> İlk parayı kullandılar.', anahtar: ['Sümerler: Zigurat (tapınak), Gılgamış Destanı', 'Kadeş Antlaşması: Hitit-Mısır (MÖ 1280)', 'İyonyalılar: İlk filozoflar (Thales, Herakleitos)', 'Roma: Cumhuriyet → İmparatorluk, 12 Levha Kanunları'] },
        { baslik: 'İslam Tarihi', icerik: '<b>Hz. Muhammed:</b> 622 Hicret (İslam takvimi başlangıcı), 630 Mekkenin Fethi. <b>Dört Halife:</b> Hz. Ebubekir (Ridde savaşları), Hz. Ömer (fetihler), Hz. Osman (Kuranın kitaplaştırılması), Hz. Ali (iç karışıklıklar). <b>Emeviler:</b> Saltanat sistemi. <b>Abbasiler:</b> Bilim ve kültür altın çağı.', anahtar: ['Bedir (624): İlk savaş, Müslümanlar kazandı', 'Uhud (625): Müslümanlar zorlandı', 'Hendek (627): Savunma savaşı', 'Hudeybiye (628): Barış antlaşması'] },
        { baslik: 'Anadolu Selçuklu Devleti', icerik: '<b>Malazgirt (1071):</b> Anadolunun kapısı açıldı. <b>Miryokefalon (1176):</b> Bizansın son karşı koyma çabası kırıldı. <b>Kösedağ (1243):</b> Moğol hakimiyeti başladı. <b>Ahi teşkilatı:</b> Esnaf ve zanaatkar örgütü.', anahtar: ['I. Kılıçarslan: Haçlılara karşı mücadele', 'I. Alaeddin Keykubad: En parlak dönem', 'Kervansaraylar: Ticaret yolları güvenliği', 'Medreseler: Eğitim kurumları (Sivas Çifte Minareli)'] },
        { baslik: 'Osmanlı Kurumları', icerik: '<b>Divan-ı Hümayun:</b> Padişahın başkanlığında devlet işlerinin görüşüldüğü kurul. <b>Tımar sistemi:</b> Toprak yönetim düzeni. <b>Devşirme:</b> Hristiyan çocuklardan asker/bürokrat yetiştirme. <b>Kapıkulu:</b> Padişaha bağlı merkez ordusu (Yeniçeriler).', anahtar: ['Divan üyeleri: Sadrazam, kazasker, defterdar, nişancı, şeyhülislam', 'Has: Geliri padişah/vezirlere ayrılan toprak', 'Zeamet: Geliri orta düzey askerlere ayrılan toprak', 'Tımar: Geliri sipahilere ayrılan toprak'] },
        { baslik: 'XIX. Yüzyıl Islahatları', icerik: '<b>III. Selim:</b> Nizam-ı Cedit (yeni ordu). <b>II. Mahmud:</b> Yeniçeri Ocağını kaldırdı (1826), ilk nüfus sayımı, Tıbbiye/Harbiye açtı. <b>Tanzimat (1839):</b> Kanun üstünlüğü, can/mal güvenliği. <b>Islahat (1856):</b> Gayrimüslimlere eşit haklar.', anahtar: ['Sened-i İttifak (1808): Padişah yetkilerini sınırlayan ilk belge', 'Tanzimat: Batılılaşma hareketinin doruk noktası', 'I. Meşrutiyet (1876): Kanun-i Esasi (ilk anayasa), Meclis-i Mebusan', 'II. Meşrutiyet (1908): İttihat ve Terakki Cemiyeti baskısıyla'] },
        { baslik: 'Milli Mücadele ve Cumhuriyet', icerik: '<b>Amasya Genelgesi:</b> Kurtuluş Savaşının gerekçesi. <b>Erzurum Kongresi:</b> Bölgesel, milli sınırlar. <b>Sivas Kongresi:</b> Ulusal, temsil heyeti seçimi. <b>TBMM:</b> 23 Nisan 1920. <b>Lozan (1923):</b> Uluslararası tanınma. <b>Cumhuriyet:</b> 29 Ekim 1923.', anahtar: ['Sevr (1920): Kabul edilmeyen barış dayatması', 'I. İnönü: Düzenli ordunun ilk zaferi', 'Sakarya: Savaşın dönüm noktası', 'Büyük Taarruz: Kesin zafer (26-30 Ağustos 1922)', 'Teşkilat-ı Esasiye (1921): İlk anayasa'] }
      ],
      sorular: [
        { soru: 'Tarihte bilinen ilk yazılı antlaşma hangisidir?', secenekler: ['Vestfalya', 'Kadeş', 'Lozan', 'Karlofça', 'Mondros'], dogruCevap: 1, aciklama: 'Kadeş Antlaşması (MÖ 1280), Hititler ile Mısır arasında yapılmış olup tarihte bilinen ilk yazılı antlaşmadır.' },
        { soru: 'İslam takviminin başlangıcı olarak kabul edilen olay hangisidir?', secenekler: ['Mekkenin Fethi', 'Bedir Savaşı', 'Hicret', 'Veda Haccı', 'Uhud Savaşı'], dogruCevap: 2, aciklama: '622 yılındaki Hicret (Mekkeden Medineye göç) İslam takviminin başlangıcı olarak kabul edilir.' },
        { soru: '1243 Kösedağ Savaşı\'nın sonucu nedir?', secenekler: ['Anadolu kapısı açıldı', 'Bizans yenildi', 'Selçuklular Moğol hakimiyetine girdi', 'Haçlılar yenildi', 'Osmanlı kuruldu'], dogruCevap: 2, aciklama: 'Kösedağ Savaşı\'nda Anadolu Selçuklu Devleti Moğollara yenilmiş ve Moğol hakimiyeti altına girmiştir.' },
        { soru: 'Osmanlı\'da Divan-ı Hümayun\'da mali işlerden sorumlu üye kimdir?', secenekler: ['Kazasker', 'Sadrazam', 'Defterdar', 'Nişancı', 'Şeyhülislam'], dogruCevap: 2, aciklama: 'Defterdar, Osmanlı Divan-ı Hümayun\'unda mali (ekonomik) işlerden sorumlu üyedir.' },
        { soru: 'Osmanlı tarihinde Yeniçeri Ocağı\'nı kaldıran padişah kimdir?', secenekler: ['III. Selim', 'II. Mahmud', 'Abdülmecit', 'Abdülaziz', 'II. Abdülhamid'], dogruCevap: 1, aciklama: 'II. Mahmud, 1826 yılında Vaka-i Hayriye olayıyla Yeniçeri Ocağı\'nı kaldırmıştır.' },
        { soru: 'Kurtuluş Savaşı\'nda düzenli ordunun kazandığı ilk zafer hangisidir?', secenekler: ['Sakarya', 'Büyük Taarruz', 'I. İnönü', 'Dumlupınar', 'Kütahya-Eskişehir'], dogruCevap: 2, aciklama: 'I. İnönü Muharebesi (6-10 Ocak 1921) düzenli ordunun kazandığı ilk zaferdir.' }
      ]
    },

    // -------------------- AYT COĞRAFYA --------------------
    aytCografya: {
      ad: 'AYT Coğrafya', renk: '#16a085', ikon: '🗺️', sinav: 'AYT', soruSayisi: 6,
      hapBilgiler: [
        { baslik: 'Doğal Sistemler', icerik: '<b>Jeolojik zamanlar:</b> 1. Zaman (Paleozoik): Kaledonyen ve Hersinyen dağlar. 2. Zaman (Mesozoik): Dinozorlar, kömür. 3. Zaman (Senozoik): Alp-Himalaya dağları. 4. Zaman (Kuaterner): Buzul çağları. <b>Toprak tipleri:</b> Zonal (iklime bağlı), intrazonal (ana kayaya bağlı), azonal (taşınmış).', anahtar: ['Terra Rossa: Akdeniz ikliminde kırmızı toprak', 'Çernezyom: En verimli toprak (step iklimi)', 'Laterit: Ekvatoral bölgede yıkanmış toprak', 'Podzol: Soğuk-nemli bölge toprağı'] },
        { baslik: 'Beşeri Sistemler', icerik: '<b>Nüfus politikaları:</b> Anti-natalist (doğumu azaltma: Çin), pro-natalist (doğumu artırma: Fransa). <b>Şehirleşme:</b> Sanayileşmeyle paralel artar. <b>Küreselleşme:</b> Ekonomik, kültürel, siyasi bütünleşme.', anahtar: ['Gelişmiş ülke: Yaşlı nüfus, düşük doğum, yüksek gelir', 'Gelişmekte olan: Genç nüfus, yüksek doğum, düşük gelir', 'Kentleşme sorunları: Gecekondu, trafik, çevre kirliliği', 'Beyin göçü: Nitelikli iş gücünün gelişmiş ülkelere göçü'] },
        { baslik: 'Türkiye\'nin Bölgeleri', icerik: '<b>7 coğrafi bölge:</b> Marmara (en kalabalık, sanayi), Ege (turizm, tarım), Akdeniz (narenciye, turizm), Karadeniz (çay, fındık), İç Anadolu (tahıl), Doğu Anadolu (en soğuk, hayvancılık), Güneydoğu Anadolu (GAP, pamuk).', anahtar: ['En küçük bölge: Marmara (yüzölçümü olarak Güneydoğu Anadolu)', 'En seyrek nüfuslu: Doğu Anadolu', 'En fazla göç veren: Doğu ve Güneydoğu', 'GAP: Fırat-Dicle, 22 baraj, tarım+enerji'] },
        { baslik: 'Küresel Çevre Sorunları', icerik: '<b>Küresel ısınma:</b> Sera gazları (CO₂, metan) artışı. <b>Ozon tabakası incelmesi:</b> CFC gazları. <b>Asit yağmurları:</b> SO₂ ve NOₓ. <b>Çölleşme:</b> Aşırı otlatma, ormansızlaşma. <b>Ekolojik ayak izi:</b> İnsanın doğaya bıraktığı iz.', anahtar: ['Paris İklim Anlaşması: Küresel sıcaklık artışını 1.5°C ile sınırlama', 'Sürdürülebilir kalkınma: Gelecek nesillerin ihtiyacını karşılama', 'Biyoçeşitlilik kaybı: Tür yok oluşları', 'Karbon ayak izi: CO₂ salınım miktarı'] },
        { baslik: 'Doğal Kaynaklar ve Enerji', icerik: '<b>Yenilenebilir:</b> Güneş, rüzgar, hidroelektrik, jeotermal, biyokütle. <b>Yenilenemez:</b> Petrol, kömür, doğalgaz, nükleer. Türkiye\'de en çok kullanılan: Doğalgaz (ithalat), linyit (yerli).', anahtar: ['Türkiye petrol ve doğalgaz bakımından dışa bağımlı', 'Bor madeni: Türkiye dünya 1.si (%73)', 'Krom: Türkiye önemli üretici', 'Jeotermal: Denizli, Afyon, Kütahya'] }
      ],
      sorular: [
        { soru: 'Alp-Himalaya kıvrım kuşağı hangi jeolojik zamanda oluşmuştur?', secenekler: ['1. Zaman (Paleozoik)', '2. Zaman (Mesozoik)', '3. Zaman (Senozoik/Tersiyer)', '4. Zaman (Kuaterner)', 'Prekambriyen'], dogruCevap: 2, aciklama: 'Alp-Himalaya dağ kuşağı 3. Zaman (Tersiyer/Senozoik) da oluşmuştur. Türkiye\'deki dağların büyük bölümü bu kuşaktadır.' },
        { soru: 'Aşağıdaki toprak tiplerinden hangisi en verimli tarım toprağı olarak bilinir?', secenekler: ['Laterit', 'Podzol', 'Çernezyom', 'Terra Rossa', 'Tundra toprağı'], dogruCevap: 2, aciklama: 'Çernezyom (kara toprak) step ikliminde oluşan, organik madde bakımından zengin, en verimli toprak türüdür.' },
        { soru: 'Türkiye\'de en fazla fındık üretimi hangi bölgede yapılır?', secenekler: ['Marmara', 'Ege', 'Akdeniz', 'Karadeniz', 'İç Anadolu'], dogruCevap: 3, aciklama: 'Fındık üretiminde Karadeniz Bölgesi (özellikle Doğu Karadeniz) Türkiye ve dünya birincisidir.' },
        { soru: 'Sera etkisine en çok katkıda bulunan gaz hangisidir?', secenekler: ['Oksijen', 'Azot', 'Karbondioksit', 'Hidrojen', 'Helyum'], dogruCevap: 2, aciklama: 'Karbondioksit (CO₂) sera etkisine en çok katkıda bulunan gazdır. Fosil yakıt kullanımıyla atmosferdeki oranı artmaktadır.' },
        { soru: 'Türkiye hangi madende dünya liderdir?', secenekler: ['Demir', 'Bakır', 'Bor', 'Altın', 'Petrol'], dogruCevap: 2, aciklama: 'Türkiye dünya bor rezervlerinin yaklaşık %73\'üne sahiptir ve dünya birincisidir.' }
      ]
    },

    // -------------------- AYT FELSEFE GRUBU --------------------
    aytFelsefeGrubu: {
      ad: 'AYT Felsefe Grubu', renk: '#e74c3c', ikon: '📚', sinav: 'AYT', soruSayisi: 24,
      hapBilgiler: [
        // Felsefe
        { baslik: 'Felsefe Tarihi - Antik Çağ', icerik: '<b>Thales:</b> İlk filozof, "Her şeyin arkesi sudur." <b>Herakleitos:</b> "Her şey akar" (değişim). <b>Sokrates:</b> "Kendini bil", diyalektik yöntem. <b>Platon:</b> İdealar kuramı, mağara alegorisi. <b>Aristoteles:</b> Mantığın kurucusu, altın orta.', anahtar: ['Thales: Doğa felsefesinin kurucusu', 'Sokrates: Soru-cevap yöntemiyle bilgiye ulaşma', 'Platon: Gerçek bilgi idealar dünyasındadır', 'Aristoteles: Form + Madde, tümevarım yöntemi'] },
        { baslik: 'Felsefe Tarihi - Yeni/Yakın Çağ', icerik: '<b>Descartes:</b> Modern felsefenin babası, rasyonalizm, "Cogito ergo sum". <b>Locke:</b> Empirizm, tabula rasa (boş levha). <b>Kant:</b> Kritisizm, akıl+deney, ahlak yasası. <b>Hegel:</b> Diyalektik (tez-antitez-sentez). <b>Marx:</b> Tarihsel materyalizm. <b>Nietzsche:</b> Üst insan, değerlerin yeniden değerlendirilmesi.', anahtar: ['Hume: Nedensellik alışkanlıktır, radikal empirizm', 'Sartre: Varoluşçuluk, insan özgürlüğe mahkumdur', 'Husserl: Fenomenoloji, öze dönüş', 'Pragmatizm: Yararlı olan doğrudur (James, Dewey)'] },
        // Psikoloji
        { baslik: 'Psikoloji Ekolleri', icerik: '<b>Yapısalcılık:</b> Zihnin yapısı, içebakış (Wundt). <b>İşlevselcilik:</b> Zihnin işlevleri (James). <b>Davranışçılık:</b> Gözlenebilir davranış (Watson, Skinner). <b>Psikoanaliz:</b> Bilinçaltı (Freud). <b>Hümanizm:</b> İnsanın potansiyeli (Maslow, Rogers). <b>Gestalt:</b> Bütün parçaların toplamından fazladır.', anahtar: ['Freud: İd (ilkel dürtüler), Ego (gerçeklik), Süperego (ahlak)', 'Maslow: İhtiyaçlar hiyerarşisi (fizyolojik→güvenlik→ait olma→saygı→kendini gerçekleştirme)', 'Pavlov: Klasik koşullanma (köpek deneyi)', 'Skinner: Edimsel koşullanma (ödül-ceza)'] },
        { baslik: 'Öğrenme ve Bellek', icerik: '<b>Klasik koşullanma (Pavlov):</b> Nötr uyarıcı + koşulsuz uyarıcı → koşullu tepki. <b>Edimsel koşullanma (Skinner):</b> Davranışın sonuçlarıyla öğrenme (pekiştirme/ceza). <b>Sosyal öğrenme (Bandura):</b> Gözlem ve model alma. <b>Bellek:</b> Duyusal (anlık) → Kısa süreli (20-30 sn) → Uzun süreli.', anahtar: ['Olumlu pekiştirme: Hoşa giden uyarıcı ekleme', 'Olumsuz pekiştirme: Hoşa gitmeyen uyarıcı çıkarma', 'Olumlu ceza: Hoşa gitmeyen uyarıcı ekleme', 'Bilişsel öğrenme: İçgörü, kavrayarak öğrenme (Köhler)'] },
        // Sosyoloji
        { baslik: 'Sosyolojinin Temelleri', icerik: '<b>Comte:</b> Sosyolojinin kurucusu, pozitivizm. <b>Durkheim:</b> Toplumsal dayanışma, anomie. <b>Weber:</b> Anlayıcı sosyoloji, bürokrasi. <b>Marx:</b> Sınıf çatışması, tarihsel materyalizm. <b>Toplumsal kurumlar:</b> Aile, eğitim, ekonomi, siyaset, din.', anahtar: ['Toplumsal tabakalaşma: Sınıf, kast, zümre', 'Toplumsal hareketlilik: Dikey (yukarı/aşağı) ve yatay', 'Kültürleme: Toplumsallaşma, bireyin kültürü öğrenmesi', 'Kültür şoku: Farklı kültüre geçişte yaşanan uyumsuzluk'] },
        // Mantık
        { baslik: 'Mantık Temelleri', icerik: '<b>Düşünme ilkeleri:</b> Özdeşlik (A=A), Çelişmezlik (A ve ~A olamaz), Üçüncü halin imkansızlığı (A ya da ~A), Yeter neden. <b>Önerme:</b> Doğru ya da yanlış değer alan yargı. <b>Kıyas:</b> İki öncülden sonuç çıkarma.', anahtar: ['Kategorik önerme: Tüm S P dir (A tipi), Hiçbir S P değildir (E)', 'Bazı S P dir (I), Bazı S P değildir (O)', 'Koşullu kıyas: P ise Q, P; öyleyse Q (modus ponens)', 'Doğruluk tablosu: Tüm olası değer kombinasyonları', 'Totoloji: Her durumda doğru olan bileşik önerme'] }
      ],
      sorular: [
        { soru: '"Her şey akar, hiçbir şey olduğu gibi kalmaz" sözü hangi filozofa aittir?', secenekler: ['Thales', 'Parmenides', 'Herakleitos', 'Demokritos', 'Sokrates'], dogruCevap: 2, aciklama: 'Herakleitos değişimi temel ilke olarak kabul etmiş ve "Panta rhei" (her şey akar) demiştir.' },
        { soru: 'Platon\'un idealar kuramına göre gerçek bilgi nasıl elde edilir?', secenekler: ['Duyular yoluyla', 'Deney yoluyla', 'Akıl yoluyla ideaları kavrayarak', 'Gözlem yoluyla', 'Sezgi yoluyla'], dogruCevap: 2, aciklama: 'Platon\'a göre gerçek bilgi duyular dünyasında değil, akıl yoluyla kavranabilen idealar dünyasındadır.' },
        { soru: 'Freud\'un kişilik kuramında bilinçaltı dürtüleri ve ilkel istekleri temsil eden yapı hangisidir?', secenekler: ['Ego', 'Süperego', 'İd', 'Libido', 'Arketip'], dogruCevap: 2, aciklama: 'İd (alt benlik), Freud\'un kişilik kuramında bilinçaltı dürtüleri ve ilkel istekleri temsil eder. Haz ilkesine göre çalışır.' },
        { soru: 'Pavlov\'un köpek deneyinde zil sesi nedir?', secenekler: ['Koşulsuz uyarıcı', 'Koşullu uyarıcı', 'Koşulsuz tepki', 'Koşullu tepki', 'Nötr uyarıcı'], dogruCevap: 1, aciklama: 'Zil sesi başlangıçta nötr uyarıcıdır, koşullanma sonrası koşullu uyarıcı olur. Yiyecekle eşleştirildikten sonra tek başına salya tepkisi oluşturur.' },
        { soru: 'Sosyolojinin kurucusu olarak kabul edilen düşünür kimdir?', secenekler: ['Marx', 'Weber', 'Durkheim', 'Comte', 'Spencer'], dogruCevap: 3, aciklama: 'Auguste Comte, "sosyoloji" terimini ilk kullanan ve bu bilim dalının kurucusu olarak kabul edilen düşünürdür.' },
        { soru: 'Maslow\'un ihtiyaçlar hiyerarşisinde en üst basamak hangisidir?', secenekler: ['Güvenlik', 'Fizyolojik', 'Ait olma', 'Saygı', 'Kendini gerçekleştirme'], dogruCevap: 4, aciklama: 'Maslow\'un piramidinde sıra: Fizyolojik → Güvenlik → Ait olma/Sevgi → Saygı → Kendini gerçekleştirme.' },
        { soru: '"P ise Q dir. P dir. Öyleyse Q dir." çıkarımı mantıkta ne olarak adlandırılır?', secenekler: ['Modus tollens', 'Modus ponens', 'Kıyas', 'Tümevarım', 'Analoji'], dogruCevap: 1, aciklama: 'Bu çıkarım biçimi modus ponens (olumlu koşullu kıyas) olarak adlandırılır. Koşulun gerçekleşmesinden sonuca ulaşılır.' },
        { soru: 'Durkheim\'a göre toplumsal kuralların zayıfladığı ve bireylerin normsuzluk yaşadığı durum nedir?', secenekler: ['Yabancılaşma', 'Anomie', 'Kültür şoku', 'Asimilasyon', 'Etnosentrizm'], dogruCevap: 1, aciklama: 'Anomie (normsuzluk/kuralsızlık), Durkheim\'ın toplumsal kuralların zayıflaması ve bireylerin yön kaybetmesi durumunu tanımladığı kavramdır.' }
      ]
    }
  },

  // ==================== NET ARTIRMA TAKTİKLERİ ====================
  taktikler: {
    tytStratejileri: [
      { baslik: '⏱️ Zaman Yönetimi', icerik: 'TYT 160 dakika, 120 soru = soru başına ortalama 1 dk 20 sn. Türkçe ve sosyal bilimlere daha çok zaman ayır (paragraf soruları uzun). Matematik ve fen kısa sürede çözülebilir.' },
      { baslik: '🎯 Soru Seçme Stratejisi', icerik: 'Bildiğin soruları önce çöz. Kararsız kaldığın soruları işaretle, sonra dön. Hiç bilmediğin sorulara zaman harcama - boş bırak.' },
      { baslik: '❌ Eleme Yöntemi', icerik: 'Kesin yanlış olan seçenekleri ele. 5 seçenekten 2 sini elersen, doğru cevap şansın %33\'e çıkar. 3 elersen %50.' },
      { baslik: '📊 Net Hesaplama', icerik: 'TYT Net = Doğru - (Yanlış/4). 4 yanlış 1 doğruyu götürür. Emin olmadığın soruyu boş bırakmak daha güvenli olabilir.' }
    ],
    aytStratejileri: [
      { baslik: '🔬 AYT Fen Stratejisi', icerik: '14 Fizik + 13 Kimya + 13 Biyoloji = 40 soru, 180 dk. Güçlü olduğun dersten başla, morali yüksek tut.' },
      { baslik: '📚 AYT Sosyal Stratejisi', icerik: '10 Tarih + 6 Coğrafya + 24 Felsefe Grubu = 40 soru. Ezbere dayalı konuları son gün tekrar et.' }
    ],
    sonHaftaPlan: [
      { gun: 'Pazartesi (1. Gün)', icerik: 'TYT Türkçe + Matematik tekrar. Formül ve kural kartları oluştur.' },
      { gun: 'Salı (2. Gün)', icerik: 'TYT Fen (Fizik, Kimya, Biyoloji) hap bilgi tekrar + 20 soru çöz.' },
      { gun: 'Çarşamba (3. Gün)', icerik: 'TYT Sosyal (Tarih, Coğrafya, Felsefe) + AYT güçlü ders tekrar.' },
      { gun: 'Perşembe (4. Gün)', icerik: 'AYT alan dersleri tekrar. Zayıf konulara odaklan.' },
      { gun: 'Cuma (5. Gün)', icerik: 'TYT deneme sınavı çöz (tam süre). Hataları analiz et.' },
      { gun: 'Cumartesi (6. Gün)', icerik: 'Sadece hap bilgi tekrar. Formül kartları gözden geçir. Erken yat!' },
      { gun: 'Pazar (SINAV GÜNÜ)', icerik: 'Sabah hafif kahvaltı. Sınav yerine erken git. Stres yapma, güven!' }
    ],
    sinavGunuTaktikleri: [
      '🥪 Hafif ama doyurucu kahvaltı yap (ağır yemek uyku getirir)',
      '⏰ Sınav yerine en az 1 saat erken git',
      '📱 Telefon ve elektronik cihazları bırak',
      '✏️ Yedek kalem, silgi, şeffaf su şişesi al',
      '😌 Derin nefes al, panik yapma',
      '📝 İlk 5 dakikayı sınavı genel olarak taramaya ayır',
      '⚡ Kolay sorulardan başla, zor soruları sonraya bırak',
      '🔄 Son 15 dakikada kodlamaları kontrol et'
    ]
  },

  // ==================== UYGULAMA MANTIĞI ====================
  
  init() {
    // Check if user is already logged in
    const session = localStorage.getItem('yks2026_session');
    if (session) {
      try {
        const s = JSON.parse(session);
        this.currentUser = s.username;
        this.isTeacher = s.isTeacher || false;
        this.startApp();
      } catch(e) {
        this.showLoginScreen();
      }
    } else {
      this.showLoginScreen();
    }
  },

  showLoginScreen() {
    document.getElementById('login-overlay').style.display = 'flex';
    document.getElementById('app-container').style.display = 'none';
  },

  showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-error').style.display = 'none';
  },

  showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('reg-error').style.display = 'none';
  },

  getUsers() {
    try {
      const users = localStorage.getItem('yks2026_users');
      return users ? JSON.parse(users) : {};
    } catch(e) { return {}; }
  },

  saveUsers(users) {
    localStorage.setItem('yks2026_users', JSON.stringify(users));
    this.fbWrite('users', users);
  },

  async doLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errEl = document.getElementById('login-error');

    if (!username || !password) {
      errEl.textContent = 'Kullanıcı adı ve şifre gerekli!';
      errEl.style.display = 'block';
      return;
    }

    // Teacher login
    if (username === 'ogretmen' && password === '145314') {
      this.currentUser = 'ogretmen';
      this.isTeacher = true;
      localStorage.setItem('yks2026_session', JSON.stringify({username: 'ogretmen', isTeacher: true}));
      this.startApp();
      return;
    }

    // Student login - check Firebase first, then local
    let users = this.getUsers();
    try {
      const fbUsers = await this.fbRead('users');
      if (fbUsers) { users = {...users, ...fbUsers}; localStorage.setItem('yks2026_users', JSON.stringify(users)); }
    } catch(e) {}

    if (!users[username]) {
      errEl.textContent = 'Kullanıcı bulunamadı! Önce kayıt ol.';
      errEl.style.display = 'block';
      return;
    }
    if (users[username].password !== password) {
      errEl.textContent = 'Şifre yanlış!';
      errEl.style.display = 'block';
      return;
    }

    this.currentUser = username;
    this.isTeacher = false;
    localStorage.setItem('yks2026_session', JSON.stringify({username, isTeacher: false}));
    this.startApp();
  },

  async doRegister() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const errEl = document.getElementById('reg-error');

    if (!username || !password) {
      errEl.textContent = 'Tüm alanları doldur!';
      errEl.style.display = 'block';
      return;
    }
    if (username === 'ogretmen') {
      errEl.textContent = 'Bu kullanıcı adı kullanılamaz!';
      errEl.style.display = 'block';
      return;
    }
    if (password.length < 3) {
      errEl.textContent = 'Şifre en az 3 karakter olmalı!';
      errEl.style.display = 'block';
      return;
    }

    // Check Firebase too
    let users = this.getUsers();
    try {
      const fbUsers = await this.fbRead('users');
      if (fbUsers) users = {...users, ...fbUsers};
    } catch(e) {}

    if (users[username]) {
      errEl.textContent = 'Bu kullanıcı adı zaten alınmış!';
      errEl.style.display = 'block';
      return;
    }

    users[username] = {
      fullname: username,
      password,
      createdAt: new Date().toISOString()
    };
    this.saveUsers(users);

    // Auto-login
    this.currentUser = username;
    this.isTeacher = false;
    localStorage.setItem('yks2026_session', JSON.stringify({username, isTeacher: false}));
    this.startApp();
  },

  doLogout() {
    localStorage.removeItem('yks2026_session');
    this.currentUser = null;
    this.isTeacher = false;
    this.progress = {};
    location.reload();
  },

  startApp() {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('app-container').style.display = '';
    this.loadProgress();
    this.renderSidebar();
    this.renderUserInfo();
    this.setupRouting();
    this.setupMobileMenu();
    this.updateExamCountdown();
    setInterval(() => this.updateExamCountdown(), 60000);
    
    const hash = window.location.hash.slice(1) || 'dashboard';
    this.navigate(hash);
  },

  renderUserInfo() {
    const el = document.getElementById('user-info');
    const mobileEl = document.getElementById('mobile-user-actions');
    if (!el) return;
    const users = this.getUsers();
    const user = users[this.currentUser];
    const displayName = this.isTeacher ? '👨‍🏫 Öğretmen' : (user ? user.fullname : this.currentUser);
    const roleBadge = this.isTeacher 
      ? '<span style="background:#e74c3c33;color:#e74c3c;padding:2px 8px;border-radius:8px;font-size:0.7rem;">ÖĞRETMEN</span>'
      : '<span style="background:#3498db33;color:#3498db;padding:2px 8px;border-radius:8px;font-size:0.7rem;">ÖĞRENCİ</span>';

    el.innerHTML = `
      <div style="background:var(--bg-tertiary);border-radius:12px;padding:0.8rem;display:flex;align-items:center;gap:0.8rem;">
        <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.1rem;">
          ${(this.isTeacher ? 'Ö' : (displayName ? displayName[0].toUpperCase() : 'U'))}
        </div>
        <div style="flex:1;min-width:0;">
          <div style="color:var(--text-primary);font-weight:600;font-size:0.85rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${displayName}</div>
          <div style="margin-top:2px;">${roleBadge}</div>
        </div>
        <button onclick="APP.doLogout()" title="Çıkış Yap" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;padding:4px;font-size:1rem;" onmouseover="this.style.color='#e74c3c'" onmouseout="this.style.color='var(--text-secondary)'">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    `;

    if (mobileEl) {
      mobileEl.innerHTML = `
        <button onclick="APP.doLogout()" title="Çıkış Yap" style="background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:8px;color:var(--text-secondary);cursor:pointer;padding:8px 12px;font-size:1rem;display:flex;align-items:center;gap:6px;" onmouseover="this.style.color='#e74c3c'">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      `;
    }
  },

  setupRouting() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      this.navigate(hash);
    });
  },

  setupMobileMenu() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggle) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
    // Close sidebar when clicking on nav item (mobile)
    document.addEventListener('click', (e) => {
      if (e.target.closest('.nav-item') && window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  },

  renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    const sections = [
      { id: 'dashboard', label: 'Ana Sayfa', icon: 'fas fa-home' },
      { type: 'divider', label: 'TYT DERSLER' },
      { id: 'tyt-turkce', label: 'Türkçe', icon: 'fas fa-pen', color: '#e74c3c' },
      { id: 'tyt-fizik', label: 'Fizik', icon: 'fas fa-bolt', color: '#3498db' },
      { id: 'tyt-kimya', label: 'Kimya', icon: 'fas fa-flask', color: '#2ecc71' },
      { id: 'tyt-biyoloji', label: 'Biyoloji', icon: 'fas fa-dna', color: '#9b59b6' },
      { id: 'tyt-tarih', label: 'Tarih', icon: 'fas fa-landmark', color: '#e67e22' },
      { id: 'tyt-cografya', label: 'Coğrafya', icon: 'fas fa-globe-europe', color: '#1abc9c' },
      { id: 'tyt-felsefe', label: 'Felsefe', icon: 'fas fa-brain', color: '#f39c12' },
      { type: 'divider', label: 'AYT DERSLER' },
      { id: 'ayt-fizik', label: 'Fizik', icon: 'fas fa-atom', color: '#2980b9' },
      { id: 'ayt-kimya', label: 'Kimya', icon: 'fas fa-vial', color: '#27ae60' },
      { id: 'ayt-biyoloji', label: 'Biyoloji', icon: 'fas fa-microscope', color: '#8e44ad' },
      { id: 'ayt-tarih', label: 'Tarih', icon: 'fas fa-scroll', color: '#d35400' },
      { id: 'ayt-cografya', label: 'Coğrafya', icon: 'fas fa-map', color: '#16a085' },
      { id: 'ayt-felsefe-grubu', label: 'Felsefe Grubu', icon: 'fas fa-book', color: '#e74c3c' },
      { type: 'divider', label: 'ARAÇLAR' },
      { id: 'tahmin', label: '🔮 Tahmin Soruları', icon: 'fas fa-magic', color: '#ff6b6b' },
      { id: 'taktikler', label: 'Net Artırma', icon: 'fas fa-chart-line', color: '#f1c40f' },
      { id: 'quiz', label: 'Quiz Modu', icon: 'fas fa-question-circle', color: '#e91e63' },
    ];

    // Add teacher panel if teacher
    if (this.isTeacher) {
      sections.push({ type: 'divider', label: 'ÖĞRETMEN' });
      sections.push({ id: 'ogretmen-panel', label: 'Öğrenci Takibi', icon: 'fas fa-users', color: '#e74c3c' });
    }

    nav.innerHTML = sections.map(s => {
      if (s.type === 'divider') {
        return `<div class="nav-divider"><span>${s.label}</span></div>`;
      }
      return `<a href="#${s.id}" class="nav-item" data-page="${s.id}" style="--nav-color: ${s.color || 'var(--primary)'}">
        <i class="${s.icon}"></i>
        <span>${s.label}</span>
      </a>`;
    }).join('');
  },

  navigate(page) {
    this.currentPage = page;
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });

    const main = document.getElementById('main-content');
    main.style.opacity = '0';
    
    setTimeout(() => {
      if (page === 'dashboard') this.renderDashboard();
      else if (page === 'taktikler') this.renderTaktikler();
      else if (page === 'quiz') this.renderQuizModu();
      else if (page === 'tahmin') this.renderTahminPage();
      else if (page === 'ogretmen-panel') this.renderOgretmenPanel();
      else {
        const key = this.pageToSubjectKey(page);
        if (key && this.subjects[key]) this.renderSubjectPage(key);
        else this.renderDashboard();
      }
      main.style.opacity = '1';
      main.scrollTop = 0;
    }, 200);
  },

  pageToSubjectKey(page) {
    const map = {
      'tyt-turkce': 'tytTurkce', 'tyt-fizik': 'tytFizik', 'tyt-kimya': 'tytKimya',
      'tyt-biyoloji': 'tytBiyoloji', 'ayt-fizik': 'aytFizik', 'ayt-kimya': 'aytKimya',
      'ayt-biyoloji': 'aytBiyoloji', 'tyt-tarih': 'tytTarih', 'tyt-cografya': 'tytCografya',
      'tyt-felsefe': 'tytFelsefe', 'ayt-tarih': 'aytTarih', 'ayt-cografya': 'aytCografya',
      'ayt-felsefe-grubu': 'aytFelsefeGrubu'
    };
    return map[page];
  },

  subjectKeyToPage(key) {
    const map = {
      'tytTurkce': 'tyt-turkce', 'tytFizik': 'tyt-fizik', 'tytKimya': 'tyt-kimya',
      'tytBiyoloji': 'tyt-biyoloji', 'aytFizik': 'ayt-fizik', 'aytKimya': 'ayt-kimya',
      'aytBiyoloji': 'ayt-biyoloji', 'tytTarih': 'tyt-tarih', 'tytCografya': 'tyt-cografya',
      'tytFelsefe': 'tyt-felsefe', 'aytTarih': 'ayt-tarih', 'aytCografya': 'ayt-cografya',
      'aytFelsefeGrubu': 'ayt-felsefe-grubu'
    };
    return map[key];
  },

  // ==================== DASHBOARD ====================
  renderDashboard() {
    const main = document.getElementById('main-content');
    const countdown = this.getExamCountdown();
    const stats = this.getOverallStats();
    const users = this.getUsers();
    const user = users[this.currentUser];
    const displayName = this.isTeacher ? 'Öğretmen' : (user ? user.fullname : this.currentUser);

    // === DERS BAZLI NET HESAPLAMA ===
    const tytDersler = ['tytTurkce','tytFizik','tytKimya','tytBiyoloji','tytTarih','tytCografya','tytFelsefe'];
    const aytDersler = ['aytFizik','aytKimya','aytBiyoloji','aytTarih','aytCografya','aytFelsefeGrubu'];

    const calcNet = (keys) => {
      let totalCorrect = 0, totalWrong = 0;
      keys.forEach(k => {
        const p = this.progress[k] || {correct:0,wrong:0};
        totalCorrect += p.correct;
        totalWrong += p.wrong;
      });
      return { correct: totalCorrect, wrong: totalWrong, net: (totalCorrect - totalWrong/4).toFixed(1), total: totalCorrect + totalWrong };
    };

    const tytStats = calcNet(tytDersler);
    const aytStats = calcNet(aytDersler);

    // === DERS BAZLI DETAYLI NET ===
    const getSubjectNet = (key) => {
      const p = this.progress[key] || {correct:0,wrong:0};
      const total = p.correct + p.wrong;
      const net = (p.correct - p.wrong/4).toFixed(1);
      const acc = total > 0 ? Math.round((p.correct/total)*100) : 0;
      return {correct: p.correct, wrong: p.wrong, total, net, acc};
    };

    // === MOTİVASYON MESAJLARI ===
    const motivasyonlar = [
      {min:0, max:20, mesaj:'🌱 Yolun başındasın! Her soru seni bir adım öne taşır.', renk:'#3498db'},
      {min:21, max:50, mesaj:'🔥 Harika gidiyorsun! Düzenli çalışma fark yaratır.', renk:'#f39c12'},
      {min:51, max:75, mesaj:'⚡ Muhteşem! Bu tempoda başarı kaçınılmaz!', renk:'#e67e22'},
      {min:76, max:90, mesaj:'🏆 Çok güçlüsün! Sınav seni bekliyor, hazırsın!', renk:'#2ecc71'},
      {min:91, max:100, mesaj:'👑 EFSANE! Bu doğruluk oranıyla her kapıyı açarsın!', renk:'#9b59b6'}
    ];
    const currentMotiv = motivasyonlar.find(m => stats.accuracy >= m.min && stats.accuracy <= m.max) || motivasyonlar[0];

    // === NET PROJEKSİYON (Sınavda bu oranla kaç net yaparsın) ===
    const tytSoruSayilari = {tytTurkce:40, tytFizik:7, tytKimya:7, tytBiyoloji:6, tytTarih:5, tytCografya:5, tytFelsefe:5};
    const aytSoruSayilari = {aytFizik:14, aytKimya:13, aytBiyoloji:13, aytTarih:10, aytCografya:6, aytFelsefeGrubu:24};

    const projNet = (dersler, soruSayilari) => {
      let toplamNet = 0;
      dersler.forEach(k => {
        const sn = getSubjectNet(k);
        const soruSay = soruSayilari[k] || 0;
        if (sn.total > 0) {
          const projCorrect = Math.round(soruSay * sn.acc / 100);
          const projWrong = soruSay - projCorrect;
          toplamNet += projCorrect - projWrong / 4;
        }
      });
      return toplamNet.toFixed(1);
    };

    const tytProjNet = projNet(tytDersler, tytSoruSayilari);
    const aytProjNet = projNet(aytDersler, aytSoruSayilari);
    const tytToplam = Object.values(tytSoruSayilari).reduce((a,b)=>a+b,0); // 75 (fen+türkçe+sosyal kısmı)
    const aytToplam = Object.values(aytSoruSayilari).reduce((a,b)=>a+b,0); // 80

    // Ring animation helper
    const ringPercent = (pct) => {
      const circ = 2 * Math.PI * 40;
      const offset = circ - (circ * pct / 100);
      return {circ: circ.toFixed(1), offset: offset.toFixed(1)};
    };

    const accuracyRing = ringPercent(stats.accuracy);

    main.innerHTML = `
      <!-- Hero Greeting -->
      <div class="hero-section" style="text-align:center;padding-bottom:1rem;">
        <h1 class="gradient-text" style="font-size:clamp(1.6rem,5vw,2.5rem);margin-bottom:0.3rem;">Merhaba, ${displayName}! 👋</h1>
        <p style="color:var(--text-secondary);font-size:clamp(0.9rem,2.5vw,1.1rem);">YKS 2026'ya kalan süre</p>
        <div style="display:flex;gap:clamp(0.5rem,2vw,1rem);justify-content:center;margin:1.2rem 0;flex-wrap:wrap;">
          ${[{v:countdown.days,l:'Gün',c:'var(--primary)'},{v:countdown.hours,l:'Saat',c:'var(--secondary)'},{v:countdown.minutes,l:'Dakika',c:'var(--accent)'}].map(x => `
          <div class="glass-card" style="padding:clamp(0.6rem,2vw,1rem) clamp(1rem,3vw,1.5rem);text-align:center;min-width:70px;">
            <div style="font-size:clamp(1.5rem,4vw,2.2rem);font-weight:800;color:${x.c};">${x.v}</div>
            <div style="font-size:clamp(0.65rem,1.5vw,0.8rem);color:var(--text-secondary);">${x.l}</div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Motivasyon Banner -->
      <div class="glass-card" style="padding:1.2rem 1.5rem;margin-bottom:1.5rem;border-left:4px solid ${currentMotiv.renk};display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
        <div style="font-size:1.8rem;">${currentMotiv.mesaj.split(' ')[0]}</div>
        <div style="flex:1;min-width:200px;">
          <div style="color:var(--text-primary);font-weight:600;font-size:clamp(0.85rem,2vw,1rem);">${currentMotiv.mesaj.split(' ').slice(1).join(' ')}</div>
          <div style="color:var(--text-secondary);font-size:0.8rem;margin-top:4px;">Doğruluk oranın: <strong style="color:${currentMotiv.renk};">%${stats.accuracy}</strong></div>
        </div>
      </div>

      <!-- Ana İstatistikler -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:clamp(0.5rem,2vw,1rem);margin-bottom:1.5rem;">
        <div class="glass-card stat-hover" style="padding:clamp(1rem,2vw,1.5rem);text-align:center;">
          <div style="font-size:1.5rem;">📝</div>
          <div style="font-size:clamp(1.3rem,3vw,1.8rem);font-weight:700;color:var(--primary);">${stats.totalSolved}</div>
          <div style="color:var(--text-secondary);font-size:clamp(0.7rem,1.5vw,0.85rem);">Çözülen Soru</div>
        </div>
        <div class="glass-card stat-hover" style="padding:clamp(1rem,2vw,1.5rem);text-align:center;">
          <div style="font-size:1.5rem;">✅</div>
          <div style="font-size:clamp(1.3rem,3vw,1.8rem);font-weight:700;color:#2ecc71;">${stats.totalCorrect}</div>
          <div style="color:var(--text-secondary);font-size:clamp(0.7rem,1.5vw,0.85rem);">Doğru</div>
        </div>
        <div class="glass-card stat-hover" style="padding:clamp(1rem,2vw,1.5rem);text-align:center;">
          <div style="font-size:1.5rem;">❌</div>
          <div style="font-size:clamp(1.3rem,3vw,1.8rem);font-weight:700;color:#e74c3c;">${stats.totalWrong}</div>
          <div style="color:var(--text-secondary);font-size:clamp(0.7rem,1.5vw,0.85rem);">Yanlış</div>
        </div>
        <div class="glass-card stat-hover" style="padding:clamp(1rem,2vw,1.5rem);text-align:center;">
          <svg width="70" height="70" viewBox="0 0 100 100" style="display:block;margin:0 auto;">
            <circle cx="50" cy="50" r="40" stroke="var(--bg-tertiary)" stroke-width="8" fill="none"/>
            <circle cx="50" cy="50" r="40" stroke="${currentMotiv.renk}" stroke-width="8" fill="none"
              stroke-dasharray="${accuracyRing.circ}" stroke-dashoffset="${accuracyRing.offset}"
              stroke-linecap="round" transform="rotate(-90 50 50)"
              style="transition:stroke-dashoffset 1.5s ease;"/>
            <text x="50" y="55" text-anchor="middle" fill="${currentMotiv.renk}" font-size="20" font-weight="700">${stats.accuracy}%</text>
          </svg>
          <div style="color:var(--text-secondary);font-size:clamp(0.7rem,1.5vw,0.85rem);margin-top:4px;">Başarı</div>
        </div>
      </div>

      <!-- 🔥 DİNAMİK NET PROJEKSİYON -->
      <h2 style="color:var(--text-primary);margin:1.5rem 0 1rem;font-size:clamp(1.1rem,3vw,1.4rem);">🎯 Tahmini Sınav Netin (Mevcut Performansınla)</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-bottom:2rem;">
        <!-- TYT Projeksiyon -->
        <div class="glass-card" style="padding:1.5rem;border-top:3px solid var(--primary);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <h3 style="color:var(--text-primary);font-size:1.1rem;">📋 TYT Projeksiyonu</h3>
            <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">${tytProjNet} / ${tytToplam} Net</span>
          </div>
          <div style="width:100%;height:10px;background:var(--bg-tertiary);border-radius:5px;overflow:hidden;margin-bottom:1rem;">
            <div style="width:${Math.min(100, (tytProjNet/tytToplam)*100)}%;height:100%;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:5px;transition:width 1s ease;"></div>
          </div>
          ${tytDersler.map(k => {
            const s = this.subjects[k];
            const sn = getSubjectNet(k);
            const soruSay = tytSoruSayilari[k];
            const pNet = sn.total > 0 ? (Math.round(soruSay * sn.acc/100) - (soruSay - Math.round(soruSay * sn.acc/100))/4).toFixed(1) : '-';
            const barW = sn.total > 0 ? Math.min(100, sn.acc) : 0;
            return `
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
              <span style="font-size:0.9rem;width:18px;">${s.ikon}</span>
              <span style="color:var(--text-primary);font-size:0.8rem;width:65px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.ad.replace('TYT ','')}</span>
              <div style="flex:1;height:5px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
                <div style="width:${barW}%;height:100%;background:${s.renk};border-radius:3px;transition:width 0.5s;"></div>
              </div>
              <span style="color:${sn.total > 0 ? s.renk : 'var(--text-secondary)'};font-weight:600;font-size:0.8rem;min-width:35px;text-align:right;">${pNet}/${soruSay}</span>
            </div>`;
          }).join('')}
        </div>
        <!-- AYT Projeksiyon -->
        <div class="glass-card" style="padding:1.5rem;border-top:3px solid var(--secondary);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <h3 style="color:var(--text-primary);font-size:1.1rem;">📋 AYT Projeksiyonu</h3>
            <span style="background:var(--secondary);color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">${aytProjNet} / ${aytToplam} Net</span>
          </div>
          <div style="width:100%;height:10px;background:var(--bg-tertiary);border-radius:5px;overflow:hidden;margin-bottom:1rem;">
            <div style="width:${Math.min(100, (aytProjNet/aytToplam)*100)}%;height:100%;background:linear-gradient(90deg,var(--secondary),#e74c3c);border-radius:5px;transition:width 1s ease;"></div>
          </div>
          ${aytDersler.map(k => {
            const s = this.subjects[k];
            const sn = getSubjectNet(k);
            const soruSay = aytSoruSayilari[k];
            const pNet = sn.total > 0 ? (Math.round(soruSay * sn.acc/100) - (soruSay - Math.round(soruSay * sn.acc/100))/4).toFixed(1) : '-';
            const barW = sn.total > 0 ? Math.min(100, sn.acc) : 0;
            return `
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
              <span style="font-size:0.9rem;width:18px;">${s.ikon}</span>
              <span style="color:var(--text-primary);font-size:0.8rem;width:75px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.ad.replace('AYT ','')}</span>
              <div style="flex:1;height:5px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
                <div style="width:${barW}%;height:100%;background:${s.renk};border-radius:3px;transition:width 0.5s;"></div>
              </div>
              <span style="color:${sn.total > 0 ? s.renk : 'var(--text-secondary)'};font-weight:600;font-size:0.8rem;min-width:35px;text-align:right;">${pNet}/${soruSay}</span>
            </div>`;
          }).join('')}
        </div>
      </div>

      <!-- Net Artış Taktikleri Kısa -->
      <div class="glass-card" style="padding:1.2rem 1.5rem;margin-bottom:2rem;border-left:4px solid #f39c12;background:linear-gradient(135deg,rgba(243,156,18,0.05),transparent);">
        <h3 style="color:#f39c12;margin-bottom:0.5rem;font-size:1rem;">💡 Hızlı Net Artırma İpucu</h3>
        <p style="color:var(--text-primary);font-size:0.9rem;line-height:1.6;" id="daily-tip"></p>
      </div>

      <h2 style="color:var(--text-primary);margin:1rem 0;font-size:clamp(1.1rem,3vw,1.4rem);">📚 Dersler</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:clamp(0.6rem,2vw,1rem);">
        ${Object.entries(this.subjects).map(([key, s]) => {
          const sn = getSubjectNet(key);
          return `
          <div class="glass-card subject-card-hover" onclick="location.hash='${this.subjectKeyToPage(key)}'" 
            style="padding:clamp(1rem,2vw,1.5rem);cursor:pointer;border-left:4px solid ${s.renk};transition:all 0.3s;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem;">
              <span style="font-size:1.6rem;">${s.ikon}</span>
              <div style="display:flex;gap:0.4rem;align-items:center;">
                <span style="background:${s.renk}22;color:${s.renk};padding:3px 8px;border-radius:10px;font-size:0.7rem;">${s.sinav}</span>
                ${sn.total > 0 ? `<span style="background:${sn.acc >= 60 ? '#2ecc7122' : '#e74c3c22'};color:${sn.acc >= 60 ? '#2ecc71' : '#e74c3c'};padding:3px 8px;border-radius:10px;font-size:0.7rem;font-weight:600;">${sn.net} net</span>` : ''}
              </div>
            </div>
            <h3 style="color:var(--text-primary);margin-bottom:0.4rem;font-size:clamp(0.9rem,2vw,1.05rem);">${s.ad}</h3>
            <div style="display:flex;justify-content:space-between;color:var(--text-secondary);font-size:0.78rem;margin-bottom:0.5rem;">
              <span>${s.hapBilgiler.length} konu · ${s.sorular.length} soru</span>
              <span style="color:${sn.acc > 0 ? (sn.acc >= 60 ? '#2ecc71' : '#f39c12') : 'var(--text-secondary)'};">${sn.total > 0 ? sn.acc + '% doğru' : 'Henüz çözülmedi'}</span>
            </div>
            <div style="height:5px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
              <div style="width:${sn.acc}%;height:100%;background:${s.renk};border-radius:3px;transition:width 0.5s;"></div>
            </div>
          </div>`;
        }).join('')}
      </div>
    `;

    // Dynamic daily tip
    const tips = [
      'Paragraf sorularında önce soruyu oku, sonra paragrafı tara. Zaman kazandırır!',
      'Fizik formüllerini her gün 5 dakika tekrar et. Ezber değil, anlamlı tekrar yap.',
      'Kimyada periyodik tablo eğilimlerini çapraz olarak düşün: atom yarıçapı ↘, IE ↗',
      'Biyolojide şema çiz! Mitoz/Mayoz fazlarını görsel olarak kodla.',
      'Tarih sorularında neden-sonuç ilişkisini yakala, kronoloji ezberle.',
      'Coğrafyada harita üzerinde çalış, saat hesabını pratik yap.',
      'Felsefede filozof-akım eşleştirmesini kartlarla tekrar et.',
      'Son 1 haftada yeni konu öğrenme! Bildiklerini pekiştir.',
      'Her gün en az 40 soru çöz. Süre tutarak çöz, hızını artır.',
      'Yanlış yaptığın soruları bir deftere yaz ve her gün tekrar et.',
      'Sınavda ilk 5 dakikayı taramaya ayır, kolay sorulardan başla!',
      'Uykunu ihmal etme! 7 saat uyku = 2 saat ekstra verimli çalışma.',
      'Net = Doğru - Yanlış/4. Emin olmadığın soruyu BOŞ bırak!',
      'TYT Türkçede paragraf sorularına en çok zaman ayır, 12-14 soru gelir.',
      'AYT Fizik\'te eğik atış ve enerji korunumu formüllerini ezberle!'
    ];
    const tipEl = document.getElementById('daily-tip');
    if (tipEl) {
      const todayIndex = Math.floor(Date.now() / 86400000) % tips.length;
      tipEl.textContent = tips[todayIndex];
    }
  },

  // ==================== DERS SAYFASI ====================
  renderSubjectPage(key) {
    const s = this.subjects[key];
    const main = document.getElementById('main-content');

    main.innerHTML = `
      <div class="page-header" style="margin-bottom:2rem;">
        <h1 style="color:var(--text-primary);display:flex;align-items:center;gap:0.5rem;">
          <span style="font-size:2rem;">${s.ikon}</span> ${s.ad}
          <span class="badge" style="background:${s.renk}22;color:${s.renk};padding:4px 12px;border-radius:12px;font-size:0.8rem;margin-left:0.5rem;">${s.sinav} - ${s.soruSayisi} soru</span>
        </h1>
      </div>

      <div class="tab-container" style="margin-bottom:2rem;">
        <div class="tab-buttons" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">
          <button class="btn btn-primary tab-btn active" onclick="APP.showTab('hapbilgi','${key}')">📖 Hap Bilgiler</button>
          <button class="btn btn-secondary tab-btn" onclick="APP.showTab('sorular','${key}')">❓ Pratik Sorular</button>
        </div>
        <div id="tab-content">
          ${this.renderHapBilgiContent(s)}
        </div>
      </div>
    `;
  },

  showTab(tab, key) {
    const s = this.subjects[key];
    const content = document.getElementById('tab-content');
    
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      btn.classList.toggle('active', (i === 0 && tab === 'hapbilgi') || (i === 1 && tab === 'sorular'));
      if ((i === 0 && tab === 'hapbilgi') || (i === 1 && tab === 'sorular')) {
        btn.className = 'btn btn-primary tab-btn active';
      } else {
        btn.className = 'btn btn-secondary tab-btn';
      }
    });

    if (tab === 'hapbilgi') {
      content.innerHTML = this.renderHapBilgiContent(s);
    } else {
      content.innerHTML = this.renderSorularContent(s, key);
    }
  },

  toggleAccordion(el) {
    const content = el.nextElementSibling;
    const icon = el.querySelector('i');
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0px';
      content.style.padding = '0';
      if (icon) icon.style.transform = 'rotate(0deg)';
    } else {
      content.style.maxHeight = content.scrollHeight + 200 + 'px';
      content.style.padding = '';
      if (icon) icon.style.transform = 'rotate(180deg)';
    }
  },

  renderHapBilgiContent(s) {
    return `<div class="hap-bilgi-list">
      ${s.hapBilgiler.map((h, i) => `
        <div class="accordion glass-card" style="margin-bottom:1rem;border-left:4px solid ${s.renk};">
          <div class="accordion-header" onclick="APP.toggleAccordion(this)" style="padding:1.2rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
            <h3 style="color:var(--text-primary);font-size:1.1rem;margin:0;">
              <span style="color:${s.renk};margin-right:0.5rem;">${i+1}.</span> ${h.baslik}
            </h3>
            <i class="fas fa-chevron-down" style="color:var(--text-secondary);transition:transform 0.3s;"></i>
          </div>
          <div class="accordion-content" style="max-height:none;overflow:hidden;transition:max-height 0.4s ease;">
            <div style="padding:0 1.2rem 1.2rem;">
              <div class="formula-box" style="background:var(--bg-tertiary);padding:1rem;border-radius:8px;margin-bottom:1rem;line-height:1.8;color:var(--text-primary);">
                ${h.icerik}
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                ${h.anahtar.map(a => `<div class="tip-card" style="background:${s.renk}11;border-left:3px solid ${s.renk};padding:0.6rem 1rem;border-radius:0 8px 8px 0;font-size:0.85rem;color:var(--text-primary);flex:1 1 300px;">
                  💡 ${a}
                </div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>`;
  },

  renderSorularContent(s, key) {
    return `<div class="sorular-list">
      ${s.sorular.map((q, qi) => `
        <div class="quiz-question glass-card" id="soru-${qi}" style="padding:1.5rem;margin-bottom:1.5rem;">
          <h4 style="color:var(--text-primary);margin-bottom:1rem;line-height:1.6;">
            <span style="color:${s.renk};font-weight:700;">Soru ${qi+1}:</span> ${q.soru}
          </h4>
          <div class="quiz-options" style="display:flex;flex-direction:column;gap:0.5rem;">
            ${q.secenekler.map((opt, oi) => `
              <div class="quiz-option" id="opt-${qi}-${oi}" onclick="APP.checkSubjectAnswer('${key}',${qi},${oi})" style="padding:0.8rem 1rem;border-radius:8px;cursor:pointer;border:2px solid var(--border-color);color:var(--text-primary);transition:all 0.3s;">
                <span style="font-weight:600;margin-right:0.5rem;">${String.fromCharCode(65+oi)})</span> ${opt}
              </div>
            `).join('')}
          </div>
          <div id="aciklama-${qi}" style="display:none;margin-top:1rem;padding:1rem;border-radius:8px;background:var(--bg-tertiary);color:var(--text-primary);line-height:1.6;">
          </div>
        </div>
      `).join('')}
    </div>`;
  },

  checkSubjectAnswer(key, qi, selected) {
    const s = this.subjects[key];
    const q = s.sorular[qi];
    const aciklama = document.getElementById(`aciklama-${qi}`);
    
    // Prevent double answer
    if (aciklama.style.display === 'block') return;

    const isCorrect = selected === q.dogruCevap;

    // Update progress
    if (!this.progress[key]) this.progress[key] = { correct: 0, wrong: 0 };
    if (isCorrect) this.progress[key].correct++;
    else this.progress[key].wrong++;
    this.saveProgress();

    // Visual feedback
    const selectedEl = document.getElementById(`opt-${qi}-${selected}`);
    const correctEl = document.getElementById(`opt-${qi}-${q.dogruCevap}`);

    if (isCorrect) {
      selectedEl.style.border = '2px solid var(--success)';
      selectedEl.style.background = 'rgba(46, 204, 113, 0.15)';
      this.showToast('✅ Doğru!', 'success');
    } else {
      selectedEl.style.border = '2px solid var(--danger)';
      selectedEl.style.background = 'rgba(231, 76, 60, 0.15)';
      correctEl.style.border = '2px solid var(--success)';
      correctEl.style.background = 'rgba(46, 204, 113, 0.15)';
      this.showToast('❌ Yanlış!', 'danger');
    }

    // Disable all options
    q.secenekler.forEach((_, oi) => {
      document.getElementById(`opt-${qi}-${oi}`).style.pointerEvents = 'none';
    });

    // Show explanation
    aciklama.innerHTML = `<strong>${isCorrect ? '✅ Doğru!' : '❌ Yanlış!'}</strong> ${q.aciklama}`;
    aciklama.style.display = 'block';
    aciklama.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
  },

  // ==================== TAKTİKLER SAYFASI ====================
  renderTaktikler() {
    const main = document.getElementById('main-content');
    const t = this.taktikler;

    main.innerHTML = `
      <div class="page-header" style="margin-bottom:2rem;">
        <h1 style="color:var(--text-primary);">🎯 Net Artırma Taktikleri</h1>
        <p style="color:var(--text-secondary);">Sınav stratejileri ve son hafta planı</p>
      </div>

      <h2 style="color:var(--text-primary);margin:1.5rem 0 1rem;">📋 TYT Stratejileri</h2>
      ${t.tytStratejileri.map(s => `
        <div class="glass-card tip-card" style="padding:1.2rem;margin-bottom:1rem;border-left:4px solid var(--primary);">
          <h3 style="color:var(--text-primary);margin-bottom:0.5rem;">${s.baslik}</h3>
          <p style="color:var(--text-secondary);line-height:1.6;">${s.icerik}</p>
        </div>
      `).join('')}

      <h2 style="color:var(--text-primary);margin:2rem 0 1rem;">🔬 AYT Stratejileri</h2>
      ${t.aytStratejileri.map(s => `
        <div class="glass-card tip-card" style="padding:1.2rem;margin-bottom:1rem;border-left:4px solid var(--secondary);">
          <h3 style="color:var(--text-primary);margin-bottom:0.5rem;">${s.baslik}</h3>
          <p style="color:var(--text-secondary);line-height:1.6;">${s.icerik}</p>
        </div>
      `).join('')}

      <h2 style="color:var(--text-primary);margin:2rem 0 1rem;">📅 Son 1 Hafta Çalışma Planı</h2>
      <div class="study-plan-calendar" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        ${t.sonHaftaPlan.map((g, i) => `
          <div class="glass-card" style="padding:1.2rem;border-left:4px solid ${i === 6 ? 'var(--danger)' : 'var(--primary)'};">
            <h4 style="color:${i === 6 ? 'var(--danger)' : 'var(--primary)'};margin-bottom:0.5rem;">${g.gun}</h4>
            <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.5;">${g.icerik}</p>
          </div>
        `).join('')}
      </div>

      <h2 style="color:var(--text-primary);margin:2rem 0 1rem;">🏆 Sınav Günü Taktikleri</h2>
      <div class="glass-card" style="padding:1.5rem;">
        ${t.sinavGunuTaktikleri.map(t => `
          <div style="padding:0.6rem 0;color:var(--text-primary);font-size:0.95rem;border-bottom:1px solid var(--border-color);">${t}</div>
        `).join('')}
      </div>
    `;
  },

  // ==================== QUIZ MODU ====================
  renderQuizModu() {
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
      <div class="page-header" style="margin-bottom:2rem;">
        <h1 style="color:var(--text-primary);">🧠 Quiz Modu</h1>
        <p style="color:var(--text-secondary);">Ders seçerek zamanlı quiz çöz!</p>
      </div>

      <div class="glass-card" style="padding:2rem;margin-bottom:2rem;">
        <h3 style="color:var(--text-primary);margin-bottom:1rem;">Ders Seçimi</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:0.8rem;margin-bottom:1.5rem;">
          ${Object.entries(this.subjects).map(([key, s]) => `
            <label class="glass-card" style="padding:0.8rem;cursor:pointer;display:flex;align-items:center;gap:0.8rem;border:2px solid transparent;transition:all 0.3s;" 
              onmouseover="this.style.borderColor='${s.renk}'" onmouseout="this.style.borderColor='transparent'">
              <input type="checkbox" class="quiz-subject-cb" value="${key}" style="width:18px;height:18px;accent-color:${s.renk};">
              <span style="font-size:1.2rem;">${s.ikon}</span>
              <span style="color:var(--text-primary);font-size:0.9rem;">${s.ad}</span>
            </label>
          `).join('')}
        </div>

        <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;">
          <div>
            <label style="color:var(--text-secondary);font-size:0.85rem;">Soru Sayısı:</label>
            <select id="quiz-count" style="padding:0.5rem;border-radius:8px;background:var(--bg-tertiary);color:var(--text-primary);border:1px solid var(--border-color);">
              <option value="5">5 Soru</option>
              <option value="10" selected>10 Soru</option>
              <option value="20">20 Soru</option>
              <option value="0">Tümü</option>
            </select>
          </div>
          <button class="btn btn-primary" onclick="APP.startQuizMode()" style="padding:0.8rem 2rem;">
            🚀 Quiz Başlat
          </button>
        </div>
      </div>

      <div id="quiz-area"></div>
    `;
  },

  startQuizMode() {
    const checked = document.querySelectorAll('.quiz-subject-cb:checked');
    if (checked.length === 0) {
      this.showToast('⚠️ En az bir ders seçmelisin!', 'warning');
      return;
    }

    const count = parseInt(document.getElementById('quiz-count').value);
    let allQuestions = [];

    checked.forEach(cb => {
      const key = cb.value;
      const s = this.subjects[key];
      s.sorular.forEach((q, i) => {
        allQuestions.push({ ...q, subjectKey: key, subjectName: s.ad, subjectIcon: s.ikon, subjectColor: s.renk });
      });
    });

    // Shuffle
    allQuestions = allQuestions.sort(() => Math.random() - 0.5);
    if (count > 0) allQuestions = allQuestions.slice(0, count);

    this.quizState = {
      questions: allQuestions,
      current: 0,
      correct: 0,
      wrong: 0,
      skipped: 0,
      startTime: Date.now(),
      answers: []
    };

    this.renderQuizQuestion();
  },

  renderQuizQuestion() {
    const qs = this.quizState;
    if (!qs || qs.current >= qs.questions.length) {
      this.renderQuizResults();
      return;
    }

    const q = qs.questions[qs.current];
    const area = document.getElementById('quiz-area');
    const elapsed = Math.floor((Date.now() - qs.startTime) / 1000);

    area.innerHTML = `
      <div class="glass-card" style="padding:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
          <span class="badge" style="background:${q.subjectColor}22;color:${q.subjectColor};padding:6px 14px;border-radius:12px;">
            ${q.subjectIcon} ${q.subjectName}
          </span>
          <span style="color:var(--text-secondary);font-size:0.9rem;">
            Soru ${qs.current + 1} / ${qs.questions.length}
          </span>
        </div>

        <div class="progress-bar" style="height:4px;background:var(--bg-tertiary);border-radius:2px;margin-bottom:1.5rem;">
          <div style="width:${((qs.current) / qs.questions.length) * 100}%;height:100%;background:var(--primary);border-radius:2px;transition:width 0.3s;"></div>
        </div>

        <h3 style="color:var(--text-primary);line-height:1.6;margin-bottom:1.5rem;font-size:1.1rem;">${q.soru}</h3>

        <div style="display:flex;flex-direction:column;gap:0.6rem;">
          ${q.secenekler.map((opt, oi) => `
            <div class="quiz-option" id="qopt-${oi}" onclick="APP.answerQuiz(${oi})" 
              style="padding:1rem;border-radius:10px;cursor:pointer;border:2px solid var(--border-color);color:var(--text-primary);transition:all 0.3s;font-size:0.95rem;">
              <span style="font-weight:700;margin-right:0.8rem;color:${q.subjectColor};">${String.fromCharCode(65+oi)})</span> ${opt}
            </div>
          `).join('')}
        </div>

        <div id="quiz-feedback" style="display:none;margin-top:1.5rem;padding:1rem;border-radius:10px;line-height:1.6;"></div>

        <div style="display:flex;justify-content:space-between;margin-top:1.5rem;">
          <button class="btn btn-ghost" onclick="APP.skipQuizQuestion()">Soruyu Geç →</button>
          <button class="btn btn-primary" id="quiz-next-btn" onclick="APP.nextQuizQuestion()" style="display:none;">Sonraki Soru →</button>
        </div>
      </div>
    `;
  },

  answerQuiz(selected) {
    const qs = this.quizState;
    const q = qs.questions[qs.current];
    const feedback = document.getElementById('quiz-feedback');
    
    if (feedback.style.display === 'block') return;

    const isCorrect = selected === q.dogruCevap;
    if (isCorrect) qs.correct++;
    else qs.wrong++;

    qs.answers.push({ question: qs.current, selected, correct: q.dogruCevap, isCorrect });

    // Update progress for subject
    if (!this.progress[q.subjectKey]) this.progress[q.subjectKey] = { correct: 0, wrong: 0 };
    if (isCorrect) this.progress[q.subjectKey].correct++;
    else this.progress[q.subjectKey].wrong++;
    this.saveProgress();

    // Visual
    const selectedEl = document.getElementById(`qopt-${selected}`);
    const correctEl = document.getElementById(`qopt-${q.dogruCevap}`);

    if (isCorrect) {
      selectedEl.style.border = '2px solid var(--success)';
      selectedEl.style.background = 'rgba(46,204,113,0.15)';
    } else {
      selectedEl.style.border = '2px solid var(--danger)';
      selectedEl.style.background = 'rgba(231,76,60,0.15)';
      correctEl.style.border = '2px solid var(--success)';
      correctEl.style.background = 'rgba(46,204,113,0.15)';
    }

    q.secenekler.forEach((_, oi) => {
      document.getElementById(`qopt-${oi}`).style.pointerEvents = 'none';
    });

    feedback.innerHTML = `<strong>${isCorrect ? '✅ Doğru!' : '❌ Yanlış!'}</strong> ${q.aciklama}`;
    feedback.style.display = 'block';
    feedback.style.background = isCorrect ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)';
    feedback.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
    feedback.style.color = 'var(--text-primary)';

    document.getElementById('quiz-next-btn').style.display = 'inline-flex';
  },

  skipQuizQuestion() {
    const qs = this.quizState;
    qs.skipped++;
    qs.answers.push({ question: qs.current, selected: -1, correct: qs.questions[qs.current].dogruCevap, isCorrect: false });
    qs.current++;
    this.renderQuizQuestion();
  },

  nextQuizQuestion() {
    this.quizState.current++;
    this.renderQuizQuestion();
  },

  renderQuizResults() {
    const qs = this.quizState;
    const elapsed = Math.floor((Date.now() - qs.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const net = (qs.correct - (qs.wrong / 4)).toFixed(2);
    const accuracy = qs.questions.length > 0 ? Math.round((qs.correct / qs.questions.length) * 100) : 0;

    const area = document.getElementById('quiz-area');
    area.innerHTML = `
      <div class="glass-card" style="padding:2.5rem;text-align:center;">
        <h2 style="color:var(--text-primary);font-size:2rem;margin-bottom:1rem;">🏆 Quiz Tamamlandı!</h2>
        <p style="color:var(--text-secondary);margin-bottom:2rem;">Süre: ${minutes} dk ${seconds} sn</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-bottom:2rem;">
          <div class="glass-card" style="padding:1.5rem;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--success);">${qs.correct}</div>
            <div style="color:var(--text-secondary);">Doğru</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--danger);">${qs.wrong}</div>
            <div style="color:var(--text-secondary);">Yanlış</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--text-secondary);">${qs.skipped}</div>
            <div style="color:var(--text-secondary);">Boş</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;">
            <div style="font-size:2.5rem;font-weight:800;color:var(--primary);">${net}</div>
            <div style="color:var(--text-secondary);">Net</div>
          </div>
        </div>

        <div class="progress-bar" style="height:12px;background:var(--bg-tertiary);border-radius:6px;overflow:hidden;margin-bottom:1rem;">
          <div style="width:${accuracy}%;height:100%;background:linear-gradient(90deg,var(--success),var(--primary));border-radius:6px;transition:width 1s;"></div>
        </div>
        <p style="color:var(--text-secondary);margin-bottom:2rem;">Başarı: %${accuracy}</p>

        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="APP.quizState=null;APP.renderQuizModu();">🔄 Yeni Quiz</button>
          <button class="btn btn-secondary" onclick="location.hash='dashboard'">🏠 Ana Sayfa</button>
        </div>
      </div>
    `;
  },

  // ==================== YARDIMCI FONKSİYONLAR ====================

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `padding:1rem 1.5rem;border-radius:10px;margin-bottom:0.5rem;color:white;font-weight:500;animation:slideInRight 0.3s ease;
      background:${type === 'success' ? 'var(--success)' : type === 'danger' ? 'var(--danger)' : type === 'warning' ? '#f39c12' : 'var(--primary)'};`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  },

  getExamCountdown() {
    const examDate = new Date('2026-06-21T10:00:00+03:00'); // TYT tarihi
    const now = new Date();
    const diff = examDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    };
  },

  updateExamCountdown() {
    const el = document.getElementById('exam-countdown');
    if (!el) return;
    const c = this.getExamCountdown();
    el.innerHTML = `
      <div style="text-align:center;padding:1rem;">
        <div style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:0.5rem;">⏰ SINAVA KALAN</div>
        <div style="font-size:1.5rem;font-weight:800;color:var(--primary);">${c.days}g ${c.hours}s ${c.minutes}dk</div>
      </div>
    `;
  },

  getOverallStats() {
    let totalCorrect = 0, totalWrong = 0;
    Object.values(this.progress).forEach(p => {
      totalCorrect += p.correct || 0;
      totalWrong += p.wrong || 0;
    });
    const totalSolved = totalCorrect + totalWrong;
    const accuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
    return { totalCorrect, totalWrong, totalSolved, accuracy };
  },

  saveProgress() {
    try {
      const key = 'yks2026_progress_' + (this.currentUser || 'guest');
      localStorage.setItem(key, JSON.stringify(this.progress));
      if (this.currentUser && !this.isTeacher) {
        const now = new Date().toISOString();
        localStorage.setItem('yks2026_lastactive_' + this.currentUser, now);
        // Firebase'e kaydet
        this.fbWrite('progress/' + this.currentUser, this.progress);
        this.fbWrite('lastactive/' + this.currentUser, now);
      }
    } catch (e) { console.warn('Progress kayıt hatası:', e); }
  },

  async loadProgress() {
    try {
      const key = 'yks2026_progress_' + (this.currentUser || 'guest');
      // Önce localStorage'dan yükle (hızlı)
      const saved = localStorage.getItem(key);
      if (saved) this.progress = JSON.parse(saved);
      // Sonra Firebase'den güncelle
      if (this.currentUser && !this.isTeacher) {
        const fbProgress = await this.fbRead('progress/' + this.currentUser);
        if (fbProgress) {
          this.progress = {...this.progress, ...fbProgress};
          localStorage.setItem(key, JSON.stringify(this.progress));
        }
      }
    } catch (e) { this.progress = {}; }
  },

  // ==================== TAHMİN SORULARI SAYFASI ====================
  renderTahminPage() {
    const main = document.getElementById('main-content');
    const TD = window.TAHMIN_DATA;
    if (!TD) { main.innerHTML = '<p style="color:var(--text-primary);padding:2rem;">Tahmin verileri yüklenemedi.</p>'; return; }

    const subjectNames = {
      tytTurkce: {ad:'TYT Türkçe', ikon:'📝', renk:'#e74c3c'},
      tytFizik: {ad:'TYT Fizik', ikon:'⚡', renk:'#3498db'},
      tytKimya: {ad:'TYT Kimya', ikon:'🧪', renk:'#2ecc71'},
      tytBiyoloji: {ad:'TYT Biyoloji', ikon:'🧬', renk:'#9b59b6'},
      tytTarih: {ad:'TYT Tarih', ikon:'📜', renk:'#e67e22'},
      tytCografya: {ad:'TYT Coğrafya', ikon:'🌍', renk:'#1abc9c'},
      tytFelsefe: {ad:'TYT Felsefe', ikon:'🤔', renk:'#f39c12'},
      aytFizik: {ad:'AYT Fizik', ikon:'🔭', renk:'#2980b9'},
      aytKimya: {ad:'AYT Kimya', ikon:'⚗️', renk:'#27ae60'},
      aytBiyoloji: {ad:'AYT Biyoloji', ikon:'🔬', renk:'#8e44ad'},
      aytTarih: {ad:'AYT Tarih', ikon:'🏛️', renk:'#d35400'},
      aytCografya: {ad:'AYT Coğrafya', ikon:'🗺️', renk:'#16a085'},
      aytFelsefeGrubu: {ad:'AYT Felsefe Grubu', ikon:'📚', renk:'#e74c3c'}
    };

    main.innerHTML = `
      <div class="page-header" style="margin-bottom:2rem;">
        <h1 style="color:var(--text-primary);">🔮 Tahmin Soruları - YKS 2026</h1>
        <p style="color:var(--text-secondary);line-height:1.6;">Geçmiş yıl analizlerine dayalı muhtemel soru tahminleri. Her sorunun yanında çıkma olasılığı ve puan tahmini var.</p>
        <div style="display:flex;gap:0.8rem;margin-top:1rem;flex-wrap:wrap;">
          <span style="background:#e74c3c33;color:#ff6b6b;padding:4px 12px;border-radius:20px;font-size:0.8rem;">🔴 HER YIL = Her sınavda sorulan</span>
          <span style="background:#f39c1233;color:#f39c12;padding:4px 12px;border-radius:20px;font-size:0.8rem;">🟡 SIKÇA = Sık sorulan</span>
          <span style="background:#2ecc7133;color:#2ecc71;padding:4px 12px;border-radius:20px;font-size:0.8rem;">🟢 ARADA = Arada sorulan</span>
          <span style="background:#9b59b633;color:#9b59b6;padding:4px 12px;border-radius:20px;font-size:0.8rem;">⚠️ PİF = Tuzak/Sürpriz</span>
        </div>
      </div>

      <!-- Ders Seçimi -->
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2rem;">
        ${Object.keys(TD).map(key => {
          const s = subjectNames[key] || {ad:key, ikon:'📚', renk:'#666'};
          return `<button class="btn tahmin-ders-btn" onclick="APP.showTahminDers('${key}')" 
            style="padding:0.6rem 1rem;border-radius:20px;background:${s.renk}22;color:${s.renk};border:2px solid ${s.renk}44;cursor:pointer;font-size:0.85rem;transition:all 0.3s;"
            onmouseover="this.style.background='${s.renk}44'" onmouseout="this.style.background='${s.renk}22'">
            ${s.ikon} ${s.ad}
          </button>`;
        }).join('')}
      </div>

      <div id="tahmin-content">
        <div class="glass-card" style="padding:2rem;text-align:center;">
          <div style="font-size:4rem;margin-bottom:1rem;">🎯</div>
          <h3 style="color:var(--text-primary);margin-bottom:0.5rem;">Yukarıdan bir ders seç</h3>
          <p style="color:var(--text-secondary);">Geçmiş yıl analizi, pif noktaları ve tahmin soruları gösterilecek</p>
        </div>
      </div>
    `;
  },

  showTahminDers(key) {
    const TD = window.TAHMIN_DATA;
    const data = TD[key];
    if (!data) return;

    const subjectNames = {
      tytTurkce: {ad:'TYT Türkçe', renk:'#e74c3c'}, tytFizik: {ad:'TYT Fizik', renk:'#3498db'},
      tytKimya: {ad:'TYT Kimya', renk:'#2ecc71'}, tytBiyoloji: {ad:'TYT Biyoloji', renk:'#9b59b6'},
      tytTarih: {ad:'TYT Tarih', renk:'#e67e22'}, tytCografya: {ad:'TYT Coğrafya', renk:'#1abc9c'},
      tytFelsefe: {ad:'TYT Felsefe', renk:'#f39c12'}, aytFizik: {ad:'AYT Fizik', renk:'#2980b9'},
      aytKimya: {ad:'AYT Kimya', renk:'#27ae60'}, aytBiyoloji: {ad:'AYT Biyoloji', renk:'#8e44ad'},
      aytTarih: {ad:'AYT Tarih', renk:'#d35400'}, aytCografya: {ad:'AYT Coğrafya', renk:'#16a085'},
      aytFelsefeGrubu: {ad:'AYT Felsefe Grubu', renk:'#e74c3c'}
    };
    const s = subjectNames[key] || {ad:key, renk:'#666'};
    const container = document.getElementById('tahmin-content');

    const tipColor = (tip) => {
      if (tip === 'HER YIL') return '#e74c3c';
      if (tip === 'SIKÇA') return '#f39c12';
      if (tip === 'ARADA') return '#2ecc71';
      if (tip === 'PİF') return '#9b59b6';
      return '#666';
    };

    container.innerHTML = `
      <h2 style="color:var(--text-primary);margin-bottom:1.5rem;border-left:4px solid ${s.renk};padding-left:1rem;">${s.ad} - Geçmiş Yıl Analizi</h2>

      <!-- Soru Dağılımı Tablosu -->
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;overflow-x:auto;">
        <h3 style="color:var(--text-primary);margin-bottom:1rem;">📊 ${data.analiz.baslik}</h3>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:2px solid var(--border-color);">
              <th style="text-align:left;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Konu</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Oran</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Soru Sayısı</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Çıkma Sıklığı</th>
            </tr>
          </thead>
          <tbody>
            ${data.analiz.dagilim.map(d => `
              <tr style="border-bottom:1px solid var(--border-color);">
                <td style="padding:0.7rem;color:var(--text-primary);font-size:0.9rem;">${d.konu}</td>
                <td style="text-align:center;padding:0.7rem;color:var(--text-primary);">${d.oran}</td>
                <td style="text-align:center;padding:0.7rem;color:var(--text-primary);font-weight:600;">${d.sayi}</td>
                <td style="text-align:center;padding:0.7rem;">
                  <span style="background:${tipColor(d.tip)}22;color:${tipColor(d.tip)};padding:3px 10px;border-radius:12px;font-size:0.8rem;font-weight:600;">${d.tip}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Pif Noktaları -->
      <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;border-left:4px solid #9b59b6;">
        <h3 style="color:var(--text-primary);margin-bottom:1rem;">⚠️ PİF NOKTALARI - Dikkat Edilmesi Gerekenler</h3>
        ${data.analiz.pifNoktalari.map(p => `
          <div style="padding:0.6rem 0;border-bottom:1px solid var(--border-color);color:var(--text-primary);font-size:0.9rem;line-height:1.6;">${p}</div>
        `).join('')}
      </div>

      <!-- Tahmin Soruları -->
      <h3 style="color:var(--text-primary);margin:2rem 0 1rem;">🎯 Tahmin Soruları (${data.sorular.length} soru)</h3>
      ${data.sorular.map((q, qi) => `
        <div class="glass-card" style="padding:1.5rem;margin-bottom:1.5rem;border-left:4px solid ${tipColor(q.olasilik)};">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
            <span style="background:${tipColor(q.olasilik)}22;color:${tipColor(q.olasilik)};padding:4px 12px;border-radius:12px;font-size:0.8rem;font-weight:600;">
              ${q.olasilik === 'HER YIL' ? '🔴' : q.olasilik === 'SIKÇA' ? '🟡' : q.olasilik === 'PİF' ? '⚠️' : '🟢'} ${q.olasilik}
            </span>
            <span style="background:var(--bg-tertiary);padding:4px 10px;border-radius:12px;font-size:0.8rem;color:var(--text-secondary);">Çıkma Olasılığı: %${q.puan}</span>
          </div>
          <h4 style="color:var(--text-primary);margin-bottom:1rem;line-height:1.6;white-space:pre-line;">Soru ${qi+1}: ${q.soru}</h4>
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${q.secenekler.map((opt, oi) => `
              <div class="quiz-option" id="tahmin-opt-${key}-${qi}-${oi}" onclick="APP.checkTahminAnswer('${key}',${qi},${oi})" 
                style="padding:0.8rem 1rem;border-radius:8px;cursor:pointer;border:2px solid var(--border-color);color:var(--text-primary);transition:all 0.3s;">
                <span style="font-weight:600;margin-right:0.5rem;">${String.fromCharCode(65+oi)})</span> ${opt}
              </div>
            `).join('')}
          </div>
          <div id="tahmin-aciklama-${key}-${qi}" style="display:none;margin-top:1rem;padding:1rem;border-radius:8px;line-height:1.6;"></div>
        </div>
      `).join('')}
    `;
  },

  checkTahminAnswer(key, qi, selected) {
    const TD = window.TAHMIN_DATA;
    const q = TD[key].sorular[qi];
    const aciklama = document.getElementById(`tahmin-aciklama-${key}-${qi}`);
    if (aciklama.style.display === 'block') return;

    const isCorrect = selected === q.dogruCevap;
    const selectedEl = document.getElementById(`tahmin-opt-${key}-${qi}-${selected}`);
    const correctEl = document.getElementById(`tahmin-opt-${key}-${qi}-${q.dogruCevap}`);

    // Update progress for corresponding subject
    const progressKey = key;
    if (!this.progress[progressKey]) this.progress[progressKey] = { correct: 0, wrong: 0 };
    if (isCorrect) this.progress[progressKey].correct++;
    else this.progress[progressKey].wrong++;
    this.saveProgress();

    if (isCorrect) {
      selectedEl.style.border = '2px solid var(--success)';
      selectedEl.style.background = 'rgba(46,204,113,0.15)';
      this.showToast('✅ Doğru! Bu sorunun çıkma olasılığı %' + q.puan, 'success');
    } else {
      selectedEl.style.border = '2px solid var(--danger)';
      selectedEl.style.background = 'rgba(231,76,60,0.15)';
      correctEl.style.border = '2px solid var(--success)';
      correctEl.style.background = 'rgba(46,204,113,0.15)';
      this.showToast('❌ Yanlış! Doğru cevabı incele.', 'danger');
    }

    q.secenekler.forEach((_, oi) => {
      document.getElementById(`tahmin-opt-${key}-${qi}-${oi}`).style.pointerEvents = 'none';
    });

    aciklama.innerHTML = `<strong>${isCorrect ? '✅ Doğru!' : '❌ Yanlış!'}</strong> ${q.aciklama}`;
    aciklama.style.display = 'block';
    aciklama.style.background = isCorrect ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)';
    aciklama.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
    aciklama.style.color = 'var(--text-primary)';
  },

  // ==================== ÖĞRETMEN PANELİ ====================
  async renderOgretmenPanel() {
    if (!this.isTeacher) { this.navigate('dashboard'); return; }
    const main = document.getElementById('main-content');
    main.innerHTML = '<div style="text-align:center;padding:3rem;"><div class="spinner"></div><p style="color:var(--text-secondary);margin-top:1rem;">Öğrenci verileri yükleniyor...</p></div>';

    // Firebase'den tüm verileri çek
    let users = this.getUsers();
    try {
      const fbUsers = await this.fbRead('users');
      if (fbUsers) users = {...users, ...fbUsers};
    } catch(e) {}

    const fbProgress = await this.fbRead('progress') || {};
    const fbLastActive = await this.fbRead('lastactive') || {};

    const usernames = Object.keys(users);

    const studentStats = usernames.map(uname => {
      const u = users[uname];
      let progress = fbProgress[uname] || {};

      let totalCorrect = 0, totalWrong = 0;
      Object.values(progress).forEach(p => {
        totalCorrect += (p.correct || 0);
        totalWrong += (p.wrong || 0);
      });
      const totalAnswered = totalCorrect + totalWrong;
      const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

      const lastActive = fbLastActive[uname];
      let lastActiveStr = 'Henüz aktif değil';
      if (lastActive) {
        const d = new Date(lastActive);
        const now = new Date();
        const diffMin = Math.floor((now - d) / 60000);
        if (diffMin < 1) lastActiveStr = 'Az önce';
        else if (diffMin < 60) lastActiveStr = diffMin + ' dk önce';
        else if (diffMin < 1440) lastActiveStr = Math.floor(diffMin/60) + ' saat önce';
        else lastActiveStr = Math.floor(diffMin/1440) + ' gün önce';
      }

      return { uname, fullname: u.fullname, createdAt: u.createdAt, progress, totalCorrect, totalWrong, totalAnswered, accuracy, lastActiveStr };
    });

    studentStats.sort((a, b) => b.accuracy - a.accuracy);

    const subjectList = Object.keys(this.subjects);

    main.innerHTML = `
      <div style="margin-bottom:2rem;">
        <h1 style="color:var(--text-primary);">👨‍🏫 Öğretmen Paneli - Öğrenci Takibi</h1>
        <p style="color:var(--text-secondary);margin-top:0.5rem;">Kayıtlı öğrenci sayısı: <strong style="color:var(--primary);">${usernames.length}</strong></p>
      </div>

      ${usernames.length === 0 ? `
        <div class="glass-card" style="padding:3rem;text-align:center;">
          <div style="font-size:4rem;margin-bottom:1rem;">📭</div>
          <h3 style="color:var(--text-primary);">Henüz kayıtlı öğrenci yok</h3>
          <p style="color:var(--text-secondary);">Öğrenciler sisteme kayıt olduğunda burada görünecek.</p>
        </div>
      ` : `
        <!-- Genel Özet -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;margin-bottom:2rem;">
          <div class="glass-card" style="padding:1.5rem;text-align:center;">
            <div style="font-size:2rem;">👥</div>
            <div style="font-size:2rem;font-weight:700;color:var(--primary);">${usernames.length}</div>
            <div style="color:var(--text-secondary);font-size:0.85rem;">Toplam Öğrenci</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;text-align:center;">
            <div style="font-size:2rem;">📝</div>
            <div style="font-size:2rem;font-weight:700;color:#2ecc71;">${studentStats.reduce((s,st)=>s+st.totalAnswered,0)}</div>
            <div style="color:var(--text-secondary);font-size:0.85rem;">Toplam Çözülen Soru</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;text-align:center;">
            <div style="font-size:2rem;">✅</div>
            <div style="font-size:2rem;font-weight:700;color:#27ae60;">${studentStats.reduce((s,st)=>s+st.totalCorrect,0)}</div>
            <div style="color:var(--text-secondary);font-size:0.85rem;">Toplam Doğru</div>
          </div>
          <div class="glass-card" style="padding:1.5rem;text-align:center;">
            <div style="font-size:2rem;">📊</div>
            <div style="font-size:2rem;font-weight:700;color:#f39c12;">${studentStats.length > 0 ? Math.round(studentStats.reduce((s,st)=>s+st.accuracy,0)/studentStats.length) : 0}%</div>
            <div style="color:var(--text-secondary);font-size:0.85rem;">Ortalama Başarı</div>
          </div>
        </div>

        <!-- Öğrenci Sıralaması -->
        <h2 style="color:var(--text-primary);margin-bottom:1rem;">🏆 Öğrenci Sıralaması</h2>
        <div class="glass-card" style="padding:1.5rem;margin-bottom:2rem;overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;min-width:600px;">
            <thead>
              <tr style="border-bottom:2px solid var(--border-color);">
                <th style="text-align:left;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">#</th>
                <th style="text-align:left;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Öğrenci</th>
                <th style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Çözülen</th>
                <th style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Doğru</th>
                <th style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Yanlış</th>
                <th style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Başarı</th>
                <th style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">Son Aktiflik</th>
              </tr>
            </thead>
            <tbody>
              ${studentStats.map((st, i) => {
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1);
                const barColor = st.accuracy >= 70 ? '#2ecc71' : st.accuracy >= 40 ? '#f39c12' : '#e74c3c';
                return `
                <tr style="border-bottom:1px solid var(--border-color);cursor:pointer;" onclick="APP.showStudentDetail('${st.uname}')" onmouseover="this.style.background='var(--bg-tertiary)'" onmouseout="this.style.background=''">
                  <td style="padding:0.8rem;color:var(--text-primary);font-size:1.1rem;">${medal}</td>
                  <td style="padding:0.8rem;">
                    <div style="color:var(--text-primary);font-weight:600;">${st.fullname}</div>
                    <div style="color:var(--text-secondary);font-size:0.75rem;">@${st.uname}</div>
                  </td>
                  <td style="text-align:center;padding:0.8rem;color:var(--text-primary);font-weight:600;">${st.totalAnswered}</td>
                  <td style="text-align:center;padding:0.8rem;color:#2ecc71;font-weight:600;">${st.totalCorrect}</td>
                  <td style="text-align:center;padding:0.8rem;color:#e74c3c;font-weight:600;">${st.totalWrong}</td>
                  <td style="text-align:center;padding:0.8rem;">
                    <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                      <div style="width:60px;height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
                        <div style="width:${st.accuracy}%;height:100%;background:${barColor};border-radius:3px;"></div>
                      </div>
                      <span style="color:${barColor};font-weight:700;font-size:0.9rem;">${st.accuracy}%</span>
                    </div>
                  </td>
                  <td style="text-align:center;padding:0.8rem;color:var(--text-secondary);font-size:0.85rem;">${st.lastActiveStr}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Detay Alanı -->
        <div id="student-detail"></div>
      `}
    `;
  },

  async showStudentDetail(uname) {
    const users = this.getUsers();
    const u = users[uname];
    if (!u) return;

    let progress = {};
    try {
      const fbProgress = await this.fbRead('progress/' + uname);
      if (fbProgress) {
        progress = fbProgress;
      } else {
        const saved = localStorage.getItem('yks2026_progress_' + uname);
        if (saved) progress = JSON.parse(saved);
      }
    } catch(e) {}

    const container = document.getElementById('student-detail');
    const subjectEntries = Object.entries(this.subjects);

    container.innerHTML = `
      <h2 style="color:var(--text-primary);margin-bottom:1rem;border-left:4px solid var(--primary);padding-left:1rem;">📋 ${u.fullname} (@${uname}) - Detaylı Rapor</h2>
      <div class="glass-card" style="padding:1.5rem;overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:2px solid var(--border-color);">
              <th style="text-align:left;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Ders</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Doğru</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Yanlış</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Toplam</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Başarı</th>
              <th style="text-align:center;padding:0.7rem;color:var(--text-secondary);font-size:0.85rem;">Net</th>
            </tr>
          </thead>
          <tbody>
            ${subjectEntries.map(([key, s]) => {
              const p = progress[key] || { correct: 0, wrong: 0 };
              const total = p.correct + p.wrong;
              const acc = total > 0 ? Math.round((p.correct / total) * 100) : 0;
              const net = (p.correct - p.wrong / 4).toFixed(2);
              const barColor = acc >= 70 ? '#2ecc71' : acc >= 40 ? '#f39c12' : total === 0 ? '#666' : '#e74c3c';
              return `
              <tr style="border-bottom:1px solid var(--border-color);">
                <td style="padding:0.7rem;color:var(--text-primary);">
                  <span style="margin-right:0.3rem;">${s.ikon}</span> ${s.ad}
                  <span style="background:${s.renk}22;color:${s.renk};padding:1px 6px;border-radius:6px;font-size:0.7rem;margin-left:0.3rem;">${s.sinav}</span>
                </td>
                <td style="text-align:center;padding:0.7rem;color:#2ecc71;font-weight:600;">${p.correct}</td>
                <td style="text-align:center;padding:0.7rem;color:#e74c3c;font-weight:600;">${p.wrong}</td>
                <td style="text-align:center;padding:0.7rem;color:var(--text-primary);">${total}</td>
                <td style="text-align:center;padding:0.7rem;">
                  <div style="display:flex;align-items:center;justify-content:center;gap:0.4rem;">
                    <div style="width:50px;height:5px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
                      <div style="width:${acc}%;height:100%;background:${barColor};border-radius:3px;"></div>
                    </div>
                    <span style="color:${barColor};font-weight:600;font-size:0.85rem;">${acc}%</span>
                  </div>
                </td>
                <td style="text-align:center;padding:0.7rem;color:var(--primary);font-weight:700;">${total > 0 ? net : '-'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
    container.scrollIntoView({ behavior: 'smooth' });
  }
};

// ==================== BAŞLAT ====================
document.addEventListener('DOMContentLoaded', () => APP.init());
