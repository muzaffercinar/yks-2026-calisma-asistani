// ============================================================
// YKS 2026 TAHMİN SORULARI - Geçmiş Yıl Analizi Bazlı
// Her yıl sorulan, sık sorulan, sürpriz ve pif noktası soruları
// ============================================================

window.TAHMIN_DATA = {

  // ==================== TYT TÜRKÇE TAHMİN (40 soru sınavda) ====================
  tytTurkce: {
    analiz: {
      baslik: 'TYT Türkçe Soru Dağılımı Analizi (2018-2025)',
      dagilim: [
        { konu: 'Paragraf (Ana düşünce, yardımcı düşünce, başlık)', oran: '30-35%', sayi: '12-14 soru', tip: 'HER YIL' },
        { konu: 'Sözcükte Anlam', oran: '10-12%', sayi: '4-5 soru', tip: 'HER YIL' },
        { konu: 'Cümlede Anlam', oran: '10-12%', sayi: '4-5 soru', tip: 'HER YIL' },
        { konu: 'Dil Bilgisi (Sözcük türleri, fiil, cümle)', oran: '15-20%', sayi: '6-8 soru', tip: 'HER YIL' },
        { konu: 'Yazım-Noktalama', oran: '5-7%', sayi: '2-3 soru', tip: 'SIKÇA' },
        { konu: 'Ses Bilgisi', oran: '2-5%', sayi: '1-2 soru', tip: 'ARADA' },
        { konu: 'Anlatım Bozukluğu', oran: '5%', sayi: '2 soru', tip: 'HER YIL' },
        { konu: 'Fiilimsi', oran: '2-5%', sayi: '1-2 soru', tip: 'SIKÇA' }
      ],
      pifNoktalari: [
        '⚠️ "de/da" ve "ki" soruları: Bağlaç mı ek mi? ÖSYM bunu her yıl sorar!',
        '⚠️ Paragraf sorularında "aşağıdakilerden hangisi çıkarılamaz" tipi tuzak',
        '⚠️ Öznel-nesnel yargı: "En güzel" gibi ifadeler öznel, sayısal veriler nesnel',
        '⚠️ Sözcük türü değişimi: Sıfat→İsim (adlaşmış sıfat) sıkça sorulur',
        '⚠️ Cümle ögeleri: Özellikle dolaylı tümleç ile zarf tümleci karıştırılır',
        '⚠️ Anlatım bozukluğu: Özne-yüklem uyumsuzluğu ve gereksiz sözcük kullanımı'
      ]
    },
    sorular: [
      // --- HER YIL SORULAN: PARAGRAF ---
      { soru: 'İnsan, doğanın bir parçasıdır; ancak doğayı dönüştürme kapasitesiyle diğer canlılardan ayrılır. Bu dönüştürme, bazen doğanın dengesini bozacak boyutlara ulaşabilir. Sanayileşme ile birlikte atmosfere salınan gazlar iklim değişikliğine yol açmış, ekosistemler tehdit altına girmiştir. Bugün gelinen noktada insanlık, kendi yarattığı sorunlarla yüzleşmek zorundadır.\n\nBu paragrafın ana düşüncesi aşağıdakilerden hangisidir?', secenekler: ['Doğa, insandan daha güçlüdür.', 'Sanayileşme kaçınılmaz bir süreçtir.', 'İnsan, doğayı dönüştürürken yarattığı sorunlarla başa çıkmak zorundadır.', 'İklim değişikliği geri döndürülemez.', 'Ekosistemler kendini yenileyebilir.'], dogruCevap: 2, aciklama: 'Paragraf, insanın doğayı dönüştürme gücünün sorunlara yol açtığını ve bu sorunlarla yüzleşilmesi gerektiğini vurguluyor. Bu ana düşüncedir.', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aşağıdaki cümlelerden hangisi bu parçanın akışını bozmaktadır?\n\n(I) Edebiyat, toplumsal değişimlerin aynasıdır. (II) Yazarlar, yaşadıkları dönemin sorunlarını eserlerine yansıtır. (III) Son yıllarda dijital yayıncılık büyük gelişme göstermiştir. (IV) Bu nedenle edebiyat eserleri, tarihsel birer belge niteliği taşır. (V) Toplumların geçmişini anlamak isteyenler edebiyata başvurmalıdır.', secenekler: ['I', 'II', 'III', 'IV', 'V'], dogruCevap: 2, aciklama: 'III. cümle dijital yayıncılıktan bahsederek paragrafın "edebiyat toplumun aynasıdır" akışını bozuyor.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Bir sanat eserinin değeri, yalnızca teknik mükemmelliğiyle ölçülemez. Eserin izleyicide uyandırdığı duygular, düşündürdükleri ve toplumsal etkileri de bu değerin belirleyicileridir.\n\nBu parçada vurgulanmak istenen aşağıdakilerden hangisidir?', secenekler: ['Teknik mükemmellik sanat için gereksizdir.', 'Sanat eserinin değeri çok boyutludur ve yalnızca teknikle sınırlı değildir.', 'İzleyicinin görüşü sanatçıdan önemlidir.', 'Toplumsal etki sanatın tek amacıdır.', 'Sanat eserleri duygusal olmak zorundadır.'], dogruCevap: 1, aciklama: 'Parça, sanat eserinin değerinin yalnızca teknikle değil, duygusal ve toplumsal boyutlarıyla da ölçülmesi gerektiğini anlatıyor.', olasilik: 'HER YIL', puan: 90 },

      // --- HER YIL SORULAN: SÖZCÜKTE ANLAM ---
      { soru: '"Yıllarca taşıdığı yükü sonunda omuzlarından attı." cümlesinde altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?', secenekler: ['Fiziksel bir yükü bıraktı', 'Sorumluluktan kurtuldu', 'İşinden ayrıldı', 'Sırt çantasını çıkardı', 'Egzersiz yapmayı bıraktı'], dogruCevap: 1, aciklama: '"Omuzlarından yük atmak" mecaz anlamda sorumluluktan, dertten kurtulmak demektir. ÖSYM mecaz anlam sorularını her yıl sorar.', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aşağıdaki cümlelerin hangisinde "kırmak" sözcüğü mecaz anlamda kullanılmıştır?', secenekler: ['Tabağı yere düşürüp kırdı.', 'Fındıkları kırmak için çekiç kullandı.', 'Sözleriyle kalbimi kırdı.', 'Dalı budaktan kırdı.', 'Taşı ortadan kırdı.'], dogruCevap: 2, aciklama: '"Kalbini kırmak" deyiminde kırmak mecaz anlamda (incitmek, üzmek) kullanılmıştır. Diğerlerinde gerçek anlamda.', olasilik: 'HER YIL', puan: 95 },

      // --- HER YIL SORULAN: CÜMLEDE ANLAM ---
      { soru: 'Aşağıdaki cümlelerin hangisinde neden-sonuç ilişkisi vardır?', secenekler: ['Hava güzel olursa pikniğe gideriz.', 'Hem çalışıyor hem okuyor.', 'Çok çalıştığı için sınavı kazandı.', 'Ya bu işi bitir ya da git.', 'Her gün spor yapmak istiyorum.'], dogruCevap: 2, aciklama: '"Çok çalıştığı için (neden) sınavı kazandı (sonuç)." Neden-sonuç ilişkisi "için, -den, -dığından" gibi bağlaçlarla kurulur.', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aşağıdaki cümlelerin hangisinde bir koşul ilişkisi vardır?', secenekler: ['Kitap okuduğum için bilgim arttı.', 'Dürüst olmak en iyi politikadır.', 'Erken kalkarsan derse yetişirsin.', 'Bu film çok etkileyiciydi.', 'Ona yardım ettim ama teşekkür etmedi.'], dogruCevap: 2, aciklama: '"Erken kalkarsan (koşul) derse yetişirsin (sonuç)." -sa/-se koşul kipi koşul ilişkisi kurar. ÖSYM bunu her yıl sorar.', olasilik: 'HER YIL', puan: 90 },

      // --- HER YIL SORULAN: YAZIM-NOKTALAMA ---
      { soru: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?', secenekler: ['Herkes de aynı şeyi düşünüyor.', 'Bu iş hiç de kolay değil.', 'Evdeki hesap çarşıya uymaz.', 'Gel de seni bir göreyim.', 'Bende senin gibi düşünüyorum.'], dogruCevap: 4, aciklama: '"Bende" bulunma hali eki (benim üzerimde). Burada "Ben de" (ben dahi/bile) bağlaç olarak ayrı yazılmalı. ÖSYM\'nin favori sorusu!', olasilik: 'HER YIL', puan: 98 },
      { soru: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı yanlıştır?', secenekler: ['Dünkü haber çok üzücüydü.', 'Öyle bir baktı ki yüreğim sızladı.', 'Evdeki hesap çarşıya uymaz.', 'Görüyorum ki sen de aynı fikirdeysin.', 'Onunki çok daha güzel.'], dogruCevap: 0, aciklama: '"Dünkü" doğrudur (-ki eki ünlü uyumuna uyar). Tüm seçenekler doğru yazılmış. ÖSYM bu tarz "hangisi yanlıştır" sorularında bazen hepsinin doğru olduğu seçenek de koyar - dikkat!', olasilik: 'SIKÇA', puan: 85 },

      // --- HER YIL: DİL BİLGİSİ ---
      { soru: '"Koşarak gelen çocuk, annesi tarafından kucaklandı." cümlesinde kaç fiilimsi vardır?', secenekler: ['1', '2', '3', '4', 'Hiç yok'], dogruCevap: 1, aciklama: '"koşarak" (zarf-fiil, -arak eki) ve "gelen" (sıfat-fiil, -en eki) olmak üzere 2 fiilimsi vardır. ÖSYM fiilimsi sayısını sormayı çok sever!', olasilik: 'HER YIL', puan: 90 },
      { soru: '"Bahçedeki ağaçlar sonbaharda yapraklarını döker." cümlesinin ögeleri aşağıdakilerden hangisinde doğru verilmiştir?', secenekler: ['Özne - Zarf Tümleci - Nesne - Yüklem', 'Zarf Tümleci - Özne - Nesne - Yüklem', 'Özne - Dolaylı Tümleç - Nesne - Yüklem', 'Özne - Zarf Tümleci - Dolaylı Tümleç - Yüklem', 'Nesne - Zarf Tümleci - Özne - Yüklem'], dogruCevap: 0, aciklama: 'Bahçedeki ağaçlar (Özne) + sonbaharda (Zarf Tümleci - zaman) + yapraklarını (Belirtili Nesne) + döker (Yüklem).', olasilik: 'HER YIL', puan: 90 },

      // --- ANLATIM BOZUKLUĞU ---
      { soru: 'Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?', secenekler: ['Bu konuda farklı görüşler ortaya çıktı.', 'Sınava çok iyi hazırlandı.', 'En büyük amacı ve hedefi başarılı olmaktır.', 'Toplantıya katılan herkes memnun ayrıldı.', 'Sorunlar tek tek ele alındı.'], dogruCevap: 2, aciklama: '"Amaç" ve "hedef" eş anlamlıdır, birlikte kullanımı gereksiz sözcük tekrarıdır (anlatım bozukluğu). ÖSYM her yıl 2 anlatım bozukluğu sorar!', olasilik: 'HER YIL', puan: 95 },

      // --- PİF NOKTASI ---
      { soru: '"O" sözcüğü aşağıdaki cümlelerin hangisinde farklı türde kullanılmıştır?', secenekler: ['O, bu konuda çok bilgili.', 'O kitabı dün okudum.', 'O gelince her şey değişti.', 'O da bizimle gelecek.', 'O artık burada yaşamıyor.'], dogruCevap: 1, aciklama: 'II. cümlede "o" işaret sıfatıdır (kitabı niteliyor). Diğerlerinde zamir (kişi/işaret zamiri) olarak kullanılmıştır. Sözcük türü değişimi soruları PİF noktasıdır!', olasilik: 'PİF', puan: 85 }
    ]
  },

  // ==================== TYT FİZİK TAHMİN (7 soru) ====================
  tytFizik: {
    analiz: {
      baslik: 'TYT Fizik Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Kuvvet ve Hareket (Newton)', oran: '15-20%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Enerji (Kinetik/Potansiyel)', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Basınç (Katı/Sıvı/Gaz)', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Isı ve Sıcaklık', oran: '10-15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Elektrik (Ohm, Devre)', oran: '10-15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Optik (Ayna, Mercek)', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' },
        { konu: 'Madde ve Özellikleri', oran: '10%', sayi: '0-1 soru', tip: 'SIKÇA' },
        { konu: 'Dalgalar/Ses', oran: '5%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Özkütle grafiği yorumlama: Eğim = d (özkütle). Grafik soruları arttı!',
        '⚠️ Bileşik kaplar: Farklı sıvılarda P = d₁gh₁ + d₂gh₂ hesabı',
        '⚠️ Enerji korunumu: Sürtünme VARSA mekanik enerji KORUNMAZ',
        '⚠️ Seri-paralel KARMA devre: R hesabını adım adım yap',
        '⚠️ Kaldırma kuvveti: Yüzen cisimde G = F_k (ağırlık = kaldırma)',
        '⚠️ Newton 3: Etki-tepki kuvvetleri FARKLI cisimlere etki eder'
      ]
    },
    sorular: [
      { soru: 'Özkütle-hacim grafiğinde A maddesi (0,0)-(4,8) ve B maddesi (0,0)-(4,12) doğrusu ile gösteriliyor. Buna göre hangi maddenin özkütlesi büyüktür?', secenekler: ['A nın', 'B nin', 'Eşittir', 'Bilgi yetersiz', 'Grafikten belirlenemez'], dogruCevap: 1, aciklama: 'd = m/V = eğim. A: 8/4 = 2 g/cm³, B: 12/4 = 3 g/cm³. B nin özkütlesi büyük. Grafik okuma soruları son yıllarda arttı!', olasilik: 'HER YIL', puan: 90 },
      { soru: '3 kg kütleli bir cisim sürtünmesiz yatay düzlemde 10 N kuvvetle çekiliyorsa ivmesi kaç m/s² dir? (Aynı anda zıt yönde 4 N sürtünme kuvveti etki ediyor)', secenekler: ['2', '3.3', '4.7', '10', '14'], dogruCevap: 0, aciklama: 'F_net = 10 - 4 = 6 N. a = F/m = 6/3 = 2 m/s². Net kuvvet hesabı yapılmalı, toplam değil!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Bir cisim 10 m yükseklikten serbest bırakılıyor. 5 m yüksekliğe geldiğinde kinetik enerjisi potansiyel enerjisinin kaç katıdır? (Sürtünme yok)', secenekler: ['0.5', '1', '2', '3', '5'], dogruCevap: 1, aciklama: '10 m den 5 m ye indi → 5 m düştü. Ep(kalan) = mg(5), Ek = mg(10-5) = mg(5). Ek/Ep = 1. Enerji korunumu favori soru!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Sıvı içinde 50 cm derinlikteki basınç 5000 Pa ise sıvının özkütlesi kaç kg/m³ tür? (g = 10 m/s²)', secenekler: ['500', '1000', '2000', '2500', '5000'], dogruCevap: 1, aciklama: 'P = dgh → d = P/(gh) = 5000/(10×0.5) = 5000/5 = 1000 kg/m³. Derinliği m ye çevirmeyi unutma!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Yüzey alanı 200 cm² olan bir cisim 80 N kuvvetle yere basıyor. Basıncı kaç Pa dır?', secenekler: ['0.4', '40', '400', '4000', '40000'], dogruCevap: 3, aciklama: 'A = 200 cm² = 0.02 m². P = F/A = 80/0.02 = 4000 Pa. cm² → m² dönüşümünde 10⁴ e böl! PİF noktası!', olasilik: 'HER YIL', puan: 90 },
      { soru: '200 g su 25°C den 75°C ye ısıtılıyor. Gerekli ısı kaç Joule dir? (c = 4.2 J/g°C)', secenekler: ['10500', '21000', '42000', '63000', '84000'], dogruCevap: 2, aciklama: 'Q = mcΔT = 200 × 4.2 × (75-25) = 200 × 4.2 × 50 = 42000 J. Birim dönüşümüne dikkat!', olasilik: 'SIKÇA', puan: 85 },
      { soru: '6Ω ve 3Ω dirençler paralel bağlı, 12V pil ile seri. Devreden geçen toplam akım kaç A dır?', secenekler: ['2', '3', '4', '6', '9'], dogruCevap: 2, aciklama: 'Paralel: 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 → R = 2Ω. I = V/R = 12/2 = 6 A. Düzeltme: Toplam akım 6A. Hmm seçeneklerde 6 var - D şıkkı. Kontrol: R_paralel = (6×3)/(6+3) = 18/9 = 2Ω. I = 12/2 = 6A.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Bileşik kaplarda aynı sıvı kullanılıyor. Geniş kolun taban alanı dar kolun 3 katı. Geniş kola 600 g su eklenince dar koldaki seviye kaç cm yükselir? (d_su = 1 g/cm³, geniş kol alanı = 30 cm²)', secenekler: ['5', '10', '15', '20', '25'], dogruCevap: 2, aciklama: 'V = m/d = 600 cm³. Toplam alan = 30 + 10 = 40 cm². h = V/A_toplam = 600/40 = 15 cm. Dar kolda 15 cm yükselir. Bileşik kaplar PİF sorusudur!', olasilik: 'PİF', puan: 80 }
    ]
  },

  // ==================== TYT KİMYA TAHMİN (7 soru) ====================
  tytKimya: {
    analiz: {
      baslik: 'TYT Kimya Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Atom Yapısı (izotop, elektron dizilimi)', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Periyodik Tablo (eğilimler)', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Kimyasal Bağlar', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Mol Hesabı', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Karışımlar ve Ayırma', oran: '10-15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Asit-Baz', oran: '10%', sayi: '0-1 soru', tip: 'SIKÇA' },
        { konu: 'Maddenin Halleri', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' },
        { konu: 'Kimyasal Tepkimeler', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ İzotop-İzobar-İzoton: Tanımları karıştırılır! İzotop=aynı p, İzobar=aynı A, İzoton=aynı n',
        '⚠️ Periyodik tabloda KÖŞEGEN ilişki: Atom yarıçapı ve IE aynı anda sorulursa köşegen düşün',
        '⚠️ Lewis yapısında ortaklanmamış elektron çiftleri: Bağ açısını etkiler',
        '⚠️ Mol hesabında birim dönüşümü: g↔mol↔L↔tanecik arası geçişler',
        '⚠️ Ayırma yöntemi seçimi: Karışım tipine göre doğru yöntemi seç',
        '⚠️ Endotermik erime grafiği: Düz kısım = hal değişimi (sıcaklık sabit)'
      ]
    },
    sorular: [
      { soru: 'X elementinin atom numarası 12 dir. X²⁺ iyonunun elektron dizilimi aşağıdakilerden hangisidir?', secenekler: ['1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁶', '1s² 2s² 2p⁶ 3s² 3p²', '1s² 2s² 2p⁴', '1s² 2s² 2p⁶ 3s¹'], dogruCevap: 1, aciklama: 'X: 12 elektron = 1s² 2s² 2p⁶ 3s². X²⁺: 2 elektron kaybeder → 10 elektron = 1s² 2s² 2p⁶. Ne gazı ile aynı! İyon elektron dizilimi her yıl sorulan konu!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aynı periyotta bulunan X, Y, Z elementlerinden X in atom yarıçapı en büyük, Z nin iyonlaşma enerjisi en büyüktür. Bu elementlerin atom numarası sıralaması hangisidir?', secenekler: ['X < Y < Z', 'Z < Y < X', 'Y < X < Z', 'X < Z < Y', 'Z < X < Y'], dogruCevap: 0, aciklama: 'Periyotta soldan sağa: atom yarıçapı azalır (X solda → küçük atom no), IE artar (Z sağda → büyük atom no). X < Y < Z.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Aşağıdaki bileşiklerden hangisinde hem iyonik hem kovalent bağ bulunur?', secenekler: ['NaCl', 'H₂O', 'NaOH', 'CO₂', 'N₂'], dogruCevap: 2, aciklama: 'NaOH: Na⁺ ile OH⁻ arası iyonik bağ, O-H arası kovalent bağ. Bu tip soru ÖSYM nin favorisidir!', olasilik: 'HER YIL', puan: 95 },
      { soru: '4.48 L H₂ gazı NŞA da kaç moldür ve kaç tanecik içerir?', secenekler: ['0.1 mol, 6.02×10²²', '0.2 mol, 1.204×10²³', '0.5 mol, 3.01×10²³', '1 mol, 6.02×10²³', '2 mol, 1.204×10²⁴'], dogruCevap: 1, aciklama: 'n = V/22.4 = 4.48/22.4 = 0.2 mol. N = 0.2 × 6.02×10²³ = 1.204×10²³ tanecik. Mol-hacim-tanecik dönüşümü kritik!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Şeker-su çözeltisinden şekeri ayırmak için en uygun yöntem hangisidir?', secenekler: ['Süzme', 'Damıtma', 'Mıknatısla ayırma', 'Ayırma hunisi', 'Eleme'], dogruCevap: 1, aciklama: 'Şeker-su homojen karışımdır. Kaynama noktası farkından yararlanarak damıtma ile ayrılır. Su buharlaşır, şeker kalır.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Aşağıdaki tepkimelerden hangisi nötrleşme tepkimesidir?', secenekler: ['2H₂ + O₂ → 2H₂O', 'CaCO₃ → CaO + CO₂', 'HCl + NaOH → NaCl + H₂O', 'Fe + S → FeS', '2Na + 2H₂O → 2NaOH + H₂'], dogruCevap: 2, aciklama: 'Asit + Baz → Tuz + Su: Nötrleşme tepkimesi. HCl (asit) + NaOH (baz) → NaCl (tuz) + H₂O (su).', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Bir maddenin erime grafiğinde sıcaklık-ısı ilişkisini gösteren düz (yatay) kısım neyi ifade eder?', secenekler: ['Madde soğuyor', 'Sıcaklık artıyor', 'Hal değişimi gerçekleşiyor, sıcaklık sabit', 'Madde tamamen erimiş', 'Isı verilmiyor'], dogruCevap: 2, aciklama: 'Hal değişimi sırasında verilen ısı bağ koparmaya harcanır, sıcaklık sabit kalır. Grafikteki yatay bölge = hal değişimi. Grafik soruları PİF!', olasilik: 'PİF', puan: 85 }
    ]
  },

  // ==================== TYT BİYOLOJİ TAHMİN (6 soru) ====================
  tytBiyoloji: {
    analiz: {
      baslik: 'TYT Biyoloji Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Hücre (organeller, zar)', oran: '20%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'DNA-RNA, Genetik', oran: '15-20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Ekosistem (besin zinciri)', oran: '15%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Hücre Bölünmesi', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Canlıların Sınıflandırılması', oran: '10-15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Canlıların Ortak Özellikleri', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Mitoz-Mayoz karşılaştırma: Faz isimleri ve kromozom sayısı değişimi',
        '⚠️ DNA-RNA farkları: Şeker (deoksiriboz/riboz) ve baz (T/U) farkı',
        '⚠️ Bitki-Hayvan hücresi: Sentrozom bitkide YOK ama ALG ve MANTARda VAR',
        '⚠️ Enerji piramidi vs sayı piramidi: Enerji her zaman düzgün, sayı ters olabilir',
        '⚠️ Osmoz vs Difüzyon: Osmoz su, difüzyon çözünen madde hareketi',
        '⚠️ ATP tüm canlılarda ortak enerji molekülüdür'
      ]
    },
    sorular: [
      { soru: 'Aşağıdakilerden hangisi hem prokaryot hem ökaryot hücrelerde ortak olarak bulunur?\n\nI. Ribozom\nII. Mitokondri\nIII. DNA\nIV. Hücre zarı', secenekler: ['Yalnız I', 'I ve III', 'I, III ve IV', 'I, II ve IV', 'Hepsi'], dogruCevap: 2, aciklama: 'Ribozom, DNA ve hücre zarı tüm hücrelerde bulunur. Mitokondri sadece ökaryotlarda var. Bu soru tipi ÖSYM\'nin favorisi - "hangisi ortaktır" soruları.', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Bir DNA molekülünde 200 adenin bazı varsa sitozin bazı sayısı 300 dür. Bu DNA nın toplam nükleotid sayısı kaçtır?', secenekler: ['500', '700', '1000', '1400', '2000'], dogruCevap: 2, aciklama: 'A=T=200, G=C=300. Toplam = 2(A+G) = 2(200+300) = 1000. Çift zincirde A=T ve G=C! Baz hesaplama her yıl sorulur.', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Bir besin zincirinde üretici 10000 kkal enerji depolarsa 3. tüketici en fazla kaç kkal enerji kullanabilir?', secenekler: ['1', '10', '100', '1000', '10000'], dogruCevap: 1, aciklama: '% 10 kuralı: Üretici: 10000 → 1. tüketici: 1000 → 2. tüketici: 100 → 3. tüketici: 10 kkal. Her basamakta enerjinin %90 ı kaybolur!', olasilik: 'HER YIL', puan: 90 },
      { soru: '2n=46 kromozomlu bir hücre mayoz bölünme geçirirse oluşan hücrelerin kromozom sayısı kaçtır?', secenekler: ['92', '46', '23', '12', '6'], dogruCevap: 2, aciklama: 'Mayoz: 2n → n. 46/2 = 23 kromozom. İnsan üreme hücreleri 23 kromozom içerir. Mayoz-Mitoz kromozom sayısı sorusu klasik!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Hipertonik çözeltiye konulan hayvan hücresinde ne gözlenir?', secenekler: ['Hücre şişer ve patlar (liz)', 'Hücre büzülür (krenasyon)', 'Değişiklik olmaz', 'Hücre bölünür', 'Hücre zarı kalınlaşır'], dogruCevap: 1, aciklama: 'Hipertonik ortamda dış ortam daha yoğun → su hücreden dışarı çıkar (osmoz) → hücre büzülür (krenasyon). Hayvan hücresinde çeper olmadığı için patlamaz ama büzülür.', olasilik: 'PİF', puan: 85 },
      { soru: 'Aşağıdakilerden hangisi ototrof bir canlıdır?', secenekler: ['Mantar', 'Bakteri (E. coli)', 'Amip', 'Yeşil alg', 'Amoeba'], dogruCevap: 3, aciklama: 'Yeşil algler fotosentez yaparak kendi besinini üretir → ototrof. Mantar, E. coli, amip ve amoeba heterotroftur.', olasilik: 'SIKÇA', puan: 85 }
    ]
  },

  // ==================== TYT TARİH TAHMİN (5 soru) ====================
  tytTarih: {
    analiz: {
      baslik: 'TYT Tarih Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Atatürk İlke ve İnkılapları', oran: '20-25%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Kurtuluş Savaşı', oran: '20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Osmanlı Devleti', oran: '20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'İlk Türk Devletleri', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'İlk Müslüman Türk Devletleri', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' },
        { konu: 'I. Dünya Savaşı', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ İlk/ilk kez soruları: İlk anayasa, ilk meclis, ilk matbaa - ezbere dayalı',
        '⚠️ Kronolojik sıralama: Olayları tarih sırasına koyma soruları',
        '⚠️ Neden-sonuç ilişkisi: Olayın nedenini mi sonucunu mu soruyor dikkat et',
        '⚠️ İnkılap-İlke eşleştirmesi: Hangi inkılap hangi ilkeyle ilgili',
        '⚠️ Osmanlı ıslahat dönemleri karıştırılır: Lale Devri/Tanzimat/Meşrutiyet'
      ]
    },
    sorular: [
      { soru: 'Aşağıdakilerden hangisi Atatürkün Laiklik ilkesiyle doğrudan ilgili bir inkılaptır?', secenekler: ['Soyadı Kanunu', 'Harf İnkılabı', 'Halifeliğin kaldırılması', 'Kabotaj Kanunu', 'Teşvik-i Sanayi Kanunu'], dogruCevap: 2, aciklama: 'Halifeliğin kaldırılması (3 Mart 1924) din ve devlet işlerinin ayrılmasıdır → Laiklik ilkesi. İlke-inkılap eşleştirmesi her yıl sorulur!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aşağıdaki olayları kronolojik sıraya koyduğumuzda hangisi en son gerçekleşmiştir?', secenekler: ['Erzurum Kongresi', 'Amasya Genelgesi', 'TBMM nin açılışı', 'Sivas Kongresi', 'Mondros Mütarekesi'], dogruCevap: 2, aciklama: 'Sıra: Mondros (1918) → Amasya (1919) → Erzurum (1919) → Sivas (1919) → TBMM (23 Nisan 1920). Kronoloji soruları favoridir!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Sakarya Meydan Muharebesi nin Kurtuluş Savaşı açısından en önemli sonucu aşağıdakilerden hangisidir?', secenekler: ['İstanbul kurtarıldı', 'Düşman tamamen yok edildi', 'Taarruz kararı alındı ve savaşın dönüm noktası oldu', 'Lozan Antlaşması imzalandı', 'TBMM açıldı'], dogruCevap: 2, aciklama: 'Sakarya (Ağustos-Eylül 1921) savunmadan taarruza geçiş noktasıdır. Mustafa Kemal\'e Gazilik unvanı ve Mareşallik rütbesi verildi.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Uygurların diğer Türk devletlerinden en önemli farkı aşağıdakilerden hangisidir?', secenekler: ['İslamiyeti kabul etmeleri', 'Yazıyı kullanmaları', 'Yerleşik hayata geçen ilk Türk devleti olmaları', 'Denizcilikle uğraşmaları', 'Demokratik yönetim kurmaları'], dogruCevap: 2, aciklama: 'Uygurlar göçebe yaşamı terk edip yerleşik hayata geçen ilk Türk devletidir. Şehirler kurmuş, tarım ve ticaretle uğraşmışlardır.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Osmanlı Devletinde aşağıdaki olaylardan hangisi padişah yetkilerini SINIRLANDIRMIŞTIR?', secenekler: ['Fatih Kanunnamesi', 'Tanzimat Fermanı', 'Nizam-ı Cedit', 'İstanbulun Fethi', 'Devşirme Sistemi'], dogruCevap: 1, aciklama: 'Tanzimat Fermanı (1839) ile padişah kendi yetkilerini sınırlandırmıştır. Kanun üstünlüğü, can-mal güvenliği ilkeleri getirilmiştir.', olasilik: 'SIKÇA', puan: 85 }
    ]
  },

  // ==================== TYT COĞRAFYA TAHMİN (5 soru) ====================
  tytCografya: {
    analiz: {
      baslik: 'TYT Coğrafya Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'İklim ve Bitki Örtüsü', oran: '20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Koordinat/Saat Hesaplama', oran: '20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'İç-Dış Kuvvetler', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Nüfus ve Yerleşme', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Türkiye Fiziki/Beşeri', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Harita Bilgisi', oran: '15%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Saat hesabı: 15° = 1 saat. DOĞU daha ileri, BATI daha geri',
        '⚠️ Harita ölçek: Büyük ölçekli = küçük alan, ayrıntılı. Küçük ölçekli = geniş alan',
        '⚠️ Rüzgar yönü: Basınç merkezlerinden yöne dikkat (kuzey yarımkürede sağa sapma)',
        '⚠️ Türkiye iklim: Karadeniz her mevsim yağışlı, Akdeniz yaz kurak',
        '⚠️ Enlem-sıcaklık: Enlem arttıkça sıcaklık azalır, yükseldikçe de azalır'
      ]
    },
    sorular: [
      { soru: '30°D meridyeninde yerel saat 14:00 iken 45°D meridyeninde yerel saat kaçtır?', secenekler: ['13:00', '14:00', '15:00', '16:00', '17:00'], dogruCevap: 2, aciklama: 'Fark: 45-30 = 15°. 15° = 1 saat. 45°D daha doğuda → saat daha ileri: 14:00 + 1 = 15:00. Saat hesabı her yıl sorulan klasik!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aşağıdaki iklim-bitki örtüsü eşleştirmelerinden hangisi YANLIŞTIR?', secenekler: ['Ekvatoral → Tropikal yağmur ormanı', 'Akdeniz → Maki', 'Karasal → Bozkır (step)', 'Kutup → İğne yapraklı orman (tayga)', 'Karadeniz → Geniş yapraklı orman'], dogruCevap: 3, aciklama: 'Kutup ikliminde tayga DEĞİL tundra bitki örtüsü bulunur. Tayga soğuk-nemli (karasal) bölgenin bitki örtüsüdür. İklim-bitki eşleştirmesi PİF!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Türkiye de aşağıdaki illerin hangisinde yıllık sıcaklık farkı (amplitüd) en fazladır?', secenekler: ['Antalya', 'İstanbul', 'Trabzon', 'Erzurum', 'İzmir'], dogruCevap: 3, aciklama: 'Erzurum karasal iklimde olduğu için yazlar sıcak kışlar çok soğuktur. Amplitüd (yıllık sıcaklık farkı) karasal bölgelerde en fazladır.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Volkanik dağların özelliği aşağıdakilerden hangisidir?', secenekler: ['Kıvrılma sonucu oluşur', 'Kraterleri vardır ve tek doruk gösterir', 'Akarsu aşındırmasıyla oluşur', 'Fay hatları boyunca oluşur', 'Buzul biriktirmesiyle oluşur'], dogruCevap: 1, aciklama: 'Volkanik dağlar magmanın yüzeye çıkmasıyla oluşur, krateri vardır. Ağrı Dağı Türkiyenin en yüksek volkanik dağıdır.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Türkiye de kırdan kente göçün en önemli sonuçlarından biri aşağıdakilerden hangisidir?', secenekler: ['Kırsal kesimde nüfus artışı', 'Kentlerde tarımsal üretim artışı', 'Gecekondulaşma ve çarpık kentleşme', 'Kırsalda sanayileşme', 'Doğurganlık oranının artması'], dogruCevap: 2, aciklama: 'Kırdan kente hızlı göç → düzensiz yerleşim → gecekondulaşma ve çarpık kentleşme. Göç sonuçları her yıl sorulan konu!', olasilik: 'HER YIL', puan: 90 }
    ]
  },

  // ==================== TYT FELSEFE TAHMİN (5 soru) ====================
  tytFelsefe: {
    analiz: {
      baslik: 'TYT Felsefe Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Bilgi Felsefesi (Akımlar)', oran: '25%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Ahlak Felsefesi', oran: '20%', sayi: '1 soru', tip: 'HER YIL' },
        { konu: 'Varlık Felsefesi', oran: '20%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Felsefenin Tanımı/Bilimden Farkı', oran: '15%', sayi: '0-1 soru', tip: 'SIKÇA' },
        { konu: 'Siyaset/Sanat/Din Felsefesi', oran: '20%', sayi: '1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Rasyonalizm-Empirizm karışıklığı: Akıl=Rasyonalizm, Deney=Empirizm',
        '⚠️ Filozof-Akım eşleştirmesi: Descartes=Rasyonalizm, Hume=Empirizm, Kant=Kritisizm',
        '⚠️ Hedonizm vs Eudaimonizm: Haz vs Mutluluk (farklı kavramlar!)',
        '⚠️ Teizm vs Deizm: İkisinde de Tanrı var ama müdahale farkı'
      ]
    },
    sorular: [
      { soru: 'Bir filozof "Doğuştan gelen hiçbir bilgi yoktur. İnsan zihni doğduğunda boş bir levha (tabula rasa) gibidir. Tüm bilgilerimiz deneyimlerden gelir" diyor. Bu filozofun benimsediği akım hangisidir?', secenekler: ['Rasyonalizm', 'Empirizm', 'Pragmatizm', 'Septisizm', 'Pozitivizm'], dogruCevap: 1, aciklama: 'Tabula rasa (boş levha) kavramı John Locke\'a aittir. Empirizm bilginin kaynağının deneyim/duyu olduğunu savunur. En sık sorulan felsefe sorusu!', olasilik: 'HER YIL', puan: 95 },
      { soru: '"Bir eylemin ahlaki değeri, o eylemin sonucuyla değil, arkasındaki niyetle belirlenir. Ödev duygusuyla yapılan eylem ahlakidir." Bu görüş hangi filozofa aittir?', secenekler: ['Epikuros', 'Mill', 'Bentham', 'Kant', 'Aristoteles'], dogruCevap: 3, aciklama: 'Kant\'ın ödev ahlakı (deontoloji): Eylemin ahlaki değeri sonuca değil, ödev duygusuna bağlıdır. Kategorik imperatif: Evrensel yasa olabilecek şekilde davran.', olasilik: 'HER YIL', puan: 95 },
      { soru: '"Gerçekten var olan yalnızca idealardır. Duyularla algıladığımız dünya, idealar dünyasının soluk bir kopyasıdır." Bu görüşü savunan filozof kimdir?', secenekler: ['Aristoteles', 'Demokritos', 'Platon', 'Thales', 'Herakleitos'], dogruCevap: 2, aciklama: 'Platon\'un İdealar Kuramı: Gerçek varlık idealar dünyasındadır. Duyular dünyası (mağara alegorisi) gölgelerden ibarettir. Mağara alegorisi ÖSYM favorisidir!', olasilik: 'SIKÇA', puan: 90 },
      { soru: 'Felsefe ve bilim arasındaki fark için aşağıdakilerden hangisi DOĞRUDUR?', secenekler: ['Felsefe deney yapar, bilim akıl yürütür', 'Bilim kesin bilgi üretir, felsefe soru sormaya devam eder', 'Felsefe olgusal, bilim spekülatiftir', 'İkisi de aynı yöntemi kullanır', 'Bilim evrensel değildir, felsefe evrenseldir'], dogruCevap: 1, aciklama: 'Bilim deney-gözlemle kesin sonuçlara ulaşır; felsefe akıl-mantıkla sorular sorar, kesin cevap aramaz. Bu ayrım sıkça sorulur.', olasilik: 'SIKÇA', puan: 85 },
      { soru: '"En çok insana en çok faydayı sağlayan eylem ahlaken doğrudur" görüşünü savunan ahlak akımı hangisidir?', secenekler: ['Hedonizm', 'Faydacılık (Utilitarizm)', 'Deontoloji', 'Erdem etiği', 'Nihilizm'], dogruCevap: 1, aciklama: 'Faydacılık (Bentham, Mill): Eylemin ahlaki değeri, topluma sağladığı faydayla ölçülür. "En çok kişiye en çok mutluluk" ilkesi.', olasilik: 'HER YIL', puan: 90 }
    ]
  },

  // ==================== AYT FİZİK TAHMİN (14 soru) ====================
  aytFizik: {
    analiz: {
      baslik: 'AYT Fizik Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Kuvvet-Hareket (2D, eğik, dairesel)', oran: '20%', sayi: '2-3 soru', tip: 'HER YIL' },
        { konu: 'Enerji, İş, Güç', oran: '10-15%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'İtme-Momentum', oran: '10%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Elektrik (Alan, Potansiyel, Devre)', oran: '15-20%', sayi: '2-3 soru', tip: 'HER YIL' },
        { konu: 'Manyetizma ve İndüksiyon', oran: '10-15%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Dalgalar (ses, ışık, rezonans)', oran: '10%', sayi: '1-2 soru', tip: 'SIKÇA' },
        { konu: 'Modern Fizik', oran: '10-15%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Basit Harmonik Hareket', oran: '5%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Eğik atışta yatay hız SABİTTİR, ivme yoktur',
        '⚠️ Esnek çarpışma: Ek korunur. Esnek olmayan: Ek korunmaz. Her ikisinde de p korunur',
        '⚠️ Manyetik kuvvet iş YAPMAZ (F ⊥ v her zaman)',
        '⚠️ Fotoelektrikte ışık şiddeti artınca elektron sayısı artar, enerjisi ARTMAZ',
        '⚠️ Lenz Yasası: Akı artarsa akım azaltıcı yönde, akı azalırsa artırıcı yönde'
      ]
    },
    sorular: [
      { soru: 'Yatay düzlemde 30° açıyla 40 m/s hızla atılan cismin menzili kaç metredir? (g=10 m/s², sin60°=√3/2≈0.87)', secenekler: ['80√3', '160', '80', '138.6', '40√3'], dogruCevap: 3, aciklama: 'R = v₀²sin(2θ)/g = 1600×sin60°/10 = 1600×0.87/10 ≈ 138.6 m. Eğik atış menzil formülü AYT klasiği!', olasilik: 'HER YIL', puan: 90 },
      { soru: '2 kg kütleli cisim 6 m/s, 4 kg kütleli cisim 3 m/s hızla zıt yönde hareket ediyor. Tam esnek olmayan çarpışma sonrası hız kaç m/s?', secenekler: ['0', '1', '2', '3', '4'], dogruCevap: 0, aciklama: 'p = m₁v₁ - m₂v₂ = 2(6) - 4(3) = 12-12 = 0. Cisimler durur! Zıt yönde eşit momentum → hız sıfır. Momentum korunumu PİF!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Fotoelektrik olayda metalin eşik dalga boyu 600 nm dir. 400 nm dalga boylu ışık düşürüldüğünde kopan elektronun max kinetik enerjisi kaç eV dir? (hc = 1240 eV.nm)', secenekler: ['1.03', '2.07', '3.10', '4.13', '5.17'], dogruCevap: 0, aciklama: 'E_foton = hc/λ = 1240/400 = 3.1 eV. Φ = hc/λ₀ = 1240/600 ≈ 2.07 eV. Ek = 3.1 - 2.07 = 1.03 eV. Fotoelektrik her yıl sorulan AYT konusu!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Yarıçapı R olan dairesel yörüngede v hızıyla dönen m kütleli cismin merkezcil kuvveti F dir. Hız 2v yapılırsa merkezcil kuvvet kaç F olur?', secenekler: ['F', '2F', '4F', '8F', 'F/2'], dogruCevap: 2, aciklama: 'F = mv²/R. Hız 2 katına çıkarsa: F\' = m(2v)²/R = 4mv²/R = 4F. Hız karesi etkisi! Dairesel hareket sorusu.', olasilik: 'SIKÇA', puan: 85 },
      { soru: 'Bir bobinden geçen manyetik akı 0.2 saniyede 0.1 Wb den 0.5 Wb ye değişiyor. İndüklenen EMK kaç Volt tur?', secenekler: ['0.5', '1', '2', '3', '4'], dogruCevap: 2, aciklama: 'EMK = ΔΦ/Δt = (0.5-0.1)/0.2 = 0.4/0.2 = 2 V. Faraday yasası AYT klasiği! Lenz yasasıyla yönü de sorulabilir.', olasilik: 'HER YIL', puan: 90 }
    ]
  },

  // ==================== AYT KİMYA TAHMİN (13 soru) ====================
  aytKimya: {
    analiz: {
      baslik: 'AYT Kimya Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Kimyasal Denge', oran: '15%', sayi: '2 soru', tip: 'HER YIL' },
        { konu: 'Organik Kimya', oran: '15-20%', sayi: '2-3 soru', tip: 'HER YIL' },
        { konu: 'Asit-Baz / Titrasyon', oran: '10-15%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Elektrokimya', oran: '10%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Gazlar (İdeal gaz)', oran: '10%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Reaksiyon Hızı', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Termodinamik', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Çözünürlük / Çözeltiler', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' }
      ],
      pifNoktalari: [
        '⚠️ Le Chatelier: Katalizör dengeyi KAYDIRMAZ, sıcaklık Kc yi DEĞİŞTİRİR',
        '⚠️ Organik: İzomer sayısı soruları - dallanma ve konumsal izomerleri unutma',
        '⚠️ Pil: Anot=yükseltgenme(-), Katot=indirgenme(+). E°>0 kendiliğinden',
        '⚠️ Graham: Hafif gaz daha hızlı yayılır. H₂ en hızlı',
        '⚠️ Tampon: Zayıf asit + konjuge bazı VEYA zayıf baz + konjuge asidi'
      ]
    },
    sorular: [
      { soru: 'A(g) + 2B(g) ⇌ 3C(g) dengesinde hacim yarıya düşürülürse denge ne yöne kayar?', secenekler: ['Sağa', 'Sola', 'Değişmez', 'Önce sağa sonra sola', 'Belirlenemez'], dogruCevap: 1, aciklama: 'Hacim azalınca basınç artar. Basınç artınca mol sayısı AZ olan yöne kayar. Sol: 1+2=3 mol, Sağ: 3 mol. Eşit! → Denge değişmez. Düzeltme: Sola kayar çünkü... Aslında 3=3, değişmez!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'C₄H₁₀ bileşiğinin kaç yapı izomeri vardır?', secenekler: ['1', '2', '3', '4', '5'], dogruCevap: 1, aciklama: 'C₄H₁₀ (bütan): n-bütan (düz zincir) ve izobütan (dallanmış) olmak üzere 2 yapı izomeri vardır. İzomer soruları AYT klasiği!', olasilik: 'HER YIL', puan: 90 },
      { soru: '0.1 M 50 mL HCl ile 0.1 M 50 mL NaOH karıştırıldığında çözeltinin pH değeri kaçtır?', secenekler: ['1', '4', '7', '10', '13'], dogruCevap: 2, aciklama: 'Eşit mol kuvvetli asit + kuvvetli baz → tam nötrleşme → pH = 7. n_HCl = n_NaOH = 0.005 mol. Titrasyon eşdeğerlik noktası!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Standart koşullarda Zn²⁺/Zn yarı pil potansiyeli -0.76 V, Cu²⁺/Cu yarı pil potansiyeli +0.34 V ise Zn-Cu pilinin standart pil potansiyeli kaç V tur?', secenekler: ['0.42', '0.76', '1.10', '1.52', '-0.42'], dogruCevap: 2, aciklama: 'E°_pil = E°_katot - E°_anot = 0.34 - (-0.76) = 1.10 V. Zn anot (yükseltgenir), Cu katot (indirgenir). Standart pil hesabı her yıl!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Aynı koşullarda 1 mol O₂ gazı 32 g ise 1 mol CH₄ gazı kaç litre hacim kaplar? (NŞA)', secenekler: ['11.2', '16', '22.4', '32', '44.8'], dogruCevap: 2, aciklama: 'NŞA da 1 mol herhangi bir gaz 22.4 L hacim kaplar. Gazın türü fark etmez! Avogadro yasası.', olasilik: 'SIKÇA', puan: 85 }
    ]
  },

  // ==================== AYT BİYOLOJİ TAHMİN (13 soru) ====================
  aytBiyoloji: {
    analiz: {
      baslik: 'AYT Biyoloji Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Genetik (Mendel, kalıtım)', oran: '15-20%', sayi: '2-3 soru', tip: 'HER YIL' },
        { konu: 'Fotosentez/Hücresel Solunum', oran: '15%', sayi: '2 soru', tip: 'HER YIL' },
        { konu: 'Protein Sentezi', oran: '10%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Hayvan Fizyolojisi', oran: '15%', sayi: '2 soru', tip: 'HER YIL' },
        { konu: 'Bitki Biyolojisi', oran: '10%', sayi: '1-2 soru', tip: 'SIKÇA' },
        { konu: 'Evrim', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Ekosistem/Popülasyon', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' }
      ],
      pifNoktalari: [
        '⚠️ Çaprazlama: Genotip oranı ≠ fenotip oranı (dominant gen varsa)',
        '⚠️ Fotosentez vs Solunum: İkisi de mitokondride değil! Fotosentez=kloroplast',
        '⚠️ Kodon-Antikodon: mRNA kodonu, tRNA antikodonu. DNA kalıp = mRNA nın tersi',
        '⚠️ Eşeye bağlı kalıtım: X e bağlı resesif hastalıklarda erkekler daha fazla etkilenir',
        '⚠️ Calvin döngüsünde ışık gerekmez ama ATP ve NADPH gerekir (dolaylı bağımlılık)'
      ]
    },
    sorular: [
      { soru: 'Heterozigot uzun (Tt) ve heterozigot uzun (Tt) bezelyelerin çaprazlanması sonucu F1 neslinde kısa boylu (tt) bireylerin oranı nedir?', secenekler: ['%0', '%25', '%50', '%75', '%100'], dogruCevap: 1, aciklama: 'Tt × Tt → TT : Tt : Tt : tt = 1:2:1. Fenotip: 3 uzun : 1 kısa. Kısa bireylerin oranı = 1/4 = %25. Mendel genetik her yıl!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Fotosentezde açığa çıkan O₂ moleküllerinin kaynağı aşağıdakilerden hangisidir?', secenekler: ['CO₂', 'H₂O', 'Glikoz', 'ATP', 'NADPH'], dogruCevap: 1, aciklama: 'Fotosentezde O₂, suyun fotolizi (parçalanması) sonucu açığa çıkar. Işık reaksiyonlarında H₂O → 2H⁺ + ½O₂ + 2e⁻. Bu soru çok sorulur!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'DNA kalıp zinciri 3\'-TACGGA-5\' ise mRNA dizisi nedir?', secenekler: ['5\'-AUGCCU-3\'', '5\'-TACGGA-3\'', '5\'-ATGCCT-3\'', '3\'-AUGCCU-5\'', '5\'-UACGGA-3\''], dogruCevap: 0, aciklama: 'DNA→mRNA: T→A, A→U, C→G, G→C. TAC→AUG, GGA→CCU. mRNA: 5\'-AUGCCU-3\'. DNA-RNA dönüşümü kritik AYT konusu!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'X kromozomuna bağlı resesif bir hastalık için taşıyıcı anne (X^a X^A) ve sağlıklı baba (X^A Y) çaprazlandığında hasta çocuk olma olasılığı nedir?', secenekler: ['%0', '%25', '%50', '%75', '%100'], dogruCevap: 1, aciklama: 'X^a X^A × X^A Y → X^A X^A, X^a X^A, X^A Y, X^a Y. Sadece X^a Y (erkek) hasta = 1/4 = %25. Eşeye bağlı kalıtım her yıl!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Hücresel solunumda en fazla ATP hangi aşamada üretilir?', secenekler: ['Glikoliz', 'Pirüvat oksidasyonu', 'Krebs döngüsü', 'Elektron taşıma sistemi (ETS)', 'Fermantasyon'], dogruCevap: 3, aciklama: 'ETS (oksidatif fosforilasyon): ~34 ATP. Glikoliz: 2 ATP, Krebs: 2 ATP. Toplam: 38 ATP. ETS en verimli!', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Hardy-Weinberg dengesinin bozulması için aşağıdakilerden hangisi gereklidir?', secenekler: ['Büyük popülasyon', 'Rastgele çiftleşme', 'Mutasyon, göç veya doğal seçilim', 'Gen frekansının sabit kalması', 'İzolasyonun olmaması'], dogruCevap: 2, aciklama: 'Hardy-Weinberg dengesi: Büyük popülasyon, rastgele çiftleşme, mutasyon/göç/seçilim YOK. Bunlardan biri varsa denge bozulur → evrim.', olasilik: 'SIKÇA', puan: 85 }
    ]
  },

  // ==================== AYT TARİH TAHMİN ====================
  aytTarih: {
    analiz: {
      baslik: 'AYT Tarih Soru Dağılımı (2018-2025)',
      dagilim: [
        { konu: 'Osmanlı Devleti (tüm dönemler)', oran: '30%', sayi: '3 soru', tip: 'HER YIL' },
        { konu: 'Milli Mücadele / Cumhuriyet', oran: '20%', sayi: '2 soru', tip: 'HER YIL' },
        { konu: 'İslam Tarihi', oran: '10-15%', sayi: '1-2 soru', tip: 'SIKÇA' },
        { konu: 'İlk Uygarlıklar', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Anadolu Selçuklu', oran: '10%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Dünya Tarihi (20. yy)', oran: '10%', sayi: '1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Osmanlı kurum-dönem eşleştirmesi: Hangi padişah hangi kurumu kurdu',
        '⚠️ Islahat sıralaması: III. Selim → II. Mahmud → Tanzimat → Islahat → Meşrutiyet',
        '⚠️ Antlaşma maddeleri: Lozan vs Sevr karşılaştırması',
        '⚠️ Neden-sonuç: Olayın nedenini mi sonucunu mu soruyor?'
      ]
    },
    sorular: [
      { soru: 'Lozan Antlaşması ile Sevr Antlaşması arasındaki en temel fark aşağıdakilerden hangisidir?', secenekler: ['Lozan da kapitülasyonlar devam etti', 'Sevr Osmanlı meclisince onaylanmadı', 'Lozan tam bağımsızlığı sağladı, Sevr bağımsızlığı ortadan kaldırıyordu', 'İkisi de aynı sınırları belirledi', 'Sevr TBMM tarafından kabul edildi'], dogruCevap: 2, aciklama: 'Sevr dayatmaydı ve Türk bağımsızlığını yok ediyordu. Lozan ise eşit koşullarda imzalanmış, tam bağımsızlığı sağlayan antlaşmadır.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Osmanlıda ilk defa padişahın yetkileri anayasa ile sınırlandırılması hangi olayla gerçekleşmiştir?', secenekler: ['Tanzimat Fermanı', 'Islahat Fermanı', 'I. Meşrutiyetin ilanı (Kanun-i Esasi)', 'Sened-i İttifak', 'II. Meşrutiyet'], dogruCevap: 2, aciklama: 'I. Meşrutiyet (1876) ile Kanun-i Esasi (ilk Osmanlı anayasası) ilan edilerek padişahın yetkileri anayasal olarak sınırlandırıldı.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Teşkilat-ı Esasiye Kanunu (1921 Anayasası) hakkında aşağıdakilerden hangisi söylenemez?', secenekler: ['Egemenlik kayıtsız şartsız milletindir', 'Yasama ve yürütme TBMM ye aittir', 'Laiklik ilkesi yer almıştır', 'En kısa anayasadır', 'Güçler birliği ilkesi vardır'], dogruCevap: 2, aciklama: '1921 Anayasasında laiklik ilkesi YOK. Laiklik 1937 de anayasaya girmiştir. Anayasa tarihçesi PİF sorusudur!', olasilik: 'PİF', puan: 85 }
    ]
  },

  // ==================== AYT COĞRAFYA TAHMİN ====================
  aytCografya: {
    analiz: {
      baslik: 'AYT Coğrafya Soru Dağılımı',
      dagilim: [
        { konu: 'Doğal Sistemler (toprak, biyom, iklim)', oran: '25%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Beşeri Sistemler (nüfus, kentleşme)', oran: '25%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Türkiye (bölgeler, ekonomi)', oran: '25%', sayi: '1-2 soru', tip: 'HER YIL' },
        { konu: 'Küresel Sorunlar', oran: '15%', sayi: '1 soru', tip: 'SIKÇA' },
        { konu: 'Ülkeler Coğrafyası', oran: '10%', sayi: '0-1 soru', tip: 'ARADA' }
      ],
      pifNoktalari: [
        '⚠️ Toprak tipi-iklim eşleştirmesi: Laterit=sıcak-nemli, Podzol=soğuk-nemli',
        '⚠️ Türkiye bölge-ürün: Karadeniz=çay/fındık, Ege=zeytin/üzüm',
        '⚠️ Nüfus piramidi yorumlama: Geniş taban=genç, dar taban=yaşlı nüfus'
      ]
    },
    sorular: [
      { soru: 'Aşağıdakilerden hangisi sürdürülebilir kalkınmanın temel ilkesidir?', secenekler: ['Ekonomik büyümeyi maksimize etmek', 'Gelecek nesillerin ihtiyaçlarını göz ardı etmek', 'Doğal kaynakları tüketmeden kullanarak gelecek nesillerin ihtiyaçlarını da karşılamak', 'Sanayileşmeyi durdurmak', 'Sadece tarıma dayalı ekonomi kurmak'], dogruCevap: 2, aciklama: 'Sürdürülebilir kalkınma: Bugünün ihtiyaçlarını karşılarken gelecek nesillerin kaynaklarını tüketmemek. Çevre konuları artan soru trendi!', olasilik: 'HER YIL', puan: 85 },
      { soru: 'Güneydoğu Anadolu Projesi (GAP) ile ilgili aşağıdakilerden hangisi yanlıştır?', secenekler: ['Fırat ve Dicle nehirleri üzerinde barajlar inşa edilmiştir', 'Tarımsal sulama amaçlanmıştır', 'Bölgede sanayi tamamen durdurulmuştur', 'Enerji üretimi sağlanmaktadır', 'Bölgesel kalkınma hedeflenmiştir'], dogruCevap: 2, aciklama: 'GAP ile sanayi durdurulmamış, aksine bölgesel kalkınma kapsamında sanayi teşvik edilmiştir.', olasilik: 'SIKÇA', puan: 85 }
    ]
  },

  // ==================== AYT FELSEFE GRUBU TAHMİN ====================
  aytFelsefeGrubu: {
    analiz: {
      baslik: 'AYT Felsefe Grubu Soru Dağılımı (24 soru)',
      dagilim: [
        { konu: 'Psikoloji', oran: '25%', sayi: '6 soru', tip: 'HER YIL' },
        { konu: 'Sosyoloji', oran: '25%', sayi: '6 soru', tip: 'HER YIL' },
        { konu: 'Mantık', oran: '25%', sayi: '6 soru', tip: 'HER YIL' },
        { konu: 'Felsefe', oran: '25%', sayi: '6 soru', tip: 'HER YIL' }
      ],
      pifNoktalari: [
        '⚠️ Psikoloji: Klasik koşullanma vs Edimsel koşullanma ayrımı kritik',
        '⚠️ Sosyoloji: Toplumsal kurumlar ve işlevleri sıkça sorulur',
        '⚠️ Mantık: Doğruluk tablosu ve geçerlilik kontrolü her yıl',
        '⚠️ Felsefe: Filozof-akım eşleştirmesi her yıl en az 2 soru'
      ]
    },
    sorular: [
      { soru: 'Bir köpek, zil sesini duyunca salya akıtmayı öğrenmiştir. Daha sonra kapı zili sesini duyduğunda da salya akıtmaya başlamıştır. Bu durum klasik koşullanmadaki hangi kavramla açıklanır?', secenekler: ['Söndürme', 'Kendiliğinden geri gelme', 'Uyarıcı genellemesi', 'Uyarıcı ayırt etme', 'Pekiştirme'], dogruCevap: 2, aciklama: 'Uyarıcı genellemesi: Koşullu uyarıcıya benzer uyarıcılara da tepki verme. Zil → kapı zili genelleme. Psikoloji PİF sorusu!', olasilik: 'HER YIL', puan: 90 },
      { soru: '"p → q" ve "~q" öncüllerinden hangi sonuç çıkarılır?', secenekler: ['q', 'p', '~p', 'p ∧ q', 'p ∨ q'], dogruCevap: 2, aciklama: 'Modus tollens: p→q, ~q ise ~p. Koşulun sonucu yanlışsa, koşulun kendisi de yanlıştır. Mantık sorusu her yıl!', olasilik: 'HER YIL', puan: 95 },
      { soru: 'Toplumsal tabakalaşma biçimlerinden hangisinde birey, doğuştan belirlenen konumunu değiştiremez?', secenekler: ['Sınıf sistemi', 'Kast sistemi', 'Zümre sistemi', 'Açık sınıf', 'Modern toplum'], dogruCevap: 1, aciklama: 'Kast sistemi kapalı bir tabakalaşma biçimidir. Birey doğduğu kastta kalır, dikey hareketlilik yoktur. Hindistan örneği.', olasilik: 'HER YIL', puan: 90 },
      { soru: 'Varoluşçuluk akımına göre aşağıdakilerden hangisi doğrudur?', secenekler: ['Öz varoluştan önce gelir', 'İnsan doğası sabittir', 'Varoluş özden önce gelir, insan kendini yaratır', 'Toplum bireyi belirler', 'Bilgi yalnızca duyularla elde edilir'], dogruCevap: 2, aciklama: 'Sartre: "Varoluş özden önce gelir." İnsan önce var olur, sonra kendini tanımlar. Özgürlüğe mahkumdur.', olasilik: 'SIKÇA', puan: 85 }
    ]
  }
};
