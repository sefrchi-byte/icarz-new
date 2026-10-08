try{ if((navigator.deviceMemory && navigator.deviceMemory<=4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency<=4)) document.documentElement.classList.add('lite'); }catch(e){}


// ==================== کاتالوگ و مدیریت اختصاصی موتوربانو (MOTORBANO.IR) ====================
const motorBanoProducts = [
  {
    id: 'mb-vespa',
    cat: 'motorbano',
    brand: 'MOTORBANO • BOSCH',
    store: 'نمایندگی رسمی موتوربانو',
    title: 'اسکوتر برقی وسپا پاستلی موتوربانو (Vespa Style Coral)',
    price: 118000000,
    oldPrice: 135000000,
    discount: '۱۳٪ تخفیف',
    inst: '۹,۸۳۰,۰۰۰',
    img: 'images/tiles/motorbano.webp',
    tag: '🛵 پرفروش‌ترین اسکوتر بانوان',
    desc: 'اسکوتر برقی وسپا فانتزی ویژه بانوان با پلتفرم اختصاصی ایتالیا و موتور پرقدرت ۲۰۰۰ وات بوش آلمان، نهایت استایل، وقار و راحتی سواری بدون دود و بدون صدا. مجهز به باتری لیتیومی پرتابل (قابل حمل جهت شارژ در آپارتمان با پریز معمولی)، دنده اتوماتیک بدون نیاز به کلاچ، ترمزهای دیسکی خنک‌شونده هیدرولیک CBS، نمایشگر تمام‌دیجیتال رنگی، محفظه کلاه کاسکت زیر زین و پورت شارژ هوشمند موبایل.',
    mfg: 'کمپانی وسپا موتوربانو / دوجی هلدینگ پارت (مونتاژ استاندارد خط تولید)',
    weight: '۸۴ کیلوگرم (سبک‌وزن و فوق‌العاده چابک برای بانوان)',
    dim: 'طول ۱۷۵ × عرض ۶۸ × ارتفاع ۱۱۰ سانتی‌متر • ارتفاع زین ۷۵ سانتی‌متر',
    material: 'شاسی لوله‌ای فولادی با فلاپ‌های پلی‌کربنات ABS مقاوم به ضربه و رنگ کوره‌ای پاستلی',
    origin: 'پلتفرم مشترک ایتالیا / استاندارد ایمنی و تاییدیه Euro 5',
    prodDate: 'مدل ساخت ۲۰۲۶ با سند دست اول شرکتی و پلاک ملی',
    extra: 'سرعت مجاز ۶۰ کیلومتر • پیمایش ۶۵ کیلومتر با هر بار شارژ • بدون نیاز به تعویض روغن'
  },
  {
    id: 'mb-helmet',
    cat: 'motorbano',
    brand: 'MOTORBANO OE',
    store: 'نمایندگی رسمی موتوربانو',
    title: 'کلاه کاسکت وسپایی شیلددار رترو چرمی موتوربانو',
    price: 2450000,
    oldPrice: 3200000,
    discount: '۲۳٪ تخفیف',
    inst: '۴۹۰,۰۰۰',
    img: 'images/shop/motorbano-helmet.webp',
    tag: '🪖 استاندارد بین‌المللی DOT',
    desc: 'کلاه کاسکت رترو فانتزی چرمی موتوربانو با شیلد دودی ضدخش ضد اشعه UV400، طراحی‌شده منطبق با ارگونومی و آناتومی سر بانوان. دارای فوم فشرده EPS ضربه‌گیر چندچگالی، پدهای داخلی مخملی ضدباکتری و ضدحساسیت قابل شستشو و قفل میکرومتریک ارگونومیک آسان‌بازشو.',
    mfg: 'موتوربانو هلمت دیزاین (تحت لیسانس ECE 22.06 اروپا)',
    weight: '۱.۱۵ کیلوگرم (فوق‌العاده سبک بدون ایجاد خستگی گردن)',
    dim: 'سایز مدیوم (M) و لارج (L) استاندارد بانوان (دور سر ۵۵ تا ۵۹ سانتی‌متر)',
    material: 'پوسته ABS تقویت‌شده با چرم دوزی صنعتی و پوشش ضدباران',
    origin: 'استاندارد ایمنی بین‌المللی DOT آمریکا و ECE اروپا',
    prodDate: 'سری ساخت ۲۰۲۶ با شیلد زاپاس شفاف رایگان',
    extra: 'کانال‌های تهویه هوای ضدتعریق پیشرفته با قابلیت استفاده همزمان با عینک'
  },
  {
    id: 'mb-gloves',
    cat: 'motorbano',
    brand: 'MOTORBANO SPORT',
    store: 'موتوربانو اکسسوری',
    title: 'دستکش و مچ‌بند تنفسی سواری بانوان (Windproof Touchscreen)',
    price: 680000,
    oldPrice: 890000,
    discount: '۲۴٪ تخفیف',
    inst: '۱۷۰,۰۰۰',
    img: 'images/shop/motorbano-gloves.webp',
    tag: '🧤 قابلیت لمس تاچ موبایل',
    desc: 'دستکش حرفه‌ای سواری بانوان موتوربانو مجهز به محافظ‌های پلیمری بند انگشتان و کف دست ضدلغزش با چرم سنتتیک جیر. دارای قابلیت لمس صفحه گوشی در انگشت اشاره و شست بدون نیاز به خارج کردن دستکش، پارچه بادگیر چهارفصل با الیاف تنفسی ضدتعریق.',
    mfg: 'موتوربانو رایدرز گیر (Riders Gear)',
    weight: '۱۸۰ گرم (جفت دستکش کامل)',
    dim: 'سایز فیت اسمال و مدیوم مناسب دستان ظریف بانوان',
    material: 'ترکیب نئوپرن، پارچه تنفسی مش سه‌بعدی و محافظ مفاصل TPU',
    origin: 'طراحی تخصصی بانوان موتوربانو / استاندارد CE ایمنی سواری',
    prodDate: 'تولید ۲۰۲۶ با بست مچی چسبی قابل تنظیم',
    extra: 'سیلیکون ضدلغزش چسبنده به گریپ فرمان و اهرم ترمز'
  },
  {
    id: 'mb-jacket',
    cat: 'motorbano',
    brand: 'MOTORBANO WEAR',
    store: 'موتوربانو استایل',
    title: 'کاپشن و بارانی کژوال ضدآب شبرنگ‌دار بانوان موتوربانو',
    price: 1850000,
    oldPrice: 2400000,
    discount: '۲۳٪ تخفیف',
    inst: '۳۷۰,۰۰۰',
    img: 'images/shop/motorbano-jacket.webp',
    tag: '🧥 صددرصد ضدباد و ضدباران',
    desc: 'کاپشن استایلیش کژوال سواری موتوربانو با برش اختصاصی زنانه و پارچه سه‌لایه گورتکس تنفسی صددرصد ضدآب و ضدباد. دارای محافظ‌های فومی انعطاف‌پذیر CE در نواحی آرنج و شانه، نوارهای شبرنگ ۳M با دید ۳۶۰ درجه در شب و جیب‌های پنهان ضدآب.',
    mfg: 'موتوربانو تکستایل (MotorBano Wear)',
    weight: '۸۵۰ گرم',
    dim: 'قد متوسط تا بالای زانو با کمر کشی قابل تنظیم',
    material: 'پارچه گورتکس مقاوم به پارگی با آستر مش تنفسی ضدعرق',
    origin: 'ایران / متریال وارداتی درجه یک ضدآب',
    prodDate: 'طراحی زمستان و بهار ۲۰۲۶',
    extra: 'کلاه پنهان‌شونده در یقه با زیپ‌های آب‌بندی‌شده YKK ضدآب'
  },
  {
    id: 'mb-lock',
    cat: 'motorbano',
    brand: 'MOTORBANO SECURE',
    store: 'موتوربانو سکیوریتی',
    title: 'قفل دیسک هوشمند آژیردار ۱۱۰ دسی‌بل موتوربانو',
    price: 920000,
    oldPrice: 1200000,
    discount: '۲۳٪ تخفیف',
    inst: '۲۳۰,۰۰۰',
    img: 'images/shop/motorbano-lock.webp',
    tag: '🔒 آژیر حساس به تکان و حرکت',
    desc: 'قفل دیسک ترمز هوشمند مجهز به سنسور شوک لرزشی و آژیر پرقدرت ۱۱۰ دسی‌بل. به محض کوچک‌ترین لمس یا جابجایی اسکوتر، ابتدا بوق هشدار داده و در صورت تداوم، آژیر ممتد ضدسرقت پخش می‌کند. دارای کابل یادآور فنری فلورسنت و کلیدهای برنجی ضدکپی.',
    mfg: 'موتوربانو سکیور تک (Security Tech)',
    weight: '۴۹۰ گرم',
    dim: 'پین فولادی سخت‌کاری‌شده ۷ میلی‌متری متناسب با کلیه دیسک‌ها',
    material: 'بدنه یکپارچه آلیاژ روی و فولاد ضدبرش و ضداسید',
    origin: 'استاندارد بین‌المللی ضدسرقت IP65 کامپکت ضدآب',
    prodDate: 'تولید ۲۰۲۶ همراه با باتری‌های یدکی آلکالاین',
    extra: 'ضدآب، ضدزنگ و فعال‌سازی خودکار سنسور پس از قفل شدن'
  }
];


// ==================== خودروهای صفر کیلومتر ایرانی صفرچی: مدل مینیمال و واقع‌گرایانه ====================

const sefrechiCarsList = [
  {
    id: 'car-tara-v4',
    name: 'تارا اتوماتیک V4 LX صفر',
    brand: 'ikco',
    brandName: 'ایران خودرو',
    year: '۱۴۰۳',
    specsSummary: 'گیربکس ۶ دنده DAE • موتور TU5P ارتقایافته • گارانتی ۳ ساله',
    transmission: '۶ سرعته اتوماتیک DAE (فناوری آیسین)',
    engine: 'TU5P ارتقایافته (۱۱۳ اسب بخار - ۱۴۴ نیوتن‌متر)',
    fuelConsumption: '۷.۰ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۹۰ کیلومتر بر ساعت',
    acceleration: '۱۲.۵ ثانیه',
    colors: ['سفید فابریک', 'مشکی آبنوس', 'خاکستری متالیک'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی فعال کارخانه',
    delivery: 'تحویل ۲۴ ساعته با خودروبر کفی درب منزل',
    cashPrice: 945000000,
    cashPriceFmt: '۹۴۵,۰۰۰,۰۰۰',
    downPayment: 450000000,
    downPaymentFmt: '۴۵۰,۰۰۰,۰۰۰',
    monthlyInstallment: 26500000,
    monthlyInstallmentFmt: '۲۶,۵۰۰,۰۰۰',
    img: 'images/shop/sefrechi-tara-real.webp?v=unified_showroom_v4.0',
    options: [
      'سنسور پا بازکننده درب صندوق عقب (Kick Sensor)',
      'استارت دکمه‌ای و سیستم ورود بدون کلید (PEPS)',
      'گرمکن صندلی‌های جلو در ۳ سطح حرارتی',
      'سانروف برقی دوحالته با پرده محافظ ضد تابش',
      'سیستم کنترل پایداری الکترونیکی (ESC) و کمکی سربالایی (HSA)',
      'فرمان برقی D-Cut با کنترل‌های صوتی و کروز کنترل',
      'نمایشگر لمسی ۷ اینچی با ناوبری و دوربین دنده عقب',
      'آینه‌های جانبی تاشو برقی با راهنمای LED و چراغ ولکام'
    ],
    safety: [
      '۴ کیسه هوای ایمنی (راننده، سرنشین و جانبی)',
      'ترمز ۴ چرخ دیسکی مجهز به ABS و EBD',
      'سیستم پایش فشار باد تایرها (TPMS)',
      'اخطار ترمز اضطراری (ESS)'
    ],
    inspectionSummary: {
      bodyScore: '۱۰۰٪ فاقد رنگ و خط و خش (پلمپ کارخانه)',
      chassisScore: 'شاسی‌های جلو و عقب کاملاً سالم و بدون فشار',
      technicalScore: 'صفر کیلومتر واقعی تست دیاگ تایید شده',
      certCode: 'ICARZ-CERT-1403-99824'
    },
    description: 'تارا اتوماتیک نسخه V4 LX فول‌ترین سدان ملی ایران‌خودرو است که مجهز به گیربکس ۶ سرعته پیشرفته DAE با فناوری آیسین، صندلی برقی، شیشه‌های سولار و چراغ ولکام می‌باشد. خودرو تحویل روز با برگه کارشناسی ۵ ستاره آی‌کارز تقدیم خریدار می‌شود.'
  },
  {
    id: 'car-shahin-g',
    name: 'شاهین اتوماتیک G صفر CVT',
    brand: 'saipa',
    brandName: 'سایپا',
    year: '۱۴۰۳',
    specsSummary: 'گیربکس CVT تیپ‌ترونیک • موتور توربو M15-T • سانروف برقی',
    transmission: 'اتوماتیک CVT با تیپ‌ترونیک ۷ سرعته',
    engine: 'توربوشارژر M15-T (۱۱۰ اسب بخار - ۱۷۸ نیوتن‌متر)',
    fuelConsumption: '۷.۲ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۹۰ کیلومتر بر ساعت',
    acceleration: '۱۳.۰ ثانیه',
    colors: ['نقره‌ای متالیک', 'سفید فابریک', 'مشکی متالیک'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی رسمی سایپا',
    delivery: 'تحویل ۲۴ ساعته با خودروبر درب منزل',
    cashPrice: 835000000,
    cashPriceFmt: '۸۳۵,۰۰۰,۰۰۰',
    downPayment: 390000000,
    downPaymentFmt: '۳۹۰,۰۰۰,۰۰۰',
    monthlyInstallment: 23800000,
    monthlyInstallmentFmt: '۲۳,۸۰۰,۰۰۰',
    img: 'images/shop/sefrechi-shahin-real.webp?v=unified_showroom_v4.0',
    options: [
      'سانروف برقی دوحالته با آنتی‌ترپ',
      'کی‌لس استارت و دکمه ورود روی دستگیره‌ها',
      'کروز کنترل با لیمیتر سرعت',
      'سیستم کنترل پایداری الکترونیکی ESP و کنترل کشش TCS',
      'دوربین دید عقب با خطوط راهنمای دینامیک',
      'فرمان برقی حساس به سرعت',
      'نمایشگر لمسی ۱۰ اینچی با اتصال بلوتوث'
    ],
    safety: [
      '۲ کیسه هوای ایمنی سرنشینان جلو',
      'ترمز دیسکی ۴ چرخ مجهز به ABS و EBD',
      'سیستم پایش باد تایرها TPMS',
      'بدنه تقویت‌شده با فولاد با مقاومت بالا'
    ],
    inspectionSummary: {
      bodyScore: 'بدون خط و خش و فاقد هرگونه رنگ‌شدگی',
      chassisScore: 'شاسی‌های جلو و عقب کاملاً پلمپ',
      technicalScore: 'موتور توربو و گیربکس CVT در سلامت کامل',
      certCode: 'ICARZ-CERT-1403-88319'
    },
    description: 'سدان جادار و ایمن سایپا مجهز به موتور توربوشارژ پرگشتاور، سواری نرم، نمایشگر لمسی، استارت دکمه‌ای و آپشن‌های کاربردی استاندارد اروپایی.'
  },
  {
    id: 'car-dena-turbo',
    name: 'دنا پلاس توربو اتوماتیک آپشنال',
    brand: 'ikco',
    brandName: 'ایران خودرو',
    year: '۱۴۰۳',
    specsSummary: 'موتور ۱۵۰ اسب توربو • گیربکس ۶ دنده • صندلی برقی ۸ جهته',
    transmission: '۶ سرعته خودکار با حالت اسپرت و برفی',
    engine: 'EF7 TC توربوشارژ (۱۵۰ اسب بخار - ۲۱۵ نیوتن‌متر)',
    fuelConsumption: '۷.۹ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۲۰۵ کیلومتر بر ساعت',
    acceleration: '۹.۵ ثانیه',
    colors: ['خاکستری تیتانیوم', 'سفید فابریک', 'مشکی آبنوس'],
    warranty: '۳ سال گارانتی + کارت طلایی تک ستاره پلاس',
    delivery: 'تحویل فوری ۲۴ ساعته با خودروبر کفی',
    cashPrice: 985000000,
    cashPriceFmt: '۹۸۵,۰۰۰,۰۰۰',
    downPayment: 490000000,
    downPaymentFmt: '۴۹۰,۰۰۰,۰۰۰',
    monthlyInstallment: 27200000,
    monthlyInstallmentFmt: '۲۷,۲۰۰,۰۰۰',
    img: 'images/shop/sefrechi-dena-real.webp?v=unified_showroom_v4.0',
    options: [
      'فرمان برقی D-Cut چرمی با کلیدهای کنترلی',
      'سنسور باران و سنسور نور خودکار (Auto Light)',
      'صندلی‌های جلو ۸ جهته تمام برقی',
      'سانروف برقی دوحالته',
      'سیستم تهویه مطبوع اتوماتیک با دریچه عقب',
      'نمایشگر لمسی با رهیاب ماهواره‌ای'
    ],
    safety: [
      '۴ کیسه هوای ایمنی راننده، سرنشین و جانبی',
      'سیستم کنترل پایداری ESC و کنترل کشش TCS',
      'ترمز دیسکی ۴ چرخ مجهز به سیستم‌های کمکی'
    ],
    inspectionSummary: {
      bodyScore: 'فاقد رنگ فابریک کارخانه',
      chassisScore: 'شاسی‌ها پلمپ با موم‌کشی فابریک',
      technicalScore: 'تست بوست توربوشارژر و دیاگ تایید شده',
      certCode: 'ICARZ-CERT-1403-99710'
    },
    description: 'قدرتمندترین سدان توربوشارژ تولید داخل با شتاب خیره‌کننده، صندلی‌های ارگونومیک، تریم دکوراتیو لوکس، سیستم تهویه اتوماتیک و عایق‌بندی مدرن صوتی.'
  },
  {
    id: 'car-207-pano',
    name: 'پژو ۲۰۷i پانوراما اتوماتیک',
    brand: 'ikco',
    brandName: 'ایران خودرو',
    year: '۱۴۰۳',
    specsSummary: 'سقف شیشه‌ای تمام پانوراما • گیربکس ۶ دنده • کنترل پایداری ESC',
    transmission: '۶ سرعته خودکار تیپ‌ترونیک',
    engine: 'TU5P ارتقایافته مجهز به CVVT (۱۱۳ اسب)',
    fuelConsumption: '۶.۸ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۹۰ کیلومتر بر ساعت',
    acceleration: '۱۱.۵ ثانیه',
    colors: ['سفید فابریک', 'مشکی آبنوس', 'قرمز متالیک'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی طلایی',
    delivery: 'تحویل ۲۴ ساعته درب منزل',
    cashPrice: 890000000,
    cashPriceFmt: '۸۹۰,۰۰۰,۰۰۰',
    downPayment: 420000000,
    downPaymentFmt: '۴۲۰,۰۰۰,۰۰۰',
    monthlyInstallment: 24900000,
    monthlyInstallmentFmt: '۲۴,۹۰۰,۰۰۰',
    img: 'images/shop/sefrechi-207-real.webp?v=unified_showroom_v4.0',
    options: [
      'سقف شیشه‌ای تمام پانوراما فابریک با سایه‌بان برقی',
      'سیستم کنترل پایداری الکترونیکی ESC',
      'فرمان برقی نرم و حساس به سرعت',
      'سیستم پایش باد تایرها TPMS',
      'پوزیشن لامپ، دی‌لایت و آینه‌های تاشو برقی'
    ],
    safety: [
      '۲ کیسه هوا، ترمزهای دیسکی ۴ چرخ با ABS و EBD',
      'استاندارد ایمنی حفاظت از عابر پیاده'
    ],
    inspectionSummary: {
      bodyScore: 'سقف شیشه‌ای و بدنه کاملاً فابریک و بدون خط',
      chassisScore: 'شاسی جلو و عقب سالم و پلمپ',
      technicalScore: 'عملکرد گیربکس و پیشرانه تایید شده',
      certCode: 'ICARZ-CERT-1403-77490'
    },
    description: 'محبوب‌ترین هاچ‌بک جوان‌پسند ایران با سقف شیشه‌ای تمام پانوراما، پیشرانه بهبودیافته کم‌مصرف و گیربکس ۶ سرعته هماهنگ.'
  },
  {
    id: 'car-quick-gxr',
    name: 'کوییک GXR-L صفر دو رنگ',
    brand: 'parskhodro',
    brandName: 'پارس خودرو / سایپا',
    year: '۱۴۰۳',
    specsSummary: 'تریم دو رنگ اسپرت • رینگ آلومینیوم • ترمز کنترل پایداری ESC',
    transmission: '۵ سرعته دستی فابریک',
    engine: 'M15 ارتقایافته کم‌مصرف (۵.۸ لیتر در ۱۰۰ کیلومتر)',
    fuelConsumption: '۵.۸ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۷۵ کیلومتر بر ساعت',
    acceleration: '۱۳.۵ ثانیه',
    colors: ['سفید سقف قرمز', 'سفید سقف مشکی'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی رسمی',
    delivery: 'تحویل ۲۴ ساعته با خودروبر کفی',
    cashPrice: 435000000,
    cashPriceFmt: '۴۳۵,۰۰۰,۰۰۰',
    downPayment: 195000000,
    downPaymentFmt: '۱۹۵,۰۰۰,۰۰۰',
    monthlyInstallment: 12800000,
    monthlyInstallmentFmt: '۱۲,۸۰۰,۰۰۰',
    img: 'images/shop/sefrechi-quick-real.webp?v=unified_showroom_v4.0',
    options: [
      'رینگ آلومینیومی اسپرت دو رنگ تراش‌خورده',
      'سیستم کنترل پایداری الکترونیکی ESC',
      'سنسور پارک و هشدار موانع عقب',
      'فرمان D-Cut با کنترل‌های مالتی‌مدیا',
      'شیشه‌های دودی عقب و روف‌رک فابریک'
    ],
    safety: [
      '۲ کیسه هوا، ترمز ABS و EBD با کمکی ترمز BA'
    ],
    inspectionSummary: {
      bodyScore: 'رنگ‌آمیزی دو رنگ فابریک کوره پارس‌خودرو',
      chassisScore: 'شاسی‌ها کاملاً سالم و پلمپ کارخانه',
      technicalScore: 'موتور و سیستم تعلیق در سلامت کامل',
      certCode: 'ICARZ-CERT-1403-55102'
    },
    description: 'هاچ‌بک کراس اقتصادی و پرفروش پارس خودرو با تریم دورنگ اسپرت، استهلاک و مصرف سوخت بسیار پایین و پشتیبانی قطعات در سراسر کشور.'
  },
  {
    id: 'car-soren-ef7',
    name: 'سورن پلاس دوگانه‌سوز موتور EF7',
    brand: 'ikco',
    brandName: 'ایران خودرو',
    year: '۱۴۰۳',
    specsSummary: 'مخزن گاز ۱۰۰ لیتری فابریک • موتور EF7 • کروز کنترل فابریک',
    transmission: '۵ دنده دستی بهینه‌شده',
    engine: 'EF7 پایه گازسوز (۱۰۰ اسب در گاز - ۱۱۵ اسب در بنزین)',
    fuelConsumption: '۷.۲ لیتر / گاز اقتصادی',
    topSpeed: '۱۸۵ کیلومتر بر ساعت',
    acceleration: '۱۲.۵ ثانیه',
    colors: ['سفید فابریک', 'مشکی متالیک'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی ایران خودرو',
    delivery: 'تحویل ۲۴ ساعته با خودروبر درب منزل',
    cashPrice: 750000000,
    cashPriceFmt: '۷۵۰,۰۰۰,۰۰۰',
    downPayment: 340000000,
    downPaymentFmt: '۳۴۰,۰۰۰,۰۰۰',
    monthlyInstallment: 21500000,
    monthlyInstallmentFmt: '۲۱,۵۰۰,۰۰۰',
    img: 'images/shop/sefrechi-soren-real.webp?v=unified_showroom_v4.0',
    options: [
      'مخزن گاز بزرگ ۱۰۰ لیتری با پیمایش بیش از ۳۰۰ کیلومتر',
      'سیستم کنترل پایداری ESC',
      'کروز کنترل فابریک روی فرمان',
      'نمایشگر لمسی مالتی‌مدیا با دوربین دید عقب',
      'فرمان هیدرولیک ارتقایافته با دکمه‌های کنترلی'
    ],
    safety: [
      '۲ ایربگ، ترمز ABS و EBD، استاندارد ۸۵گانه ملی'
    ],
    inspectionSummary: {
      bodyScore: 'فاقد هرگونه رنگ‌شدگی و خط و خش',
      chassisScore: 'شاسی‌ها پلمپ فابریک کارخانه',
      technicalScore: 'سیستم گازسوز و رگلاتور فابریک و تایید شده',
      certCode: 'ICARZ-CERT-1403-66281'
    },
    description: 'سدان خانوادگی و باوقار ایران خودرو با موتور قدرتمند EF7، مخزن گاز فابریک اقتصادی، صندوق بار جادار و سواری فوق‌العاده نرم در مسافرت‌ها.'
  },
  {
    id: 'car-pride-151-gx',
    name: 'سایپا ۱۵۱ GX ارتقایافته صفر',
    brand: 'saipa',
    brandName: 'سایپا',
    year: '۱۴۰۳',
    specsSummary: 'پراید وانت GX مجهز به لاینر پاششی • دی‌لایت استاندارد ۸۵ گانه • فرمان هیدرولیک',
    transmission: '۵ سرعته دستی بهینه‌شده',
    engine: 'M13 انژکتوری یورو ۵ (۷۱ اسب بخار - ۱۰۸ نیوتن‌متر)',
    fuelConsumption: '۶.۶ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۶۰ کیلومتر بر ساعت',
    acceleration: '۱۴.۵ ثانیه',
    colors: ['سفید فابریک'],
    warranty: '۲ سال یا ۴۰,۰۰۰ کیلومتر گارانتی فعال سایپا',
    delivery: 'تحویل ۲۴ ساعته با خودروبر کفی درب محل',
    cashPrice: 345000000,
    cashPriceFmt: '۳۴۵,۰۰۰,۰۰۰',
    downPayment: 170000000,
    downPaymentFmt: '۱۷۰,۰۰۰,۰۰۰',
    monthlyInstallment: 9800000,
    monthlyInstallmentFmt: '۹,۸۰۰,۰۰۰',
    img: 'images/shop/sefrechi-pride151-real.webp?v=unified_showroom_v4.0',
    options: [
      'کفی بار لاینر پاششی فابریک کارخانه ضدخش و ضدزنگ',
      'چراغ روشنایی روز (Daylight) با استاندارد ۸۵ گانه',
      'سیستم پایش لحظه‌ای باد تایرها (TPMS)',
      'سیستم تهویه مطبوع کولر و بخاری قدرتمند',
      'فرمان هیدرولیک نرم شهری و قفل مرکزی',
      'چراغ‌های مه‌شکن جلو و عقب با کلید اختصاصی'
    ],
    safety: [
      '۲ کیسه هوای ایمنی راننده و سرنشین',
      'ترمز دیسکی چرخ‌های جلو با سیستم‌های ABS و EBD',
      'شاسی تقویت‌شده دوبل باربری فابریک',
      'سیستم ضدسرقت پیشرفته ایموبلایزر'
    ],
    inspectionSummary: {
      bodyScore: '۱۰۰٪ فاقد رنگ و خط و خش (پلمپ کارخانه)',
      chassisScore: 'شاسی تقویت‌شده دوبل باربری کاملاً سالم و بدون فشار',
      technicalScore: 'صفر کیلومتر واقعی تایید شده با دستگاه دیاگ',
      certCode: 'ICARZ-CERT-1403-88741'
    },
    description: 'سایپا ۱۵۱ نسخه GX کامل‌ترین و جدیدترین مدل پراید وانت است که به لاینر فابریک پاششی در قسمت بار، دی‌لایت، سنسور پایش باد تایرها و استانداردهای ۸۵ گانه مجهز شده است. گزینه‌ای بی‌رقیب و کم‌استهلاک برای حمل‌ونقل شهری با تحویل فوری.'
  },
  {
    id: 'car-reera-turbo',
    name: 'ری‌را اتوماتیک توربو صفر',
    brand: 'ikco',
    brandName: 'ایران خودرو',
    year: '۱۴۰۳',
    specsSummary: 'موتور EF7P TC توربو ۱۶۰ اسب • گیربکس ۶ دنده DAE • سقف پانوراما و کلاستر دوگانه',
    transmission: '۶ سرعته خودکار تیپ‌ترونیک DAE نسل جدید',
    engine: 'EF7P TC توربوشارژر (۱۶۰ اسب بخار - ۲۴۰ نیوتن‌متر گشتاور)',
    fuelConsumption: '۷.۳ لیتر در ۱۰۰ کیلومتر',
    topSpeed: '۱۹۵ کیلومتر بر ساعت',
    acceleration: '۱۰.۴ ثانیه',
    colors: ['سفید فابریک', 'مشکی آبنوس', 'تیتانیوم متالیک'],
    warranty: '۳ سال یا ۶۰,۰۰۰ کیلومتر گارانتی طلایی ایران خودرو',
    delivery: 'تحویل ۲۴ ساعته VIP با خودروبر اختصاصی درب منزل',
    cashPrice: 1290000000,
    cashPriceFmt: '۱,۲۹۰,۰۰۰,۰۰۰',
    downPayment: 600000000,
    downPaymentFmt: '۶۰۰,۰۰۰,۰۰۰',
    monthlyInstallment: 38500000,
    monthlyInstallmentFmt: '۳۸,۵۰۰,۰۰۰',
    img: 'images/shop/sefrechi-reera-real.webp?v=reera_real_authentic_v7.0',
    options: [
      'سقف تمام شیشه‌ای پانوراما برقی مجهز به پرده برقی ضد تابش',
      'کلاستر و مانیتور مالتی‌مدیا یکپارچه دوگانه ۱۲ اینچی تمام دیجیتال',
      'دوربین ۳۶۰ درجه پیرامونی سه‌بعدی و رادار هشدار نقطه کور (BSD)',
      'ترمز پارک برقی (EPB) همراه با سیستم اتوهلد (Auto Hold)',
      'درب صندوق عقب برقی هوشمند با حسگر پایی (Kick Sensor)',
      'صندلی‌های جلو برقی ۶ جهته مجهز به گرمکن',
      'سیستم کنترل الکترونیکی پایداری (ESC) و کمکی حرکت در سربالایی (HSA)',
      'شارژر بی‌سیم (Wireless Charger) و تهویه مطبوع اتوماتیک دوکاناله'
    ],
    safety: [
      '۴ کیسه هوای ایمنی جلو و جانبی',
      'سیستم کنترل کشش TCS و ترمز اضطراری خودکار',
      'ترمز دیسکی ۴ چرخ مجهز به پکیج کامل ABS, EBD, BAS',
      'سیستم پایش فشار باد و دمای تایرها (TPMS)'
    ],
    inspectionSummary: {
      bodyScore: '۱۰۰٪ فاقد رنگ و بدون کوچک‌ترین خط و خش (پلمپ کارخانه)',
      chassisScore: 'شاسی و پلتفرم نوین IKP1 کاملاً سالم و پلمپ',
      technicalScore: 'تست بوست توربو، سیستم تعلیق و دیاگ در شرایط عالی',
      certCode: 'ICARZ-CERT-1403-10923'
    },
    description: 'ری‌را (IKCO Rira) مدرن‌ترین و اولین کراس‌اوور ملی لوکس ایران‌خودرو است که از پیشرانه قدرتمند توربوشارژر EF7P با ۱۶۰ اسب بخار و گیربکس ۶ سرعته خودکار بهره می‌برد. دارای کامل‌ترین پکیج آپشن و ایمنی در بین خودروهای تولید داخل و گارانتی فعال شرکتی.'
  }
];

let selectedSefrechiCar = sefrechiCarsList[0];
let selectedSefrechiColor = sefrechiCarsList[0].colors[0];
let selectedSefrechiPayMode = 'cash';
let currentSpecCarId = 'car-tara-v4';
let currentCalcDownPct = 50;
let currentCalcDuration = 24;

// رندر کارت‌های حلقه فروش صفرچی (کاملاً هماهنگ، حرفه‌ای و جم‌وجور با سبک کاروسل‌های اپ)
function renderSefrechiSliderCards(brandFilter = 'all'){
  const track = document.getElementById('sefrechiSliderTrack');
  if(!track) return;
  track.innerHTML = '';

  const list = brandFilter === 'all' 
    ? sefrechiCarsList 
    : sefrechiCarsList.filter(c => c.brand === brandFilter);

  list.forEach(car => {
    const card = document.createElement('div');
    card.className = 'tc-card tc-card-car';
    card.style.cursor = 'pointer';
    card.onclick = (e) => {
      if(e.target.closest('.tc-add-btn')) return;
      openSefrechiCarSpecModal(car.id);
    };

    card.innerHTML = `
      <!-- استیج خودرو متناسب با سایر کارت‌های کالا -->
      <div class="tc-stage" style="position:relative;background:#F8FAFC;">
        <span style="position:absolute;top:6px;right:6px;background:linear-gradient(135deg, #2563EB, #1D4ED8);color:#FFFFFF;font-size:7px;font-weight:800;padding:1.5px 5.5px;border-radius:5px;z-index:2;box-shadow:0 2px 6px rgba(37,99,235,0.45);border:0.5px solid rgba(147,197,253,0.5);">صفر خشک</span>
        <span style="position:absolute;top:6px;left:6px;background:rgba(255,255,255,0.95);border:0.5px solid #DBEAFE;font-size:7px;font-weight:700;color:#1D4ED8;border-radius:5px;padding:1.5px 5px;z-index:2;">مدل ${car.year}</span>
        <img src="${car.img}" alt="${car.name}" loading="lazy">
      </div>

      <!-- برند و عنوان مینیمال و جم و جور -->
      <div class="tc-info">
        <div class="tc-brand-row">
          <span class="tc-brand" style="color:#1D4ED8;font-weight:700;">${car.brandName}</span>
          <span class="tc-badge-service" style="background:#EFF6FF;color:#1D4ED8;border-color:#BFDBFE;font-weight:700;">تحویل فوری</span>
        </div>
        <div class="tc-title" title="${car.name}">${car.name}</div>
        <div class="tc-compat" style="color:#2563EB;font-weight:600;">گارانتی فعال کمپانی</div>
      </div>

      <!-- قیمت و دکمه انتخاب سریع -->
      <div class="tc-foot">
        <div class="tc-price-wrap">
          <span class="tc-old" style="font-size:8px;color:#64748B;">اقساط از ${car.monthlyInstallmentFmt} ت</span>
          <div class="tc-price">${car.cashPriceFmt} <span>تومان</span></div>
        </div>
        <button class="tc-add-btn" onclick="event.stopPropagation(); openSefrechiCarSpecModal(\'${car.id}\')" title="مشاهده و ثبت خرید خودرو" style="background:linear-gradient(135deg, #2563EB, #1D4ED8);box-shadow:0 3px 8px rgba(37,99,235,0.38);"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      </div>
    `;
    track.appendChild(card);
  });

  enableDragScroll();
}

// رندر کارت‌های حلقه فروش تخصصی موتوربانو (هم‌شکل سایر حلقه‌ها، جم‌وجور، فوق‌العاده باکلاس و شیک)
function renderMotorbanoSliderCards(){
  const track = document.getElementById('motorbanoSliderTrack');
  if(!track) return;
  track.innerHTML = '';

  motorBanoProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'tc-card tc-card-motorbano';
    card.style.cursor = 'pointer';
    card.onclick = (e) => {
      if(e.target.closest('.tc-add-btn')) return;
      openProductSpecModal(p.id);
    };

    card.innerHTML = `
      <!-- استیج محصول موتوربانو با پس‌زمینه لطیف و هماهنگ -->
      <div class="tc-stage" style="position:relative;background:#FFF5F8;display:flex;align-items:center;justify-content:center;">
        <span style="position:absolute;top:6px;right:6px;background:linear-gradient(135deg, #FF3B94, #FF0F68);color:#FFFFFF;font-size:7px;font-weight:800;padding:1.5px 5px;border-radius:5px;z-index:2;box-shadow:0 2px 6px rgba(255,15,104,0.4);border:0.5px solid rgba(255,182,217,0.6);">ویژه بانوان</span>
        <span style="position:absolute;top:6px;left:6px;background:rgba(255,255,255,0.95);border:0.5px solid #FFCCD9;font-size:7px;font-weight:700;color:#E6005C;border-radius:5px;padding:1.5px 5px;z-index:2;">${p.discount || 'تخفیف ویژه'}</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" style="max-height:76px;max-width:96px;object-fit:contain;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.08));">
      </div>

      <!-- برند و عنوان مینیمال و جم و جور -->
      <div class="tc-info">
        <div class="tc-brand-row">
          <span class="tc-brand" style="color:#BE123C;font-weight:700;">${(p.brand || 'موتوربانو').split('•')[0].trim()}</span>
          <span class="tc-badge-service" style="background:#FFF1F5;color:#E6005C;border-color:#FFCCD9;font-weight:700;">تحویل اکسپرس</span>
        </div>
        <div class="tc-title" title="${p.title}">${p.title}</div>
        <div class="tc-compat" style="color:#E6005C;font-weight:600;">ضمانت اصالت موتوربانو</div>
      </div>

      <!-- قیمت و دکمه انتخاب سریع -->
      <div class="tc-foot">
        <div class="tc-price-wrap">
          <span class="tc-old" style="font-size:8px;color:#94A3B8;">${p.oldPrice ? p.oldPrice.toLocaleString('fa-IR') : 'اقساط ۴ ماهه'}</span>
          <div class="tc-price" style="font-size:11px;font-weight:800;color:#0F172A;">${p.price.toLocaleString('fa-IR')} <span>تومان</span></div>
        </div>
        <button class="tc-add-btn" onclick="event.stopPropagation(); openProductSpecModal(\'${p.id}\')" title="مشاهده مشخصات و خرید" style="background:linear-gradient(135deg, #FF3B94, #FF0F68);box-shadow:0 3px 8px rgba(255,15,104,0.35);"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      </div>
    `;
    track.appendChild(card);
  });

  enableDragScroll();
}

function filterSefrechiCards(brand, btnElem){
  const tabs = document.querySelectorAll('.sefrechi-slider-section .sf-min-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if(btnElem) btnElem.classList.add('active');
  renderSefrechiSliderCards(brand);
}

// باز کردن مودال مشخصات و خرید خودرو
function openSefrechiCarSpecModal(carId){
  const car = sefrechiCarsList.find(c => c.id === carId) || sefrechiCarsList[0];
  selectedSefrechiCar = car;
  currentSpecCarId = car.id;
  selectedSefrechiColor = car.colors[0];
  currentCalcDownPct = 50;
  currentCalcDuration = 24;

  const modal = document.getElementById('sefrechiCarSpecModal');
  if(!modal) return;

  document.getElementById('csmHeaderTitle').textContent = car.name;
  document.getElementById('csmHeaderSub').textContent = `${car.brandName} • مدل ${car.year} • گارانتی ۳ ساله فعال`;
  document.getElementById('csmYearBadge').textContent = `مدل ${car.year}`;
  document.getElementById('csmMainImg').src = car.img;
  document.getElementById('csmColorNameLabel').textContent = `رنگ انتخابی: ${selectedSefrechiColor}`;
  document.getElementById('csmStickyPrice').textContent = `${car.cashPriceFmt} تومان`;

  // رندر دکمه‌های انتخاب رنگ
  const swatchesContainer = document.getElementById('csmColorSwatches');
  if(swatchesContainer){
    swatchesContainer.innerHTML = car.colors.map((col, idx) => {
      const dotBg = col.includes('سفید') ? '#FFFFFF' : (col.includes('مشکی') ? '#1E293B' : (col.includes('قرمز') ? '#E11D48' : (col.includes('نقره') ? '#CBD5E1' : '#94A3B8')));
      const isAct = idx === 0 ? 'border:2px solid #0F172A;transform:scale(1.2);' : '';
      return `<span class="sf-card-dot" style="background:${dotBg};width:14px;height:14px;${isAct}" onclick="setSpecColor('${col}', this)" title="${col}"></span>`;
    }).join('');
  }

  // رندر گرید مشخصات
  const specGrid = document.getElementById('csmSpecGrid');
  if(specGrid){
    specGrid.innerHTML = `
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">نوع و حجم موتور:</span>
        <span class="csm-spec-val">${car.engine}</span>
      </div>
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">جعبه‌دنده (گیربکس):</span>
        <span class="csm-spec-val">${car.transmission}</span>
      </div>
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">مصرف سوخت در ۱۰۰km:</span>
        <span class="csm-spec-val">${car.fuelConsumption}</span>
      </div>
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">شتاب صفر تا ۱۰۰:</span>
        <span class="csm-spec-val">${car.acceleration}</span>
      </div>
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">گارانتی رسمی کارخانه:</span>
        <span class="csm-spec-val">${car.warranty}</span>
      </div>
      <div class="csm-spec-item">
        <span class="csm-spec-lbl">وضعیت رنگ و شاسی:</span>
        <span class="csm-spec-val" style="color:#059669;">۱۰۰٪ سالم با تضمین آی‌کارز</span>
      </div>
    `;
  }

  // تنظیم اولیه محاسبه‌گر اقساطی
  const slider = document.getElementById('csmDownPaymentRange');
  if(slider) slider.value = 50;
  updateCarInstallmentCalc();

  modal.classList.add('open');
}

function closeSefrechiCarSpecModal(){
  const modal = document.getElementById('sefrechiCarSpecModal');
  if(modal) modal.classList.remove('open');
}

function setSpecColor(colorName, elem){
  selectedSefrechiColor = colorName;
  const label = document.getElementById('csmColorNameLabel');
  if(label) label.textContent = `رنگ انتخابی: ${colorName}`;

  const allDots = document.querySelectorAll('#csmColorSwatches .sf-card-dot');
  allDots.forEach(d => {
    d.style.border = '1.2px solid rgba(0,0,0,0.2)';
    d.style.transform = 'scale(1)';
  });
  if(elem){
    elem.style.border = '2px solid #0F172A';
    elem.style.transform = 'scale(1.25)';
  }
}

function onCarCalcRangeChange(val){
  currentCalcDownPct = parseInt(val);
  updateCarInstallmentCalc();
}

function setCarCalcDuration(months, elem){
  currentCalcDuration = parseInt(months);
  const durBtns = document.querySelectorAll('.csm-calc-durations .csm-calc-dur-btn');
  durBtns.forEach(b => b.classList.remove('active'));
  if(elem) elem.classList.add('active');
  updateCarInstallmentCalc();
}

function updateCarInstallmentCalc(){
  const car = selectedSefrechiCar;
  if(!car) return;

  const downVal = Math.round(car.cashPrice * (currentCalcDownPct / 100));
  const remaining = car.cashPrice - downVal;
  const totalInterest = Math.round(remaining * 0.21 * (currentCalcDuration / 12));
  const totalWithInterest = remaining + totalInterest;
  const monthly = Math.round(totalWithInterest / currentCalcDuration);

  const pctText = document.getElementById('csmCalcDownPctText');
  const valText = document.getElementById('csmCalcDownValText');
  const resDown = document.getElementById('csmResDownPayment');
  const resMonth = document.getElementById('csmResMonthly');

  if(pctText) pctText.textContent = `${currentCalcDownPct}٪`;
  if(valText) valText.textContent = `${downVal.toLocaleString('fa-IR')} تومان`;
  if(resDown) resDown.textContent = `${downVal.toLocaleString('fa-IR')} تومان`;
  if(resMonth) resMonth.textContent = `${monthly.toLocaleString('fa-IR')} تومان/ماه (${currentCalcDuration} قسط)`;
}

function openSefrechiOrderFromSpec(){
  closeSefrechiCarSpecModal();
  openSefrechiOrderModal(currentSpecCarId);
}

// باز کردن مودال ثبت سفارش خرید خودرو صفر
function openSefrechiOrderModal(carId){
  const car = sefrechiCarsList.find(c => c.id === carId) || sefrechiCarsList[0];
  selectedSefrechiCar = car;
  selectedSefrechiColor = car.colors[0];
  selectedSefrechiPayMode = 'cash';

  const modal = document.getElementById('sefrechiOrderModal');
  const body = document.getElementById('sfOrderModalBody');
  const subtitle = document.getElementById('sfOrderSubtitle');
  if(!modal || !body) return;

  if(subtitle){
    subtitle.textContent = `${car.name} • تحویل با خودروبر کفی درب منزل`;
  }

  renderSefrechiOrderForm();
  modal.classList.add('open');
}

function closeSefrechiOrderModal(e){
  if(e && e.target && e.target.id !== 'sefrechiOrderModal' && !e.target.classList.contains('ord-close-btn')) return;
  const m = document.getElementById('sefrechiOrderModal');
  if(m) m.classList.remove('open');
}

function renderSefrechiOrderForm(){
  const body = document.getElementById('sfOrderModalBody');
  const car = selectedSefrechiCar;
  if(!body || !car) return;

  const isInstallment = selectedSefrechiPayMode === 'installment';
  const finalPrice = isInstallment ? car.downPayment : car.cashPrice;

  const colorButtonsHtml = car.colors.map((col, idx) => {
    const isAct = col === selectedSefrechiColor;
    const dotColor = col.includes('سفید') ? '#FFFFFF' : (col.includes('مشکی') ? '#1E293B' : (col.includes('قرمز') ? '#E11D48' : '#94A3B8'));
    return `
      <div class="sf-color-opt ${isAct ? 'active' : ''}" onclick="selectSefrechiColor('${col}', this)">
        <span class="sf-color-dot" style="background:${dotColor};"></span>
        <span>${col}</span>
      </div>
    `;
  }).join('');

  body.innerHTML = `
    <!-- پیش‌نمایش خودرو انتخابی -->
    <div class="sf-order-car-preview">
      <img loading="lazy" decoding="async"  src="${car.img}" class="sf-order-car-thumb" alt="${car.name}">
      <div style="flex:1;">
        <b style="font-size:13px;color:#111827;display:block;">${car.name}</b>
        <span style="font-size:10px;color:#6B7280;display:block;margin-top:2px;">${car.brandName} • مدل ${car.year} • صفر خشک کاردکس</span>
        <div style="font-size:10px;color:#2563EB;margin-top:3px;font-weight:600;">${car.transmission}</div>
      </div>
    </div>

    <!-- انتخاب رنگ خودرو -->
    <div class="sf-form-group">
      <label class="sf-form-label">انتخاب رنگ بدنه خودرو:</label>
      <div class="sf-color-options">
        ${colorButtonsHtml}
      </div>
    </div>

    <!-- انتخاب نحوه خرید -->
    <div class="sf-form-group">
      <label class="sf-form-label">نحوه خرید و پرداخت:</label>
      <div class="sf-pay-switch">
        <button class="sf-pay-tab ${!isInstallment ? 'active' : ''}" onclick="setSefrechiPayMode('cash')">
          خرید نقدی (تحویل فوری ۲۴ ساعته)
        </button>
        <button class="sf-pay-tab ${isInstallment ? 'active' : ''}" onclick="setSefrechiPayMode('installment')">
          فروش اقساطی (۲۴ ماهه بدون ضامن)
        </button>
      </div>
    </div>

    <!-- شیوه تحویل -->
    <div class="sf-form-group">
      <label class="sf-form-label">شیوه تحویل:</label>
      <div style="display:flex;gap:8px;">
        <label style="flex:1;background:#F9FAFB;border:1px solid #D1D5DB;border-radius:8px;padding:7px;font-size:10.5px;color:#111827;display:flex;align-items:center;gap:6px;cursor:pointer;">
          <input type="radio" name="sfDeliveryMode" checked>
          <span>🚛 خودروبر کفی درب منزل (رایگان)</span>
        </label>
        <label style="flex:1;background:#FFFFFF;border:1px solid #E5E7EB;border-radius:8px;padding:7px;font-size:10.5px;color:#6B7280;display:flex;align-items:center;gap:6px;cursor:pointer;">
          <input type="radio" name="sfDeliveryMode">
          <span>🏢 تحویل حضوری در سالن صفرچی</span>
        </label>
      </div>
    </div>

    <!-- مشخصات خریدار -->
    <div class="sf-form-group">
      <label class="sf-form-label">نام و نام خانوادگی خریدار (جهت صدور سند کمپانی):</label>
      <input type="text" id="sfCustomerName" value="آرش کاظمی" style="padding:8px 12px;border:1px solid #D1D5DB;border-radius:8px;font-size:11px;font-family:inherit;width:100%;box-sizing:border-box;">
    </div>

    <div class="sf-form-group">
      <label class="sf-form-label">آدرس تحویل با خودروبر کفی درب منزل:</label>
      <input type="text" id="sfDeliveryAddress" value="تهران، خیابان آزادی، تقاطع نواب، پلاک ۲۴" style="padding:8px 12px;border:1px solid #D1D5DB;border-radius:8px;font-size:11px;font-family:inherit;width:100%;box-sizing:border-box;">
    </div>

    <div class="sf-form-group">
      <label class="sf-form-label">شماره تلفن همراه خریدار:</label>
      <input type="tel" id="sfCustomerPhone" value="۰۹۱۲۳۴۵۶۷۸۹" style="padding:8px 12px;border:1px solid #D1D5DB;border-radius:8px;font-size:11px;font-family:inherit;width:100%;box-sizing:border-box;direction:ltr;text-align:right;">
    </div>

    <!-- خلاصه صورتحساب -->
    <div class="sf-order-pricing-summary">
      <div class="sf-ops-row">
        <span>مبلغ پرداختی این مرحله:</span>
        <b style="font-family:'YekanBakhFaNum';font-size:11.5px;">${finalPrice.toLocaleString('fa-IR')} تومان</b>
      </div>
      ${isInstallment ? `
      <div class="sf-ops-row">
        <span>اقساط ماهانه (۲۴ ماهه):</span>
        <b style="color:#0F172A;font-family:'YekanBakhFaNum';">${car.monthlyInstallmentFmt} تومان/ماه</b>
      </div>
      ` : ''}
      <div class="sf-ops-row" style="color:#059669;">
        <span>کارشناسی ۵ ستاره آی‌کارز + حمل با خودروبر:</span>
        <b>رایگان</b>
      </div>
      <div class="sf-ops-row total">
        <span>مبلغ کل قابل پرداخت:</span>
        <span style="font-size:13px;">${finalPrice.toLocaleString('fa-IR')} تومان</span>
      </div>
    </div>

    <button class="sf-order-submit-btn" onclick="submitSefrechiOrder()">
      تایید سفارش و رزرو قطعی خودرو صفر
    </button>
  `;
}

function selectSefrechiColor(colorName, elem){
  selectedSefrechiColor = colorName;
  const opts = document.querySelectorAll('.sf-color-opt');
  opts.forEach(o => o.classList.remove('active'));
  if(elem) elem.classList.add('active');
}

function setSefrechiPayMode(mode){
  selectedSefrechiPayMode = mode;
  renderSefrechiOrderForm();
}

function submitSefrechiOrder(){
  const car = selectedSefrechiCar;
  if(!car) return;

  const isInstallment = selectedSefrechiPayMode === 'installment';
  const addrElem = document.getElementById('sfDeliveryAddress');
  const address = addrElem ? addrElem.value : 'تهران، خیابان آزادی، تقاطع نواب، پلاک ۲۴';
  const customerNameElem = document.getElementById('sfCustomerName');
  const customerName = customerNameElem ? customerNameElem.value : 'آرش کاظمی';

  const orderPrice = isInstallment ? car.downPayment : car.cashPrice;
  const newOrderId = 'SF-' + Math.floor(10000 + Math.random() * 90000);

  const newOrder = {
    id: newOrderId,
    orderType: 'vehicle',
    status: 'active',
    statusText: 'تایید رزرو خودرو صفر • هماهنگی اعزام خودروبر کفی',
    step: 2,
    date: 'امروز، ساعت ' + new Date().toLocaleTimeString('fa-IR', {hour: '2-digit', minute: '2-digit'}),
    carName: `${car.name} (${selectedSefrechiColor})`,
    address: address,
    shippingMethod: 'ارسال با خودروبر کفی اختصاصی صفرچی (بیمه‌نامه معتبر تمام خطر)',
    carrier: {
      name: 'ناوگان خودروبر کفی اختصاصی صفرچی',
      trackCode: 'SF-TRK-' + Math.floor(1000000 + Math.random() * 9000000),
      driver: 'سهراب مرادی (پلاک تهران ۷۷)',
      phone: '۰۹۱۲۸۸۸۹۹۰۰'
    },
    items: [
      {
        title: `${car.name} - مدل ${car.year} (رنگ ${selectedSefrechiColor})`,
        price: orderPrice,
        qty: 1,
        warranty: car.warranty,
        img: car.img
      }
    ],
    subtotal: orderPrice,
    discount: 15000000,
    shipping: 0,
    total: orderPrice - 15000000,
    paymentMethod: isInstallment ? 'پیش‌پرداخت اقساطی + ۲۴ فقره چک صیادی' : 'پرداخت نقدی آنلاین با ضمانت بازگشت وجه',
    taxId: 'SF-TX-' + Math.floor(100000 + Math.random() * 900000),
    issueDate: '۱۴۰۳/۰۷/۰۸'
  };

  userOrdersList.unshift(newOrder);
  updateOrdersCount();
  closeSefrechiOrderModal();
  closeSefrechiModal();

  alert(`سفارش خودرو صفر با موفقیت ثبت شد!\n\nکد رهگیری: ${newOrderId}\nخریدار: ${customerName}\nخودرو: ${car.name}\nرنگ: ${selectedSefrechiColor}\n\nپیش‌فاکتور رسمی صادر گردید و در بخش «مدیریت سفارش‌ها» قابل مشاهده و پیگیری است.`);

  setTimeout(() => {
    openOrdersModal();
  }, 400);
}

// ویترین تمام‌صفحه صفرچی
function openSefrechiModal(){
  const m = document.getElementById('sefrechiModal');
  if(!m) return;
  renderSefrechiModalCatalog('all');
  m.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeSefrechiModal(){
  const m = document.getElementById('sefrechiModal');
  if(m) m.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function filterSefrechiCatalog(brand, btnElem){
  const tabs = document.querySelectorAll('#sefrechiModal .sf-min-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if(btnElem) btnElem.classList.add('active');
  renderSefrechiModalCatalog(brand);
}

function renderSefrechiModalCatalog(brandFilter = 'all'){
  const grid = document.getElementById('sfCatalogGrid');
  if(!grid) return;
  grid.innerHTML = '';

  const list = brandFilter === 'all' 
    ? sefrechiCarsList 
    : sefrechiCarsList.filter(c => c.brand === brandFilter);

  list.forEach(car => {
    const card = document.createElement('div');
    card.className = 'sf-prod-card';
    card.onclick = () => {
      openSefrechiCarSpecModal(car.id);
    };

    card.innerHTML = `
      <div class="sf-pc-stage">
        <span style="position:absolute;top:6px;right:6px;background:linear-gradient(135deg, #2563EB, #1D4ED8);color:#FFFFFF;font-size:7px;font-weight:800;padding:1.5px 5.5px;border-radius:5px;z-index:2;box-shadow:0 2px 6px rgba(37,99,235,0.45);border:0.5px solid rgba(147,197,253,0.5);">صفر خشک</span>
        <span style="position:absolute;top:6px;left:6px;background:rgba(255,255,255,0.95);border:0.5px solid #DBEAFE;font-size:7px;font-weight:700;color:#1D4ED8;border-radius:5px;padding:1.5px 5px;z-index:2;">مدل ${car.year}</span>
        <img loading="lazy" decoding="async"  src="${car.img}" alt="${car.name}">
      </div>
      <span class="sf-pc-tag">${car.brandName} • تحویل فوری</span>
      <div class="sf-pc-title">${car.name}</div>
      <div class="sf-pc-price">${car.cashPriceFmt} <span style="font-size:9.5px;font-weight:500;color:#64748B;">تومان</span></div>
      <div class="sf-pc-inst">اقساط از ${car.monthlyInstallmentFmt} ت/ماه</div>
      <button class="sf-pc-btn" onclick="event.stopPropagation(); openSefrechiCarSpecModal('${car.id}')">مشاهده مشخصات و خرید</button>
    `;
    grid.appendChild(card);
  });
}

function openMotorBanoModal(){
  const m = document.getElementById('motorBanoModal');
  if(!m) return;
  renderMotorBanoProducts();
  m.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeMotorBanoModal(){
  const m = document.getElementById('motorBanoModal');
  if(m) m.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function renderMotorBanoProducts(){
  const c = document.getElementById('motorBanoProductsContainer');
  if(!c) return;
  c.innerHTML = '';
  motorBanoProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'mb-prod-card';
    card.onclick = () => {
      openProductSpecModal(p.id);
    };
    card.innerHTML = `
      <div class="mb-pc-stage">
        <img loading="lazy" decoding="async"  src="${p.img}" alt="${p.title}">
      </div>
      <span class="mb-pc-tag">${p.tag}</span>
      <div class="mb-pc-title">${p.title}</div>
      <div class="mb-pc-price">${p.price.toLocaleString('fa-IR')} <span style="font-size:10px;font-weight:400;color:#64748B;">تومان</span></div>
      <button class="mb-pc-btn">مشاهده مشخصات و خرید</button>
    `;
    c.appendChild(card);
  });
}

function openIosInstallModal(){
  const m = document.getElementById('iosInstallModal');
  if(m) m.classList.add('open');
}
function closeIosInstallModal(e){
  if(e && e.target && e.target.id !== 'iosInstallModal' && !e.target.classList.contains('ord-close-btn')) return;
  const m = document.getElementById('iosInstallModal');
  if(m) m.classList.remove('open');
}

function openDownloadModal(){
  const m = document.getElementById('downloadAppModal');
  if(m) m.classList.add('open');
}
function closeDownloadModal(e){
  if(e && e.target && e.target.id !== 'downloadAppModal' && !e.target.classList.contains('ord-close-btn')) return;
  const m = document.getElementById('downloadAppModal');
  if(m) m.classList.remove('open');
}

// ==================== GLOBAL APP CONTROLLERS (TOAST, DRAWER, NAVIGATION, CREDIT & WALLET) ====================
let activePillIndex = 0;
let currentLoanMonths = 4;
let currentLoanAmount = 1000000;

function showToast(msg){
  const toast = document.getElementById('toast');
  const txt = document.getElementById('toastText');
  if(!toast || !txt) return;
  txt.textContent = msg;
  toast.classList.add('show');
  if(window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function openDrawer(){
  const d = document.getElementById('drawer');
  if(d) d.classList.add('open');
}

function closeDrawer(e){
  const d = document.getElementById('drawer');
  if(d) d.classList.remove('open');
}

function openProfileModal(){
  const p = document.getElementById('profileModal');
  if(p) p.classList.add('open');
}

function closeProfileModal(e){
  const p = document.getElementById('profileModal');
  if(p) p.classList.remove('open');
}

function copyPromoCode(){
  if(navigator.clipboard){
    navigator.clipboard.writeText('ICARZ2026');
  }
  showToast('کد تخفیف ICARZ2026 کپی شد (۲۰٪ تخفیف ویژه)');
}

function toggleNotif(){
  const b = document.getElementById('notifBtn');
  if(b){
    b.classList.toggle('disabled');
    const on = !b.classList.contains('disabled');
    showToast(on ? 'اعلان‌های هوشمند فعال شدند' : 'اعلان‌ها غیرفعال شدند');
  }
}

function setPill(idx){
  activePillIndex = idx;
  document.querySelectorAll('.pill-nav .pill').forEach(p => {
    p.classList.toggle('active', parseInt(p.getAttribute('data-index')) === idx);
  });
  document.querySelectorAll('.dots .dot').forEach(d => {
    d.classList.toggle('active', parseInt(d.getAttribute('data-index')) === idx);
  });
  const detailsText = document.getElementById('detailsLinkText');
  if(detailsText){
    if(idx === 2) detailsText.textContent = 'جزئیات کیف پول';
    else if(idx === 1) detailsText.textContent = 'جزئیات وام و اعتبار';
    else detailsText.textContent = 'جزئیات سرمایه‌گذاری';
  }
}

function carousel(dir){
  let next = (activePillIndex + dir + 3) % 3;
  setPill(next);
  if(next === 0) setActiveSection('sarmaye');
  else if(next === 1) setActiveSection('credit');
  else if(next === 2) setActiveSection('wallet');
}

function setActiveSection(sec){
  const dots = document.getElementById('dots');
  const walletCenter = document.getElementById('walletPixelCenter');
  const detailsText = document.getElementById('detailsLinkText');

  if(sec === 'wallet'){
    if(dots) dots.style.display = 'none';
    if(walletCenter) walletCenter.style.display = 'flex';
    if(detailsText) detailsText.textContent = 'جزئیات کیف پول';
    setPill(2);
    navigateTo('wallet');
  } else if(sec === 'credit'){
    if(dots) dots.style.display = 'flex';
    if(walletCenter) walletCenter.style.display = 'none';
    if(detailsText) detailsText.textContent = 'جزئیات وام و اعتبار';
    setPill(1);
    navigateTo('credit');
  } else {
    // sarmaye
    if(dots) dots.style.display = 'flex';
    if(walletCenter) walletCenter.style.display = 'none';
    if(detailsText) detailsText.textContent = 'جزئیات سرمایه‌گذاری';
    setPill(0);
    navigateTo('services');
  }
}

function onDetailsClick(){
  if(activePillIndex === 1){
    navigateTo('credit');
  } else if(activePillIndex === 2){
    openProfileModal();
  } else {
    showToast('بخش سرمایه‌گذاری: سود سالانه ۳۲٪ روزشمار با تضمین اصل سرمایه');
  }
}

function navigateTo(page, title){
  const phone = document.querySelector('.phone');
  closeProductSpecModal();
  
  // بستن منوی کشویی در صورت باز بودن
  closeDrawer();

  // تعیین صفحه اصلی برای منوی زیرین و منوی کشویی
  let mainSection = page;
  const serviceSubpages = [
    'services', 'tire', 'battery', 'oil', 'carwash', 'fuel', 'fine',
    'insurance-body', 'insurance-third', 'insurance-installment',
    'accident-claim', 'inspection', 'toll', 'transfer', 'emergency'
  ];
  if(serviceSubpages.includes(page)){
    mainSection = 'services';
  }

  // پنهان کردن تمام صفحات
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  window.scrollTo({top:0, behavior:'instant'});

  // به‌روزرسانی فعال بودن آیتم‌های bottom nav
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    const isAct = item.getAttribute('data-page') === mainSection;
    item.classList.toggle('active', isAct);
  });

  // به‌روزرسانی هماهنگ منوی کشویی جانبی (drawer items)
  document.querySelectorAll('.drawer-item').forEach(item => {
    const sec = item.getAttribute('data-section');
    const isAct = (sec === page) || (sec === mainSection && (!page || page === 'services' || page === 'shop'));
    item.classList.toggle('active', isAct);
  });

  // هماهنگی تم سفید فروشگاه و نمایش هدر اختصاصی یا تب‌های مالی
  const srvHeader = document.getElementById('servicesHeaderStage');
  const shopHeader = document.getElementById('shopHeaderStage');

  if(page === 'shop'){
    if(phone) phone.classList.add('theme-shop-white');
    if(srvHeader) srvHeader.style.display = 'none';
    startShopSliderAutoPlay();
  } else {
    if(phone) phone.classList.remove('theme-shop-white');
    if(srvHeader) srvHeader.style.display = (page === 'services' || page === 'credit' || page === 'wallet') ? 'block' : 'none';
    stopShopSliderAutoPlay();
  }

  if(page === 'shop'){
    const pShop = document.getElementById('page-shop');
    if(pShop) pShop.classList.add('active');
    if(typeof renderTapsiTopicCarousels === 'function') renderTapsiTopicCarousels();
  renderVehicleProfileHub(currentSelectedCar);
    if(typeof renderSefrechiSliderCards === 'function') renderSefrechiSliderCards('all');
    if(typeof renderMotorbanoSliderCards === 'function') renderMotorbanoSliderCards();
    document.querySelectorAll('.pill-nav .pill').forEach(p => p.classList.remove('active'));
    showToast('به فروشگاه تخصصی قطعات خودرو خوش آمدید');
  } else if(page === 'credit'){
    const pCredit = document.getElementById('page-credit');
    if(pCredit) pCredit.classList.add('active');
    setPill(1);
    const dots = document.getElementById('dots');
    const walletCenter = document.getElementById('walletPixelCenter');
    if(dots) dots.style.display = 'flex';
    if(walletCenter) walletCenter.style.display = 'none';
    showToast('رتبه اعتباری شما تایید شد: ۱ میلیون تومان اعتبار فعال');
  } else if(page === 'wallet'){
    const pServices = document.getElementById('page-services');
    if(pServices) pServices.classList.add('active');
    setPill(2);
    const dots = document.getElementById('dots');
    const walletCenter = document.getElementById('walletPixelCenter');
    if(dots) dots.style.display = 'none';
    if(walletCenter) walletCenter.style.display = 'flex';
    showToast('موجودی کیف پول شما: ۲,۴۵۰,۰۰۰ تومان');
  } else if(page === 'profile'){
    openProfileModal();
  } else {
    // services or service subpages
    const pServices = document.getElementById('page-services');
    if(pServices) pServices.classList.add('active');
    setPill(1);
    const dots = document.getElementById('dots');
    const walletCenter = document.getElementById('walletPixelCenter');
    if(dots) dots.style.display = 'flex';
    if(walletCenter) walletCenter.style.display = 'none';
    if(title) showToast(`خدمت «${title}» انتخاب شد`);
  }
}

// باز کردن جزئیات کالا
function openProductDetail(title){
  showToast(`قطعه «${title}» با ضمانت تعویض ۱۲ ماهه آماده سفارش است.`);
}

// استفاده از اعتبار در فروشگاه
function useCreditInShop(){
  navigateTo('shop');
  showToast('اعتبار ۱,۰۰۰,۰۰۰ تومانی برای سفارش اقساطی شما منظور شد.');
}

// ماشین‌حساب اقساط وام
function updateLoanCalculator(val){
  currentLoanAmount = parseInt(val);
  const label = document.getElementById('calcAmountLabel');
  if(label) label.textContent = currentLoanAmount.toLocaleString('fa-IR') + ' تومان';
  calcMonthlyPayment();
}

function setLoanMonths(months, btn){
  currentLoanMonths = months;
  document.querySelectorAll('.lcc-plan-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  calcMonthlyPayment();
}

function calcMonthlyPayment(){
  const resultEl = document.getElementById('calcMonthlyResult');
  if(!resultEl) return;
  // برای ۴ ماهه کارمزد صفر، برای ۶ ماهه ۲ درصد، ۱۲ ماهه ۴ درصد
  let interest = 0;
  if(currentLoanMonths === 6) interest = 0.02;
  else if(currentLoanMonths === 12) interest = 0.04;

  const total = currentLoanAmount * (1 + interest);
  const monthly = Math.round(total / currentLoanMonths);
  resultEl.textContent = monthly.toLocaleString('fa-IR') + ' تومان';
}

let selectedUpgradeAmount = 5000000;

function openCreditUpgradeModal(){
  const modal = document.getElementById('creditUpgradeModal');
  if(modal) modal.classList.add('open');
}

function closeCreditUpgradeModal(e){
  if(e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('ord-close-btn')) return;
  const modal = document.getElementById('creditUpgradeModal');
  if(modal) modal.classList.remove('open');
}

function selectUpgradeAmount(amount, btn){
  selectedUpgradeAmount = amount;
  document.querySelectorAll('.cum-chip').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function submitCreditUpgrade(){
  closeCreditUpgradeModal();
  showToast(`درخواست افزایش اعتبار به مبلغ ${selectedUpgradeAmount.toLocaleString('fa-IR')} تومان ثبت شد. نتیجه ظرف ۲۴ ساعت پیامک می‌شود.`);
}


// تابع اختصاصی کپی کد تخفیف با کلیک



// ==================== ADVANCED SHOP CONTROLLERS V2 ====================
let currentShSlide = 0;
let shInterval = null;
let cartItemsCount = 1;
let storyTimer = null;

// ۱. لیست جامع و ۳۸ تایی خودروهای ایران (سایپا، ایران‌خودرو، رنو، چینی، وارداتی)
const carDataMap = {
  'pride': {
    name: 'سایپا پراید ۱۳۱ / صبا / ۱۱۱ / ۱۳۲',
    group: 'saipa',
    engine: 'موتور ۱۳۰۰ انژکتوری و کاربراتور',
    title: 'تمام وسایل و لوازم یدکی مخصوص پراید (صبا، ۱۱۱، ۱۳۱، ۱۳۲)',
    sub: 'قطعات تست‌شده، سازگار با موتور ۱۳۰۰ سایپا',
    compatText: 'سازگار با پراید',
    img: 'images/shop/pride-car-thumb.png'
  },
  'pride151': {
    name: 'سایپا پراید وانت ۱۵۱',
    group: 'saipa',
    engine: 'موتور M13 تقویت‌شده وانت',
    title: 'لوازم یدکی و قطعات باری پراید وانت ۱۵۱',
    sub: 'فنر تقویت‌شده، دیسک ترمز دوبل، سازگار با بار سنگین',
    compatText: 'سازگار با پراید وانت',
    img: 'images/shop/pride-car-thumb.png'
  },
  'tiba': {
    name: 'سایپا تیبا ۱ و تیبا ۲ پلاس',
    group: 'saipa',
    engine: 'موتور ۱۵۰۰ سی‌سی M15',
    title: 'تمام قطعات و لوازم مصرفی تیبا ۱ و تیبا ۲',
    sub: 'موتور M15 هشت سوپاپ، استاندارد شرکتی سایپا',
    compatText: 'سازگار با تیبا',
    img: 'images/shop/pride-car-thumb.png'
  },
  'quick': {
    name: 'سایپا کوییک (R / S / اتوماتیک / GXR)',
    group: 'saipa',
    engine: 'موتور M15 یورو ۵',
    title: 'لوازم یدکی، بدنه و مصرفی سایپا کوییک',
    sub: 'سازگار با پلتفرم X200 سایپا و موتور ارتقایافته',
    compatText: 'سازگار با کوییک',
    img: 'images/shop/pride-car-thumb.png'
  },
  'saina': {
    name: 'سایپا ساینا (S / دنده‌ای / اتوماتیک)',
    group: 'saipa',
    engine: 'موتور M15 استاندارد',
    title: 'تمام قطعات فنی و بدنه ساینا S و اتومات',
    sub: 'سازگاری کامل با گیربکس دستی و CVT',
    compatText: 'سازگار با ساینا',
    img: 'images/shop/pride-car-thumb.png'
  },
  'shahin': {
    name: 'سایپا شاهین G توربو / شاهین پلاس',
    group: 'saipa',
    engine: 'موتور M15TC توربوشارژ و ME16',
    title: 'لوازم یدکی تخصصی سایپا شاهین G و شاهین پلاس',
    sub: 'روغن‌های گرید SN توربو، لنت‌های سرامیکی، شمع ایریدیوم',
    compatText: 'سازگار با شاهین',
    img: 'images/shop/pride-car-thumb.png'
  },
  'nissan': {
    name: 'زامیاد نیسان آبی Z24 / پادرا پلاس',
    group: 'saipa',
    engine: 'موتور ۲۴۰۰ Z24 بنزینی و دیزل',
    title: 'لوازم یدکی سنگین وانت نیسان زامیاد و پادرا',
    sub: 'باتری ۷۰ آمپر پایه بلند، کلاچ فوق سنگین، لنت‌های مقاوم',
    compatText: 'سازگار با نیسان آبی',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peugeot206_2': {
    name: 'پژو ۲۰۶ تیپ ۲ و تیپ ۳',
    group: 'ikco',
    engine: 'موتور ۱۴۰۰ سی‌سی TU3',
    title: 'تمام قطعات و لوازم یدکی پژو ۲۰۶ تیپ ۲',
    sub: 'موتور TU3 هشت سوپاپ، روغن‌های 10W-40 شرکتی',
    compatText: 'سازگار با پژو ۲۰۶ تیپ ۲',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peugeot206_5': {
    name: 'پژو ۲۰۶ تیپ ۵ و SD صندوقدار',
    group: 'ikco',
    engine: 'موتور ۱۶۰۰ سی‌سی ۱۶ سوپاپ TU5',
    title: 'لوازم یدکی و قطعات موتوری پژو ۲۰۶ تیپ ۵ و SD',
    sub: 'کیت کلاچ والئو پریدمپر، دیسک ترمز خنک‌شونده، شمع پایه بلند',
    compatText: 'سازگار با ۲۰۶ تیپ ۵',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peugeot207': {
    name: 'پژو ۲۰۷ (دنده‌ای / اتومات / پانوراما / MC)',
    group: 'ikco',
    engine: 'موتور TU5P و TU5 استاندارد',
    title: 'تمام قطعات یدکی و لوازم اسپرت پژو ۲۰۷',
    sub: 'سازگار با گیربکس اتوماتیک ۶ سرعته و دستی',
    compatText: 'سازگار با پژو ۲۰۷',
    img: 'images/shop/pride-car-thumb.png'
  },
  'pars': {
    name: 'پژو پارس (سال / TU5 / ELX / XU7P)',
    group: 'ikco',
    engine: 'موتور XU7P بهینه‌شده و TU5',
    title: 'قطعات یدکی و لوازم جلوبندی پژو پارس',
    sub: 'واشر سرسیلندر مسی، لنت تکستار فرانسه، رادیاتور دولول',
    compatText: 'سازگار با پژو پارس',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peugeot405': {
    name: 'پژو ۴۰۵ (GLX بنزینی و دوگانه / SLX موتور TU5)',
    group: 'ikco',
    engine: 'موتور ۱۸۰۰ XU7 و ۱۶ سوپاپ TU5',
    title: 'لوازم یدکی استاندارد پژو ۴۰۵ جی‌ال‌ایکس و اس‌ال‌ایکس',
    sub: 'سازگاری کامل با سیستم خنک‌کاری و ترمز',
    compatText: 'سازگار با پژو ۴۰۵',
    img: 'images/shop/pride-car-thumb.png'
  },
  'samand': {
    name: 'سمند (LX / موتور ملی EF7)',
    group: 'ikco',
    engine: 'موتور ملی ۱۷۰۰ سی‌سی EF7 و XU7',
    title: 'قطعات یدکی سمند معمولی و سمند موتور ملی EF7',
    sub: 'کویل و شمع فابریک EF7، روغن‌های 10W-40 پایه گازسوز',
    compatText: 'سازگار با سمند EF7',
    img: 'images/shop/pride-car-thumb.png'
  },
  'soren': {
    name: 'سورن پلاس (EF7 توربو و بنزینی)',
    group: 'ikco',
    engine: 'موتور EF7 پلاس و توربوشارژ',
    title: 'لوازم یدکی و مصرفی سورن پلاس توربو و بنزینی',
    sub: 'لنت‌های ضدحرارت، روغن موتور تمام سنتتیک 5W-40',
    compatText: 'سازگار با سورن پلاس',
    img: 'images/shop/pride-car-thumb.png'
  },
  'dena': {
    name: 'دنا معمولی و دنا پلاس (تنفس طبیعی)',
    group: 'ikco',
    engine: 'موتور EF7 شانزده سوپاپ',
    title: 'قطعات فنی و تزئیناتی دنا و دنا پلاس',
    sub: 'تطابق ۱۰۰٪ با سیم‌کشی مولتی‌پلکس و کلاچ پنبه‌ای',
    compatText: 'سازگار با دنا پلاس',
    img: 'images/shop/pride-car-thumb.png'
  },
  'dena_turbo': {
    name: 'دنا پلاس توربو اتوماتیک ۶ دنده',
    group: 'ikco',
    engine: 'موتور TC7 توربوشارژ ۱۵۰ اسب',
    title: 'لوازم یدکی تخصصی دنا پلاس توربو اتوماتیک',
    sub: 'روغن گیربکس اتوماتیک DAE، لنت سرامیکی، اینترکولر',
    compatText: 'سازگار با دنا توربو اتومات',
    img: 'images/shop/pride-car-thumb.png'
  },
  'tara': {
    name: 'ایران‌خودرو تارا (V1 دنده‌ای / V4 اتوماتیک LX)',
    group: 'ikco',
    engine: 'موتور TU5P ارتقایافته با زمان‌بندی متغیر',
    title: 'لوازم یدکی و قطعات مصرفی تارا دنده‌ای و اتوماتیک',
    sub: 'کیت کلاچ مخصوص گیربکس ۶ سرعته، فیلترهای استاندارد',
    compatText: 'سازگار با تارا V1P/V4',
    img: 'images/shop/pride-car-thumb.png'
  },
  'runna': {
    name: 'رانا و رانا پلاس (پانوراما ۶ دنده)',
    group: 'ikco',
    engine: 'موتور TU5 و TU5P',
    title: 'قطعات موتوری و گیربکس رانا و رانا پلاس',
    sub: 'دیسک چرخ خنک‌شونده، سیستم تعلیق نرم، فیلتر کابین',
    compatText: 'سازگار با رانا پلاس',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peugeot2008': {
    name: 'پژو ۲۰۰۸ توربوشارژ فرانسوی',
    group: 'ikco',
    engine: 'موتور THP165 توربو پژو-سیتروئن',
    title: 'لوازم یدکی اصلی پژو ۲۰۰8 اورجینال فرانسه',
    sub: 'روغن توتال 0W-30 سنتتیک، شمع پلاتینیوم، لنت فابریک',
    compatText: 'سازگار با پژو ۲۰۰۸',
    img: 'images/shop/pride-car-thumb.png'
  },
  'l90': {
    name: 'رنو تندر ۹۰ (L90 / اتوماتیک / پارس تندر)',
    group: 'renault',
    engine: 'موتور ۱۶ سوپاپ رنو K4M',
    title: 'تمام قطعات یدکی و موتوری رنو تندر ۹۰ (ال ۹۰)',
    sub: 'کیت تسمه تایم رنو اصل، دسته موتور، دیسک والئو جعبه سبز',
    compatText: 'سازگار با تندر ۹۰',
    img: 'images/shop/pride-car-thumb.png'
  },
  'sandero': {
    name: 'رنو ساندرو و ساندرو استپ‌وی',
    group: 'renault',
    engine: 'موتور K4M با گیربکس دنده‌ای و اتومات',
    title: 'لوازم یدکی و بدنه رنو ساندرو و استپ‌وی',
    sub: 'کیت کلاچ رنو، فیلترهای اصلی، لنت ترمز جلو و عقب',
    compatText: 'سازگار با ساندرو استپ‌وی',
    img: 'images/shop/pride-car-thumb.png'
  },
  'megane': {
    name: 'رنو مگان ۱۶۰۰ و ۲۰۰۰',
    group: 'renault',
    engine: 'موتور ۱۶۰۰ و ۲۰۰۰ سی‌سی رنو فرانسه',
    title: 'قطعات فنی و جلوبندی رنو مگان',
    sub: 'کمک‌فنرهای اصلی، لنت ترمز تکستار فرانسه، پمپ بنزین',
    compatText: 'سازگار با رنو مگان',
    img: 'images/shop/pride-car-thumb.png'
  },
  'mvm315': {
    name: 'مدیران خودرو ام‌وی‌ام MVM 315',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ سی‌سی ۱۶ سوپاپ ACTECO',
    title: 'لوازم یدکی و جلوبندی ام‌وی‌ام ۳۱۵ هاچ‌بک و پلاس',
    sub: 'دیسک و صفحه وارداتی، تسمه تایم، فیلترهای شرکتی',
    compatText: 'سازگار با MVM 315',
    img: 'images/shop/pride-car-thumb.png'
  },
  'mvm_x22': {
    name: 'ام‌وی‌ام MVM X22 و X22 پرو توربو',
    group: 'chinese',
    engine: 'موتور ۳ سیلندر توربو و ۴ سیلندر تنفس طبیعی',
    title: 'قطعات یدکی و مصرفی ام‌وی‌ام X22 و X22 پرو',
    sub: 'روغن‌های گرید SN توربو، لنت‌های سرامیکی بدون بو',
    compatText: 'سازگار با MVM X22',
    img: 'images/shop/pride-car-thumb.png'
  },
  'mvm_x33': {
    name: 'ام‌وی‌ام MVM X33 (دنده‌ای / اتومات CVT / S)',
    group: 'chinese',
    engine: 'موتور ۲۰۰۰ سی‌سی چری',
    title: 'قطعات فنی، موتوری و جلوبندی ام‌وی‌ام X33',
    sub: 'دیسک ترمز بزرگ، کمک‌فنر گازی، کیت تسمه تایم',
    compatText: 'سازگار با MVM X33',
    img: 'images/shop/pride-car-thumb.png'
  },
  'tiggo5': {
    name: 'چری تیگو ۵ (اکسلنت و لاکچری)',
    group: 'chinese',
    engine: 'موتور ۲۰۰۰ سی‌سی تنفس طبیعی با گیربکس CVT',
    title: 'لوازم یدکی و مصرفی شاسی‌بلند چری تیگو ۵',
    sub: 'لنت‌های ضدحرارت، فیلتر روغن اصلی، تیغه‌های برف‌پاک‌کن',
    compatText: 'سازگار با تیگو ۵',
    img: 'images/shop/pride-car-thumb.png'
  },
  'tiggo7': {
    name: 'چری و فونیکس تیگو ۷ پرو توربو',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ توربوشارژ با گیربکس دوکلاچه',
    title: 'قطعات یدکی اورجینال فونیکس و تیگو ۷ پرو',
    sub: 'لنت‌های سرامیکی، شمع ایریدیوم NGK، فیلترهای ۴ گانه',
    compatText: 'سازگار با تیگو ۷ پرو',
    img: 'images/shop/pride-car-thumb.png'
  },
  'arrizo5': {
    name: 'چری آریزو ۵ توربو و آریزو ۶ پرو',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ توربوشارژر',
    title: 'لوازم یدکی چری آریزو ۵ و آریزو ۶',
    sub: 'روغن موتور 5W-30 تمام سنتتیک، لنت‌های تقویت‌شده',
    compatText: 'سازگار با آریزو ۵ و ۶',
    img: 'images/shop/pride-car-thumb.png'
  },
  'jac_j4': {
    name: 'کرمان موتور جک JAC J4 اقتصادی',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ سی‌سی با زمان‌بندی متغیر VVT',
    title: 'تمام لوازم یدکی و جلوبندی جک J4',
    sub: 'دیسک و صفحه، لنت ترمز شرکتی کرمان موتور، فیلترها',
    compatText: 'سازگار با جک J4',
    img: 'images/shop/pride-car-thumb.png'
  },
  'jac_s5': {
    name: 'جک JAC S5 توربو (دنده‌ای و اتومات ۲ لیتری و ۱۵۰۰)',
    group: 'chinese',
    engine: 'موتور ۲۰۰۰ سی‌سی توربوشارژر پرقدرت',
    title: 'لوازم موتوری و جلوبندی شاسی‌بلند جک S5',
    sub: 'باتری ۷۴ آمپر، شمع‌های ایریدیوم ژاپنی، لنت سرامیکی',
    compatText: 'سازگار با جک S5',
    img: 'images/shop/pride-car-thumb.png'
  },
  'brilliance': {
    name: 'پارس خودرو برلیانس H330 و H320 (۱.۵ و ۱.۶۵)',
    group: 'chinese',
    engine: 'موتور BM15 و BM16 با گیربکس اتومات',
    title: 'لوازم یدکی برلیانس سری ۳۰۰ (H330 / H320)',
    sub: 'کمک‌فنرهای فابریک، لنت ترمز بدون سوت، دیسک چرخ',
    compatText: 'سازگار با برلیانس H330',
    img: 'images/shop/pride-car-thumb.png'
  },
  'kmc_t8': {
    name: 'کی‌ام‌سی KMC T8 پیکاپ دو دیفرانسیل',
    group: 'chinese',
    engine: 'موتور ۲۰۰۰ توربو دو دیفرانسیل',
    title: 'قطعات آفرود و یدکی سنگین کی‌ام‌سی KMC T8',
    sub: 'باتری ۷۰ آمپر پایه بلند، کلاچ دوبل تقویت‌شده، لنت سرامیکی',
    compatText: 'سازگار با KMC T8',
    img: 'images/shop/pride-car-thumb.png'
  },
  'haima_s7': {
    name: 'ایران خودرو هایما S7 پلاس توربو و 8S',
    group: 'chinese',
    engine: 'موتور ۱.۸ لیتری توربو ۱۷۰ اسب',
    title: 'لوازم یدکی هایما S7 توربو و هایما 8S',
    sub: 'باتری ۷۴ آمپر اتمیک، روغن سنتتیک، فیلترهای اصلی',
    compatText: 'سازگار با هایما S7',
    img: 'images/shop/pride-car-thumb.png'
  },
  'fidelity': {
    name: 'بهمن موتور فیدلیتی پرایم و پرستیژ',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ توربو و ۱۶۰۰ TGDI',
    title: 'لوازم یدکی لوکس بهمن موتور فیدلیتی',
    sub: 'لنت‌های ترمز کربنی، فیلتر کابین نانو، شمع‌های پایه بلند',
    compatText: 'سازگار با فیدلیتی',
    img: 'images/shop/pride-car-thumb.png'
  },
  'dignity': {
    name: 'بهمن موتور دیگنیتی پرایم و پرستیژ',
    group: 'chinese',
    engine: 'موتور ۱۵۰۰ توربو و ۲۰۰۰ سی‌سی GDI',
    title: 'قطعات فنی و تزئیناتی بهمن دیگنیتی پرایم و پرستیژ',
    sub: 'روغن گیربکس CVT و AT، لنت‌های اصل بدون صدا',
    compatText: 'سازگار با دیگنیتی',
    img: 'images/shop/pride-car-thumb.png'
  },
  'peykan': {
    name: 'ایران خودرو پیکان و پیکان وانت ۱۶۰۰',
    group: 'ikco',
    engine: 'موتور ۱۶۰۰ کاربراتور و انژکتوری پیکان',
    title: 'لوازم یدکی و قطعات موتوری پیکان و پیکان وانت',
    sub: 'دیسک و صفحه سنگین، دلکو، پمپ بنزین، رادیاتور مسی',
    compatText: 'سازگار با پیکان',
    img: 'images/shop/pride-car-thumb.png'
  },
  'santafe': {
    name: 'هیوندای سانتافه (ix45 و DM)',
    group: 'import',
    engine: 'موتور ۲۴۰۰ سی‌سی MPI و GDI',
    title: 'لوازم یدکی اصلی جنیون پارت هیوندای سانتافه',
    sub: 'باتری ۷۰ آمپر، لنت‌های سرامیکی، شمع‌های ایریدیوم NGK',
    compatText: 'سازگار با هیوندای سانتافه',
    img: 'images/shop/pride-car-thumb.png'
  },
  'cerato': {
    name: 'کیا سراتو سایپایی و وارداتی (۱۶۰۰ و ۲۰۰۰)',
    group: 'import',
    engine: 'موتور ۱۶۰۰ و ۲۰۰۰ سی‌سی ۱۶ سوپاپ',
    title: 'قطعات یدکی اصلی موبیس و جنیون کیا سراتو',
    sub: 'کیت جلوبندی، لنت ترمز بدون لرزش، فیلترهای شرکتی',
    compatText: 'سازگار با کیا سراتو',
    img: 'images/shop/pride-car-thumb.png'
  }
};

let currentSelectedCar = 'pride';

// دیتابیس کامل محصولات دسته‌بندی‌ها با مشخصات دقیق جهت مقایسه فنی
const categoryDataMap = {
  'battery': {
    title: 'باتری و سیستم برق خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#F59E0B" style="display:inline-block; vertical-align:middle; margin-left:3px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    count: '۵۴ کالا',
    products: [
      {
        id: 'bat-suzuki-60',
        title: 'باتری ۶۰ آمپر سوزوکی ژاپن اتمیک (سیلد شارژ)',
        brand: 'SUZUKI JAPAN • سپاهان',
        origin: 'تحت لیسانس سوزوکی ژاپن',
        warranty: '۲۴ ماه گارانتی تعویض طلایی',
        shipping: 'پیک فوری ۲ ساعته با نصب در محل / تیپاکس / پیشتاز',
        specs: {
          'ظرفیت (آمپراژ)': '۶۰ آمپر ساعت',
          'نوع تکنولوژی': 'سیلد اتمی Maintenance Free (MF)',
          'جریان استارت سرد (CCA)': '540 آمپر',
          'مدت گارانتی': '۲۴ ماه تعویض بی قید و شرط',
          'خدمات ویژه': 'ارسال و نصب رایگان در محل + تست دینام',
          'تخفیف داغی': 'کسر ۱,۰۰۰,۰۰۰ تومان از قیمت پایه'
        },
        price: 2450000,
        priceFmt: '۲,۴۵۰,۰۰۰ تومان',
        oldPriceFmt: '۳,۴۵۰,۰۰۰ تومان',
        discount: '۲۹٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 5.0,
        compat: 'پژو ۲۰۶، ۲۰۷، رانا، دنا، تارا، پارس'
      },
      {
        id: 'bat-orbital-50',
        title: 'باتری ۵۰ آمپر اوربیتال وان سیلور اتمی',
        brand: 'ORBITAL SILVER • سپاهان',
        origin: 'ایران - سپاهان باتری',
        warranty: '۲۰ ماه گارانتی تعویض شرکتی',
        shipping: 'پیک فوری ۲ ساعته با نصب در محل / تیپاکس / پیشتاز',
        specs: {
          'ظرفیت (آمپراژ)': '۵۰ آمپر ساعت',
          'نوع تکنولوژی': 'سیلد کلسیمی بدون نیاز به آب مقطر',
          'جریان استارت سرد (CCA)': '480 آمپر',
          'مدت گارانتی': '۲۰ ماه تعویض سراسری',
          'خدمات ویژه': 'ارسال و نصب رایگان در محل',
          'تخفیف داغی': 'کسر ۷۰۰,۰۰۰ تومان با تحویل داغی'
        },
        price: 1850000,
        priceFmt: '۱,۸۵۰,۰۰۰ تومان',
        oldPriceFmt: '۲,۵۵۰,۰۰۰ تومان',
        discount: '۲۷٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 4.9,
        compat: 'پراید، تیبا، کوییک، ساینا، رنو پی‌کی'
      },
      {
        id: 'bat-atomic-66',
        title: 'باتری ۶۶ آمپر اتمیک سیلد کلسیمی پرقدرت',
        brand: 'ATOMIC • سپاهان باتری',
        origin: 'ایران - سپاهان باتری',
        warranty: '۱۸ ماه گارانتی تعویض',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'ظرفیت (آمپراژ)': '۶۶ آمپر ساعت',
          'نوع تکنولوژی': 'اتمی کلسیم پلاس تقویت‌شده',
          'جریان استارت سرد (CCA)': '580 آمپر',
          'مدت گارانتی': '۱۸ ماه تعویض',
          'خدمات ویژه': 'تست مدار شارژ و دینام در محل',
          'تخفیف داغی': 'کسر ۸۵۰,۰۰۰ تومان'
        },
        price: 2650000,
        priceFmt: '۲,۶۵۰,۰۰۰ تومان',
        oldPriceFmt: '۳,۵۰۰,۰۰۰ تومان',
        discount: '۲۴٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 4.8,
        compat: 'سمند، پژو ۴۰۵، پارس، سورن، زانتیا'
      },
      {
        id: 'bat-saba-74',
        title: 'باتری ۷۴ آمپر واریان سیلد MF صبا باتری',
        brand: 'VARIAN • صبا باتری',
        origin: 'ایران - صبا باتری',
        warranty: '۱۵ ماه گارانتی شرکتی صبا',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / باربری سنگین',
        specs: {
          'ظرفیت (آمپراژ)': '۷۴ آمپر ساعت',
          'نوع تکنولوژی': 'سیلد اسیدی استاندارد',
          'جریان استارت سرد (CCA)': '620 آمپر',
          'مدت گارانتی': '۱۵ ماه ضمانت سراسری صبا',
          'خدمات ویژه': 'ارزان‌ترین قیمت در بازار کشور',
          'تخفیف داغی': 'کسر ۹۰۰,۰۰۰ تومان'
        },
        price: 2200000,
        priceFmt: '۲,۲۰۰,۰۰۰ تومان',
        oldPriceFmt: '۳,۱۰۰,۰۰۰ تومان',
        discount: '۲۹٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 4.7,
        compat: 'دنا پلاس توربو، هایما، جک S5، سانتافه'
      },
      {
        id: 'bat-borna-55',
        title: 'باتری ۵۵ آمپر گلوبال سیلد اتمی صفحات کلسیمی',
        brand: 'GLOBAL • برنا باتری',
        origin: 'ایران - برنا باتری',
        warranty: '۱۴ ماه گارانتی معتبر',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'ظرفیت (آمپراژ)': '۵۵ آمپر ساعت',
          'نوع تکنولوژی': 'سیلد MF مجهز به چشمی شارژ',
          'جریان استارت سرد (CCA)': '500 آمپر',
          'مدت گارانتی': '۱۴ ماه تعویض',
          'خدمات ویژه': 'پوشش قطب‌ها و بدنه ضداسید',
          'تخفیف داغی': 'کسر ۷۲۰,۰۰۰ تومان'
        },
        price: 1980000,
        priceFmt: '۱,۹۸۰,۰۰۰ تومان',
        oldPriceFmt: '۲,۷۰۰,۰۰۰ تومان',
        discount: '۲۶٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 4.6,
        compat: 'پژو ۲۰۶، ۲۰۷، رنو تندر ۹۰، ساندرو'
      },
      {
        id: 'bat-suzuki-70',
        title: 'باتری ۷۰ آمپر پایه بلند سوزوکی سیلد شارژ سنگین',
        brand: 'SUZUKI JAPAN • سپاهان',
        origin: 'تحت لیسانس ژاپن',
        warranty: '۲۴ ماه تعویض طلایی',
        shipping: 'پیک فوری / تیپاکس / باربری ویژه قطعات سنگین',
        specs: {
          'ظرفیت (آمپراژ)': '۷۰ آمپر ساعت پایه بلند',
          'نوع تکنولوژی': 'Heavy Duty سیلد برای مصارف سخت',
          'جریان استارت سرد (CCA)': '650 آمپر',
          'مدت گارانتی': '۲۴ ماه تعویض بی قید و شرط',
          'خدمات ویژه': 'مقاوم در برابر تکان‌های شدید آفرود',
          'تخفیف داغی': 'کسر ۱,۰۰۰,۰۰۰ تومان'
        },
        price: 3100000,
        priceFmt: '۳,۱۰۰,۰۰۰ تومان',
        oldPriceFmt: '۴,۱۰۰,۰۰۰ تومان',
        discount: '۲۴٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 5.0,
        compat: 'نیسان آبی Z24، وانت پادرا، کی‌ام‌سی T8'
      }
    ]
  },
  'lent': {
    title: 'لنت، دیسک و سیستم ترمز خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#EF4444" style="display:inline-block; vertical-align:middle; margin-left:3px;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>',
    count: '۸۶ کالا',
    products: [
      {
        id: 'lent-textar',
        title: 'لنت ترمز جلو تکستار TEXTAR اصل فرانسه',
        brand: 'TEXTAR • فرانسه',
        origin: 'فرانسه اصل با هولوگرام لیزری',
        warranty: '۱۲ ماه ضمانت اصالت فیزیکی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'نوع لنت': 'نیمه‌متالیک ارگانیک بدون آزبست',
          'کشور سازنده': 'فرانسه با کد تایید سامانه اصالت',
          'میزان تولید سوت و گرده': 'صفر (بی‌صدا و نرم)',
          'طول عمر کارکرد': 'بیش از ۴۵,۰۰۰ کیلومتر',
          'ویژگی فنی': 'مقاومت حرارتی تا ۷۰۰ درجه سانتی‌گراد',
          'پک بسته': 'شامل ۴ لقه لنت برای چرخ‌های جلو'
        },
        price: 880000,
        priceFmt: '۸۸۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۱۵۰,۰۰۰ تومان',
        discount: '۲۳٪',
        img: 'images/tiles/لنت.webp',
        rating: 4.9,
        compat: 'پژو ۲۰۶، ۲۰۷، پارس، رانا، دنا، پراید'
      },
      {
        id: 'lent-elig',
        title: 'لنت ترمز سرامیکی الیگ ELIG ژاپن فوق‌العاده نرم',
        brand: 'ELIG • ژاپن',
        origin: 'تولید ژاپن اورجینال',
        warranty: 'ضمانت بدون سوت و بازگشت وجه',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'نوع لنت': 'تمام سرامیکی نانوتکنولوژی',
          'کشور سازنده': 'ژاپن',
          'میزان تولید سوت و گرده': 'کاملاً بدون سوت و بدون دوده چرخ',
          'طول عمر کارکرد': 'بیش از ۶۰,۰۰۰ کیلومتر',
          'ویژگی فنی': 'حفظ قدرت ترمز در دیسک‌های داغ',
          'پک بسته': 'یک دست لنت سرامیکی جلو'
        },
        price: 1150000,
        priceFmt: '۱,۱۵۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۴۵۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/tiles/لنت.webp',
        rating: 5.0,
        compat: 'پراید، تیبا، کوییک، ساینا، دنا، تارا'
      },
      {
        id: 'lent-brembo',
        title: 'دیسک ترمز سوراخ‌دار خنک‌شونده برمبو BREMBO',
        brand: 'BREMBO • ایتالیا',
        origin: 'ایتالیا با بارکد اصالت',
        warranty: '۱۸ ماه گارانتی عدم تابیدگی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / باربری',
        specs: {
          'نوع قطعه': 'دیسک چرخ شیاردار و سوراخ‌دار اسپرت',
          'کشور سازنده': 'ایتالیا',
          'سیستم خنک‌کاری': 'کانال‌های داخلی ونتوری و دفع سریع حرارت',
          'طول عمر کارکرد': 'بیش از ۱۲۰,۰۰۰ کیلومتر',
          'ویژگی فنی': 'کاهش خط ترمز تا ۳۰ درصد در سرعت بالا',
          'پک بسته': 'جفت دیسک چرخ جلو'
        },
        price: 1450000,
        priceFmt: '۱,۴۵۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۹۰۰,۰۰۰ تومان',
        discount: '۲۴٪',
        img: 'images/tiles/لنت.webp',
        rating: 4.8,
        compat: 'پژو ۲۰۶، ۲۰۷، پارس TU5، دنا پلاس، سمند'
      },
      {
        id: 'lent-emco',
        title: 'لنت ترمز امکو EMCO استاندارد شرکتی ایساکو',
        brand: 'EMCO • ایران',
        origin: 'ایران استاندارد خط تولید',
        warranty: 'گارانتی تعویض ۶ ماهه',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'نوع لنت': 'متالیک استاندارد با فرمولاسیون فابریک',
          'کشور سازنده': 'ایران - تحت نظارت کنترل کیفیت',
          'میزان تولید سوت': 'استاندارد شرکتی',
          'طول عمر کارکرد': '۳۵,۰۰۰ کیلومتر',
          'ویژگی فنی': 'قیمت اقتصادی و سازگاری بالا',
          'پک بسته': 'یک دست لنت جلو'
        },
        price: 490000,
        priceFmt: '۴۹۰,۰۰۰ تومان',
        oldPriceFmt: '۶۸۰,۰۰۰ تومان',
        discount: '۲۸٪',
        img: 'images/tiles/لنت.webp',
        rating: 4.5,
        compat: 'پراید، تیبا، کوییک، پژو ۴۰۵، سمند'
      }
    ]
  },
  'clutch': {
    title: 'دیسک و صفحه و کیت کلاچ',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#2563EB" style="display:inline-block; vertical-align:middle; margin-left:3px;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    count: '۴۲ کالا',
    products: [
      {
        id: 'clutch-valeo',
        title: 'کیت کلاچ والئو جعبه سبز اصل فرانسه با پریدمپر',
        brand: 'VALEO • فرانسه',
        origin: 'فرانسه با لیبل هرینگتون و بارکد شرکتی',
        warranty: '۱۲ ماه گارانتی بدون لرزش و نرمی پدال',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / باربری قطعات سنگین',
        specs: {
          'تیپ دیسک': '۴ فنره دوبل با پریدمپر شتابی',
          'کشور سازنده': 'فرانسه اصلی (Green Box)',
          'میزان نرمی پدال': 'فوق‌العاده نرم (پدال پنبه‌ای)',
          'طول عمر استاندارد': 'بیش از ۹۰,۰۰۰ کیلومتر',
          'ویژگی فنی': 'حذف کامل لرزش اولیه در ترافیک',
          'محتویات جعبه': 'دیسک کلاچ + صفحه اصطکاکی + بلبرینگ کلاچ SKF'
        },
        price: 4100000,
        priceFmt: '۴,۱۰۰,۰۰۰ تومان',
        oldPriceFmt: '۵,۲۰۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/shop/clutch-disc-thumb.webp',
        rating: 5.0,
        compat: 'پژو ۲۰۶، ۲۰۷، پارس، ۴۰۵، سمند، دنا'
      },
      {
        id: 'clutch-daikin',
        title: 'کیت کلاچ دایکن ژاپن DAIKIN / EXEDY شتاب‌افزا',
        brand: 'DAIKIN EXEDY • ژاپن',
        origin: 'ژاپن اصل',
        warranty: '۱۸ ماه گارانتی شتاب و نرمی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'تیپ دیسک': 'صفحه ۶ فنره مسابقه‌ای شتابی',
          'کشور سازنده': 'ژاپن',
          'میزان نرمی پدال': 'بسیار سبک و نرم',
          'طول عمر استاندارد': '۱۰۰,۰۰۰ کیلومتر',
          'ویژگی فنی': 'افزایش چشمگیر شتاب در سربالایی‌ها',
          'محتویات جعبه': 'دیسک و صفحه و بلبرینگ ژاپنی'
        },
        price: 3850000,
        priceFmt: '۳,۸۵۰,۰۰۰ تومان',
        oldPriceFmt: '۴,۹۰۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/shop/clutch-disc-thumb.webp',
        rating: 4.9,
        compat: 'پراید، تیبا، کوییک، ساینا، رنو ال ۹۰'
      },
      {
        id: 'clutch-seco',
        title: 'کیت کلاچ سکو SECO کره جنوبی اصل',
        brand: 'SECO • کره جنوبی',
        origin: 'کره جنوبی',
        warranty: '۱۲ ماه گارانتی تعویض',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'تیپ دیسک': 'طراحی فابریک کره‌ای ضدحرارت',
          'کشور سازنده': 'کره جنوبی',
          'میزان نرمی پدال': 'نرم و عملکرد بدون سر و صدا',
          'طول عمر استاندارد': '۷۵,۰۰۰ کیلومتر',
          'ویژگی فنی': 'عدم بکسوات صفحه زیر فشار بار سنگین',
          'محتویات جعبه': 'دیسک، صفحه و بلبرینگ'
        },
        price: 3250000,
        priceFmt: '۳,۲۵۰,۰۰۰ تومان',
        oldPriceFmt: '۴,۱۰۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/shop/clutch-disc-thumb.webp',
        rating: 4.8,
        compat: 'پراید، کوییک، ساینا، پژو ۴۰۵'
      }
    ]
  },
  'oil': {
    title: 'روغن موتور و فیلترهای خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#059669" style="display:inline-block; vertical-align:middle; margin-left:3px;"><path d="M12 2c-4 0-7 1.34-7 3v14c0 1.66 3 3 7 3s7-1.34 7-3V5c0-1.66-3-3-7-3zm0 2c3.31 0 5 1 5 1s-1.69 1-5 1-5-1-5-1 1.69-1 5-1zm-5 14v-2.22c1.21.72 3.03 1.22 5 1.22s3.79-.5 5-1.22V18c0 .66-2 1.5-5 1.5s-5-.84-5-1.5z"/></svg>',
    count: '۱۲۰ کالا',
    products: [
      {
        id: 'oil-castrol',
        title: 'روغن موتور کاسترول مگناتک 10W-40 SN اورجینال ۴ لیتری',
        brand: 'CASTROL • انگلستان',
        origin: 'انگلستان با لیبل واردات شرکتی',
        warranty: 'تضمین ۱۰۰٪ اصالت روغن',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'سطح ویسکوزیته': '10W-40 نیمه‌سنتتیک',
          'سطح استاندارد API': 'API SN (بالاترین استاندارد روانکاری)',
          'مولکول‌های هوشمند': 'مولکول‌های مگناتک چسبنده به قطعات فلزی',
          'کارکرد مفید': '۸,۰۰۰ الی ۱۰,۰۰۰ کیلومتر',
          'حجم قوطی': '۴ لیتر فلزی ضددستکاری',
          'هدیه ویژه': 'همراه با فیلتر روغن هدیه سرکان'
        },
        price: 790000,
        priceFmt: '۷۹۰,۰۰۰ تومان',
        oldPriceFmt: '۹۸۰,۰۰۰ تومان',
        discount: '۱۹٪',
        img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0',
        rating: 4.9,
        compat: 'پراید، پژو ۲۰۶، ۲۰۷، پارس، دنا، سمند'
      },
      {
        id: 'oil-behran',
        title: 'روغن تمام سنتتیک بهران رانا 5W-30 SN پلاس',
        brand: 'BEHRAN • بهران',
        origin: 'ایران - نفت بهران',
        warranty: 'تضمین اصالت پالایشگاهی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'سطح ویسکوزیته': '5W-30 فول سنتتیک',
          'سطح استاندارد API': 'API SN PLUS ویژه موتورهای توربوشارژ',
          'محافظت از موتور': 'جلوگیری کامل از پدیده LSPI در موتورهای توربو',
          'کارکرد مفید': '۱۰,۰۰۰ الی ۱۲,۰۰۰ کیلومتر',
          'حجم قوطی': '۴ لیتر شرکتی',
          'ویژگی فنی': 'کاهش صدای سوپاپ‌ها و استارت نرم در زمستان'
        },
        price: 680000,
        priceFmt: '۶۸۰,۰۰۰ تومان',
        oldPriceFmt: '۸۵۰,۰۰۰ تومان',
        discount: '۲۰٪',
        img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0',
        rating: 4.8,
        compat: 'تارا، شاهین توربو، دنا توربو، جک S5، هایما'
      },
      {
        id: 'oil-addinol',
        title: 'روغن موتور تمام سنتتیک ادینول ADDINOL آلمان 5W-40',
        brand: 'ADDINOL • آلمان',
        origin: 'آلمان ۱۰۰٪ وارداتی',
        warranty: 'ضمانت اصالت بارکد گمرکی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'سطح ویسکوزیته': '5W-40 تمام سنتتیک',
          'سطح استاندارد API': 'API SP / SN',
          'تاییدیه خودروسازان': 'دارای تاییدیه مرسدس‌بنز، پورشه و رنو',
          'کارکرد مفید': '۱۲,۰۰۰ کیلومتر با حفظ گرانروی',
          'حجم قوطی': '۵ لیتر پلمپ آلمان',
          'ویژگی فنی': 'شستشوی رسوبات کربنی داخل موتور'
        },
        price: 1450000,
        priceFmt: '۱,۴۵۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۸۵۰,۰۰۰ تومان',
        discount: '۲۲٪',
        img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0',
        rating: 5.0,
        compat: 'پژو ۲۰۰۸، هایما، سراتو، دنا پلاس، تندر ۹۰'
      }
    ]
  },
  'spark': {
    title: 'شمع و سیستم جرقه‌زنی خودرو',
    icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6L6 18M9 4l-5 5M20 15l-5 5M15 9l-3 3M12 12l-3 3"/></svg>',
    count: '۳۸ کالا',
    products: [
      {
        id: 'spark-ngk',
        title: 'شمع ایریدیوم لیزر NGK ژاپن سوزنی (دست ۴ عددی)',
        brand: 'NGK • ژاپن',
        origin: 'ژاپن اصل کد لیزری حک‌شده',
        warranty: 'تضمین ۱۰۰٪ اصالت ژاپن',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'آلیاژ الکترود': 'سوزنی ایریدیوم با نوک پلاتینیوم',
          'کشور سازنده': 'ژاپن',
          'طول عمر کارکرد': 'بیش از ۱۰۰,۰۰۰ کیلومتر بدون افت جرقه',
          'کاهش مصرف سوخت': 'تا ۱۲ درصد کاهش مصرف بنزین',
          'ویژگی فنی': 'رفع کامل کپ کردن اولیه و ریپ زدن در شتاب‌گیری',
          'تعداد در بسته': 'دست کامل ۴ عددی'
        },
        price: 1180000,
        priceFmt: '۱,۱۸۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۵۰۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/shop/spark-plug-thumb.png',
        rating: 5.0,
        compat: 'پراید، پژو ۲۰۶، ۲۰۷، پارس TU5، دنا، شاهین'
      },
      {
        id: 'spark-bosch',
        title: 'شمع دابل پلاتینیوم بوش BOSCH آلمان سوزنی (۴ عددی)',
        brand: 'BOSCH • آلمان',
        origin: 'آلمان با هولوگرام لیزری',
        warranty: 'ضمانت اصالت کالا',
        shipping: 'پیک فوری / تیپاکس / پست پیشتاز',
        specs: {
          'آلیاژ الکترود': 'دابل پلاتینیوم مقاوم به حرارت بالا',
          'کشور سازنده': 'آلمان',
          'طول عمر کارکرد': '۸۰,۰۰۰ کیلومتر',
          'کاهش مصرف سوخت': 'بهبود احتراق و کاهش آلایندگی',
          'ویژگی فنی': 'جرقه ۳۶۰ درجه و استارت بسیار سریع در سرما',
          'تعداد در بسته': 'دست ۴ تایی'
        },
        price: 960000,
        priceFmt: '۹۶۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۲۵۰,۰۰۰ تومان',
        discount: '۲۳٪',
        img: 'images/shop/spark-plug-thumb.png',
        rating: 4.8,
        compat: 'پژو ۴۰۵، سمند EF7، دنا پلاس، رنو ال ۹۰'
      }
    ]
  },
  'tire': {
    title: 'تایر، لاستیک و رینگ سواری',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#3B82F6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="#FFF"/></svg>',
    count: '۶۴ کالا',
    products: [
      {
        id: 'tire-kavir-205',
        title: 'لاستیک ۲۰۵/۶۰R۱۴ کویر تایر رادیال جفتی طرح اسپرت',
        brand: 'KAVIR TIRE • کویر تایر',
        origin: 'ایران - تاریخ تولید روز جاری',
        warranty: '۴۸ ماه گارانتی شرکتی کویر تایر',
        shipping: 'باربری ویژه قطعات سنگین / تیپاکس / پیک',
        specs: {
          'سایز تایر': '205/60R14 (پهن اسپرت)',
          'نوع تایر': 'رادیال تیوبلس ۴ فصل',
          'شاخص سرعت و بار': '88H (حداکثر ۲۱۰ کیلومتر بر ساعت)',
          'مدت گارانتی': '۴ سال گارانتی کتبی شرکتی',
          'ویژگی فنی': 'چسبندگی فوق‌العاده در پیچ و ترمزهای شدید',
          'تعداد در بسته': 'یک جفت (۲ حلقه لاستیک نو)'
        },
        price: 3850000,
        priceFmt: '۳,۸۵۰,۰۰۰ تومان',
        oldPriceFmt: '۴,۵۰۰,۰۰۰ تومان',
        discount: '۱۵٪',
        img: 'images/tiles/لاستیک.webp',
        rating: 4.8,
        compat: 'پژو ۲۰۶، ۲۰۷، پارس، ۴۰۵، رانا'
      },
      {
        id: 'tire-yazd-185',
        title: 'لاستیک ۱۸۵/۶۵R۱۴ یزد تایر طرح مرکوری جفتی',
        brand: 'YAZD TIRE • یزد تایر',
        origin: 'ایران - تکنولوژی وردشتاین هلند',
        warranty: '۳۶ ماه ضمانت تعویض',
        shipping: 'باربری قطعات سنگین / تیپاکس',
        specs: {
          'سایز تایر': '185/65R14 استاندارد',
          'نوع تایر': 'رادیال با فناوری هلند',
          'شاخص سرعت و بار': '86H',
          'مدت گارانتی': '۳ سال ضمانت',
          'ویژگی فنی': 'فرمان‌پذیری نرم و کم‌صدا در اتوبان',
          'تعداد در بسته': '۲ حلقه تایر'
        },
        price: 3400000,
        priceFmt: '۳,۴۰۰,۰۰۰ تومان',
        oldPriceFmt: '۳,۹۵۰,۰۰۰ تومان',
        discount: '۱۴٪',
        img: 'images/tiles/لاستیک.webp',
        rating: 4.7,
        compat: 'پراید، تیبا، کوییک، ساینا، پژو ۲۰۶'
      }
    ]
  },
  'headlight': {
    title: 'هدلایت، چراغ و روشنایی خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9333EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 5.5c4.2 0 7.5 2.9 7.5 6.5s-3.3 6.5-7.5 6.5h-2v-13h2z"/><line x1="7.5" y1="7.5" x2="2.5" y2="9.8"/><line x1="7.5" y1="10.5" x2="2.5" y2="12.8"/><line x1="7.5" y1="13.5" x2="2.5" y2="15.8"/><line x1="7.5" y1="16.5" x2="2.5" y2="18.8"/></svg>',
    count: '۷۵ کالا',
    products: [
      {
        id: 'hl-conpex-m8',
        title: 'هدلایت سه حالته لنزدار کانپکس Conpex M8 Pro توربو ۲۴۰ وات',
        brand: 'CONPEX • کانپکس',
        origin: 'تایوان اصلی چیپ CSP سئول',
        warranty: '۱۲ ماه گارانتی تعویض بی قید و شرط',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'توان خروجی': '۲۴۰ وات واقعی',
          'میزان روشنایی': '۲۴,۰۰۰ لومن خط کات دقیق',
          'سیستم خنک‌کننده': 'فن توربو سایلنت ۱۲,۰۰۰ دور در دقیقه',
          'رنگ نور': 'سفید یخی ۶۰۰۰ کلوین بدون اذیت چشم مقابل',
          'ویژگی فنی': 'بدون نیاز به دستکاری سیم‌کشی و کاملاً ضدآب IP68',
          'محتویات': 'یک جفت لامپ هدلایت به همراه درایور هوشمند کنباس'
        },
        price: 1250000,
        priceFmt: '۱,۲۵۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۶۵۰,۰۰۰ تومان',
        discount: '۲۴٪',
        img: 'images/tiles/هدلایت_و_چراغ.webp',
        rating: 4.9,
        compat: 'پراید، پژو ۲۰۶، ۲۰۷، پارس، دنا، تارا'
      }
    ]
  },
  'suspension': {
    title: 'جلوبندی و سیستم تعلیق خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#E11D48"><path d="M12 2v20M8 6h8M6 10h12M8 14h8M6 18h12" stroke="#E11D48" stroke-width="2"/></svg>',
    count: '۹۴ کالا',
    products: [
      {
        id: 'susp-kds',
        title: 'کمک‌فنر گازی روغنی KDS با فنر لول لنزو (جفت جلو)',
        brand: 'KDS • کره جنوبی',
        origin: 'کره جنوبی اصل',
        warranty: '۱۸ ماه گارانتی تعویض طلایی',
        shipping: 'پیک فوری / تیپاکس / باربری سنگین',
        specs: {
          'نوع کمک': 'گاز و روغن فابریک دو محفظه‌ای',
          'کشور سازنده': 'کره جنوبی',
          'طول عمر کارکرد': 'بیش از ۱۰۰,۰۰۰ کیلومتر',
          'ویژگی فنی': 'حذف کامل کوبش دست‌انداز و حفظ تعادل در سرعت بالا',
          'محتویات': 'جفت کمک‌فنر جلو + فنرلول استاندارد'
        },
        price: 1850000,
        priceFmt: '۱,۸۵۰,۰۰۰ تومان',
        oldPriceFmt: '۲,۳۵۰,۰۰۰ تومان',
        discount: '۲۱٪',
        img: 'images/shop/clutch-disc-thumb.webp',
        rating: 4.8,
        compat: 'پراید، پژو ۲۰۶، ۲۰۷، پارس، سمند'
      }
    ]
  },
  'cooling': {
    title: 'رادیاتور و سیستم خنک‌کننده',
    icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg>',
    count: '۳۱ کالا',
    products: [
      {
        id: 'rad-koushesh',
        title: 'رادیاتور دولول آب کوشش رادیاتور آلومینیومی پرقدرت',
        brand: 'کوشش رادیاتور • ایران',
        origin: 'ایران استاندارد خط تولید',
        warranty: '۱۲ ماه گارانتی عدم نشتی',
        shipping: 'پیک فوری / تیپاکس / باربری',
        specs: {
          'نوع رادیاتور': 'آلومینیومی بریزینگ دولول ضخیم',
          'سیستم دفع حرارت': 'افت دمای موتور تا ۱۵ درجه در ترافیک تابستان',
          'مقاومت در برابر فشار': 'تست‌شده تا ۳ بار فشار هیدرواستاتیک',
          'گارانتی': 'یک سال ضمانت کوشش رادیاتور'
        },
        price: 1380000,
        priceFmt: '۱,۳۸۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۷۰۰,۰۰۰ تومان',
        discount: '۱۹٪',
        img: 'images/shop/battery-thumb.jpg',
        rating: 4.7,
        compat: 'پراید، پژو ۴۰۵، پارس، سمند، ۲۰۶'
      }
    ]
  },
  'audio': {
    title: 'سیستم صوتی و مانیتور خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#9333EA"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="#9333EA" stroke-width="2"/></svg>',
    count: '۴۸ کالا',
    products: [
      {
        id: 'audio-monitor',
        title: 'مانیتور اندروید ۱۱ اینچ فول تاچ با دوربین دنده‌عقب HD',
        brand: 'VOXX • وکس',
        origin: 'وارداتی درجه ۱ با پنل IPS ضدخش',
        warranty: '۱۸ ماه گارانتی شرکتی تعویض',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'سیستم‌عامل': 'اندروید ۱۲ قابل ارتقا',
          'پردازنده و رم': '۸ هسته‌ای با ۲ گیگ رم و ۳۲ گیگ حافظه',
          'صفحه‌نمایش': 'IPS زاویه دید ۱۷۸ درجه با رزولوشن 1080P',
          'امکانات ارتباطی': 'مسیریاب آنلاین نشان و بلد، وای‌فای، بلوتوث، کارپلی بی‌سیم',
          'لوازم جانبی': 'سوکت فابریک خودرو + دوربین دنده‌عقب دید در شب'
        },
        price: 3900000,
        priceFmt: '۳,۹۰۰,۰۰۰ تومان',
        oldPriceFmt: '۴,۸۰۰,۰۰۰ تومان',
        discount: '۱۹٪',
        img: 'images/tiles/سیستم_صوتی.webp',
        rating: 4.9,
        compat: 'پراید، پژو ۲۰۶، ۲۰۷، پارس، دنا، کوییک'
      }
    ]
  },
  'body': {
    title: 'قطعات بدنه، آینه و تزئینات',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#0D9488"><rect x="3" y="11" width="18" height="8" rx="2" stroke="#0D9488" stroke-width="2"/><path d="M5 11l2-5h10l2 5" stroke="#0D9488" stroke-width="2"/></svg>',
    count: '۶۲ کالا',
    products: [
      {
        id: 'body-mirror-crouse',
        title: 'آینه بغل برقی تاشو راهنمادار کروز (جفت راست و چپ)',
        brand: 'CROUSE • کروز',
        origin: 'ایران خط تولید فابریک',
        warranty: '۱۲ ماه گارانتی موتور الکتریکی',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پیشتاز',
        specs: {
          'نوع موتور': 'برقی تاشو اتوماتیک با گرمکن آینه',
          'چراغ راهنما': 'ال‌ای‌دی پرنور راهنمای جانبی',
          'رنگ قاب': 'رنگ کوره‌ای فابریک خط تولید',
          'گارانتی': 'یک سال گارانتی شرکتی کروز'
        },
        price: 850000,
        priceFmt: '۸۵۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۱۰۰,۰۰۰ تومان',
        discount: '۲۳٪',
        img: 'images/shop/pride-car-thumb.png',
        rating: 4.8,
        compat: 'پژو ۲۰۶، ۲۰۷، پارس، دنا پلاس'
      }
    ]
  },
  'tools': {
    title: 'ابزار، جک و تجهیزات امداد خودرو',
    icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="#EA580C"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    count: '۵۳ کالا',
    products: [
      {
        id: 'tool-air-pump',
        title: 'پمپ باد فندکی دو سیلندر فلزی سه‌کاره با گیج فشار',
        brand: 'RONIX • رونیکس',
        origin: 'تحت لیسانس با موتور تمام مس',
        warranty: '۱۲ ماه گارانتی رونیکس',
        shipping: 'پیک فوری ۲ ساعته / تیپاکس / پست پیشتاز',
        specs: {
          'نوع پمپ': 'دو سیلندر پرقدرت فلزی ۱۵۰ PSI',
          'منبع تغذیه': 'فندکی ۱۲ ولت و گیره مستقیم سر باتری',
          'امکانات': 'چراغ‌قوه اضطراری LED + شلنگ فنری ۵ متری + ۳ تبدیل باد',
          'زمان باد تایر': 'باد کردن کامل لاستیک پنچر زیر ۲ دقیقه'
        },
        price: 980000,
        priceFmt: '۹۸۰,۰۰۰ تومان',
        oldPriceFmt: '۱,۳۰۰,۰۰۰ تومان',
        discount: '۲۵٪',
        img: 'images/tiles/استعلام_خلافی.webp',
        rating: 4.9,
        compat: 'تمامی خودروهای سواری، وانت و شاسی‌بلند'
      }
    ]
  }
};

// لیست اقلام مقایسه (تا ۴ محصول)
let compareList = [];

// لیست اقلام سبد خرید
let cartList = [
  {
    id: 'bat-suzuki-60',
    title: 'باتری ۶۰ آمپر سوزوکی ژاپن',
    price: 2450000,
    priceFmt: '۲,۴۵۰,۰۰۰ تومان',
    qty: 1,
    img: 'images/shop/battery-thumb.jpg'
  }
];

// شیوه ارسال انتخاب‌شده (instant | tipax | post | freight)
let activeShippingMethod = 'instant';
const shippingRates = {
  'instant': { title: 'پیک اکسپرس فوری (زیر ۲ ساعت)', cost: 49000, costFmt: '۴۹,۰۰۰ تومان', time: 'کمتر از ۲ ساعت' },
  'tipax': { title: 'تیپاکس اکسپرس سراسری', cost: 58000, costFmt: '۵۸,۰۰۰ تومان', time: '۲۴ الی ۴۸ ساعته' },
  'post': { title: 'پست پیشتاز جمهوری اسلامی', cost: 38000, costFmt: '۳۸,۰۰۰ تومان', time: '۲ الی ۳ روز کاری' },
  'freight': { title: 'باربری ویژه قطعات سنگین', cost: 65000, costFmt: '۶۵,۰۰۰ تومان', time: '۲۴ الی ۷۲ ساعته' }
};

// ==================== افکت صوتی ریموت کی‌لس فابریک با Web Audio API ====================
function playCarChirpSound(){
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if(!AudioCtx) return;
    const ctx = new AudioCtx();
    if(ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    
    // بیپ اول ریموت
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1850, now);
    osc1.frequency.exponentialRampToValueAtTime(2500, now + 0.04);
    gain1.gain.setValueAtTime(0.06, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.045);

    // بیپ دوم ریموت
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2050, now + 0.09);
    osc2.frequency.exponentialRampToValueAtTime(2700, now + 0.13);
    gain2.gain.setValueAtTime(0.06, now + 0.09);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.09);
    osc2.stop(now + 0.135);
  } catch(e) {}
}

// تابعی برای رندر لیست ۳۸ تایی خودرو در مودال با فیلتر سرچ و گروه همراه با تصاویر واقعی کاتالوگ
function renderCarPickerList(keyword = '', group = 'all'){
  const listEl = document.getElementById('carPickerList');
  if(!listEl) return;
  listEl.innerHTML = '';

  const kw = keyword.trim().toLowerCase();

  for(const [key, car] of Object.entries(carDataMap)){
    if(group !== 'all' && car.group !== group) continue;
    if(kw && !car.name.toLowerCase().includes(kw) && !car.engine.toLowerCase().includes(kw)) continue;

    const isActive = currentSelectedCar === key;
    const item = document.createElement('div');
    item.className = `cpm-item ${isActive ? 'active' : ''}`;
    item.onclick = () => {
      playCarChirpSound();
      setCarFilter(key, null);
      closeCarPicker();
    };

    let groupBadge = '';
    if(car.group === 'saipa') groupBadge = '<span style="background:#FFF7ED; color:#EA580C; padding:1px 5px; border-radius:4px; font-size:8.5px; font-weight:800;">سایپا</span>';
    else if(car.group === 'ikco') groupBadge = '<span style="background:#EFF6FF; color:#2563EB; padding:1px 5px; border-radius:4px; font-size:8.5px; font-weight:800;">ایران‌خودرو</span>';
    else if(car.group === 'renault') groupBadge = '<span style="background:#FEFCE8; color:#CA8A04; padding:1px 5px; border-radius:4px; font-size:8.5px; font-weight:800;">رنو</span>';
    else if(car.group === 'chinese') groupBadge = '<span style="background:#FDF2F8; color:#DB2777; padding:1px 5px; border-radius:4px; font-size:8.5px; font-weight:800;">چینی و مونتاژ</span>';
    else if(car.group === 'import') groupBadge = '<span style="background:#F0FDF4; color:#16A34A; padding:1px 5px; border-radius:4px; font-size:8.5px; font-weight:800;">وارداتی</span>';

    const carImgSrc = getCarRealShowroomImage(key);
    const carCleanTitle = car.name.split('/')[0].trim();

    item.innerHTML = `
      <div class="cpm-thumb-box">
        <img src="${carImgSrc}" alt="${carCleanTitle}" class="cpm-thumb-img" loading="lazy">
      </div>
      <div class="cpm-meta-box">
        <div class="cpm-name-row">
          <b class="cpm-name">${car.name}</b>
          ${groupBadge}
        </div>
        <span class="cpm-eng">${car.engine}</span>
      </div>
      <div class="cpm-check-badge" title="${isActive ? 'خودروی فعال فعلی' : 'انتخاب این خودرو'}">
        ${isActive ? 
          '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>' : 
          '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>'}
      </div>
    `;
    listEl.appendChild(item);
  }
}

function filterCarModalList(val){
  const activeTab = document.querySelector('.cpm-tab.active');
  const group = activeTab ? activeTab.getAttribute('data-group') || 'all' : 'all';
  renderCarPickerList(val, group);
}

function filterCarGroup(grp, btn){
  document.querySelectorAll('.cpm-tab').forEach(t => t.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const searchInput = document.getElementById('carModalSearch');
  const val = searchInput ? searchInput.value : '';
  renderCarPickerList(val, grp);
}

// انتخاب خودرو و بهینه‌سازی فروشگاه

// نقشه اتصال تمامی مدل‌های خودرو به رندرهای واقعی و رسمی کاتالوگ سفید ناوگان
// ==================== پایگاه داده تصاویر نمای روبرو، پرژکتورها و فلاشر چشمک‌زن ۳۸ خودرو ====================
const CAR_FRONT_DATABASE = {
  // ۱. خانواده پراید و وانت
  'pride':        { img: 'images/cars_front/front-pride.webp',  hlL: [33.2, 54.5], hlR: [67.0, 54.5], hzL: [30.2, 55.5], hzR: [69.8, 55.5] },
  'pride151':     { img: 'images/cars_front/front-pride.webp',  hlL: [33.2, 54.5], hlR: [67.0, 54.5], hzL: [30.2, 55.5], hzR: [69.8, 55.5] },
  // ۲. خانواده تیبا، ساینا و کوییک (طراحی کاملاً مستقل و اختصاصی)
  'tiba':         { img: 'images/cars_front/front-tiba.png',   hlL: [32.3, 46.5], hlR: [67.3, 46.5], hzL: [27.8, 47.5], hzR: [71.8, 47.5] },
  'quick':        { img: 'images/cars_front/front-quik.webp',   hlL: [38.0, 50.0], hlR: [62.0, 50.0], hzL: [33.0, 50.0], hzR: [67.0, 50.0] },
  'saina':        { img: 'images/cars_front/front-saina.webp',  hlL: [31.1, 44.1], hlR: [68.2, 44.1], hzL: [26.6, 45.1], hzR: [72.7, 45.1] },
  // ۳. سایپا شاهین
  'shahin':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  // ۴. نیسان آبی زامیاد و پیکاپ‌ها
  'nissan':       { img: 'images/cars_front/front-nissan.webp', hlL: [29.8, 43.0], hlR: [70.2, 43.0], hzL: [35.0, 50.0], hzR: [65.0, 50.0] },
  'kmc_t8':       { img: 'images/cars_front/front-nissan.webp', hlL: [29.8, 43.0], hlR: [70.2, 43.0], hzL: [35.0, 50.0], hzR: [65.0, 50.0] },
  // ۵. پژو ۲۰۶
  'peugeot206_2': { img: 'images/cars_front/front-206.png',    hlL: [36.5, 47.0], hlR: [63.5, 47.0], hzL: [40.0, 49.5], hzR: [60.0, 49.5] },
  'peugeot206_5': { img: 'images/cars_front/front-206.png',    hlL: [36.5, 47.0], hlR: [63.5, 47.0], hzL: [40.0, 49.5], hzR: [60.0, 49.5] },
  'runna':        { img: 'images/cars_front/front-206.png',    hlL: [36.5, 47.0], hlR: [63.5, 47.0], hzL: [40.0, 49.5], hzR: [60.0, 49.5] },
  // ۶. پژو ۲۰۷
  'peugeot207':   { img: 'images/cars_front/front-207.webp',    hlL: [33.0, 48.0], hlR: [67.0, 48.0], hzL: [28.5, 46.5], hzR: [71.5, 46.5] },
  'peugeot2008':  { img: 'images/cars_front/front-207.webp',    hlL: [33.0, 48.0], hlR: [67.0, 48.0], hzL: [28.5, 46.5], hzR: [71.5, 46.5] },
  // ۷. پژو پارس و پژو ۴۰۵
  'pars':         { img: 'images/cars_front/front-pars.webp',   hlL: [32.0, 50.0], hlR: [68.0, 50.0], hzL: [27.8, 49.5], hzR: [72.2, 49.5] },
  'peugeot405':   { img: 'images/cars_front/front-pars.webp',   hlL: [32.0, 50.0], hlR: [68.0, 50.0], hzL: [27.8, 49.5], hzR: [72.2, 49.5] },
  // ۸. سمند و سورن پلاس (طراحی تفکیک‌شده و اختصاصی)
  'samand':       { img: 'images/cars_front/front-samand.webp', hlL: [29.4, 46.2], hlR: [67.9, 46.2], hzL: [24.9, 47.2], hzR: [72.4, 47.2] },
  'soren':        { img: 'images/cars_front/front-soren.webp',  hlL: [32.5, 48.5], hlR: [67.5, 48.5], hzL: [29.5, 49.0], hzR: [70.5, 49.0] },
  // ۹. دنا و دنا پلاس و تارا (تارا با طراحی مستقل اختصاصی)
  'dena':         { img: 'images/cars_front/front-dena.webp',   hlL: [32.0, 46.5], hlR: [68.0, 46.5], hzL: [33.5, 49.5], hzR: [66.5, 49.5] },
  'dena_turbo':   { img: 'images/cars_front/front-dena.webp',   hlL: [32.0, 46.5], hlR: [68.0, 46.5], hzL: [33.5, 49.5], hzR: [66.5, 49.5] },
  'tara':         { img: 'images/cars_front/front-tara.png',   hlL: [36.9, 52.1], hlR: [62.9, 52.1], hzL: [32.4, 53.1], hzR: [67.4, 53.1] },
  // ۱۰. رنو تندر ۹۰، ساندرو و مگان
  'l90':          { img: 'images/cars_front/front-l90.webp',    hlL: [33.5, 53.0], hlR: [66.5, 53.0], hzL: [29.0, 53.0], hzR: [71.0, 53.0] },
  'sandero':      { img: 'images/cars_front/front-l90.webp',    hlL: [33.5, 53.0], hlR: [66.5, 53.0], hzL: [29.0, 53.0], hzR: [71.0, 53.0] },
  'megane':       { img: 'images/cars_front/front-l90.webp',    hlL: [33.5, 53.0], hlR: [66.5, 53.0], hzL: [29.0, 53.0], hzR: [71.0, 53.0] },
  // ۱۱. خودروهای چینی، کراس‌اوور و شاسی‌بلند
  'mvm315':       { img: 'images/cars_front/front-206.png',    hlL: [36.5, 47.0], hlR: [63.5, 47.0], hzL: [40.0, 49.5], hzR: [60.0, 49.5] },
  'mvm_x22':      { img: 'images/cars_front/front-207.webp',    hlL: [33.0, 48.0], hlR: [67.0, 48.0], hzL: [28.5, 46.5], hzR: [71.5, 46.5] },
  'mvm_x33':      { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'tiggo5':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'tiggo7':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'arrizo5':      { img: 'images/cars_front/front-dena.webp',   hlL: [32.0, 46.5], hlR: [68.0, 46.5], hzL: [33.5, 49.5], hzR: [66.5, 49.5] },
  'jac_j4':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'jac_s5':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'brilliance':   { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'haima_s7':     { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'fidelity':     { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'dignity':      { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  // ۱۲. پیکان
  'peykan':       { img: 'images/cars_front/front-pride.webp',  hlL: [33.2, 54.5], hlR: [67.0, 54.5], hzL: [30.2, 55.5], hzR: [69.8, 55.5] },
  // ۱۳. وارداتی
  'santafe':      { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] },
  'cerato':       { img: 'images/cars_front/front-shahin.webp', hlL: [34.0, 48.5], hlR: [66.0, 48.5], hzL: [28.5, 49.0], hzR: [71.5, 49.0] }
};

function getCarFrontConfig(carKey){
  if(!carKey) return CAR_FRONT_DATABASE['pride'];
  const k = carKey.toLowerCase();
  return CAR_FRONT_DATABASE[k] || CAR_FRONT_DATABASE['pride'];
}

function getCarRealShowroomImage(carKey){
  return getCarFrontConfig(carKey).img;
}

// وضعیت حالت نور و فلاشر: 0 = هر دو روشن (پیش‌فرض)، 1 = فقط چراغ جلو، 2 = هر دو خاموش
let vphLightingMode = 0;

function toggleVehicleLighting(e){
  if(e) e.stopPropagation();
  const stage = document.getElementById('vphCarStage');
  const txt = document.getElementById('vphLightModeTxt');
  if(!stage) return;
  
  vphLightingMode = (vphLightingMode + 1) % 3;
  if(vphLightingMode === 0){
    stage.classList.remove('hazard-off', 'lights-off');
    if(txt) txt.textContent = 'نور: فلاشر فعال';
    showToast('حالت روشنایی: چراغ‌های جلو + فلاشر فعال');
  } else if(vphLightingMode === 1){
    stage.classList.add('hazard-off');
    stage.classList.remove('lights-off');
    if(txt) txt.textContent = 'نور: چراغ‌های جلو';
    showToast('حالت روشنایی: فقط چراغ‌های جلو روشن');
  } else {
    stage.classList.add('hazard-off', 'lights-off');
    if(txt) txt.textContent = 'نور: استودیو روز';
    showToast('حالت روشنایی: استودیو روز (چراغ‌ها خاموش)');
  }
}

function handleVphStageClick(e){
  openCarPicker();
}

// ==================== داده‌های هوشمند فنی، پلاک ملی و سلامت خودرو ====================
const CAR_TELEMATICS_MAP = {
  'pride': {
    engineCode: 'موتور M13 انژکتور',
    oilGrade: 'روغن 20W-50 معدنی',
    plate: { numL: '۳۱', letter: 'ج', numM: '۴۵۶', city: '۴۵' },
    service: 'سرویس بعدی: ۴,۵۰۰ کیلومتر (روغن و فیلتر)',
    health: '۸۸٪ سلامت'
  },
  'pride151': {
    engineCode: 'موتور M13 تقویت باری',
    oilGrade: 'روغن 20W-50 پرقدرت',
    plate: { numL: '۳۱', letter: 'ع', numM: '۵۸۲', city: '۴۵' },
    service: 'سرویس بعدی: ۳,۰۰۰ کیلومتر (لنت و فنر)',
    health: '۸۴٪ سلامت'
  },
  'pars': {
    engineCode: 'موتور XU7P پلاس',
    oilGrade: 'روغن 10W-40 نیمه‌سنتتیک',
    plate: { numL: '۲۱', letter: 'د', numM: '۸۲۱', city: '۱۱' },
    service: 'سرویس بعدی: ۵,۲۰۰ کیلومتر (روغن و شمع)',
    health: '۹۱٪ سلامت'
  },
  'peugeot405': {
    engineCode: 'موتور XU7 ارتقایافته',
    oilGrade: 'روغن 20W-50 یا 10W-40',
    plate: { numL: '۲۱', letter: 'ط', numM: '۶۷۳', city: '۲۲' },
    service: 'سرویس بعدی: ۳,۸۰۰ کیلومتر (تسمه تایم)',
    health: '۸۲٪ سلامت'
  },
  'peugeot207': {
    engineCode: 'موتور TU5P با گیربکس ۶ سرعته',
    oilGrade: 'روغن 10W-40 SN اورجینال',
    plate: { numL: '۶۸', letter: 'ص', numM: '۳۱۴', city: '۳۳' },
    service: 'سرویس بعدی: ۶,۰۰۰ کیلومتر (فیلتر کابین و روغن)',
    health: '۹۵٪ سلامت'
  },
  'peugeot2008': {
    engineCode: 'موتور THP165 توربو پژو',
    oilGrade: 'روغن 0W-30 تمام‌سنتتیک',
    plate: { numL: '۶۸', letter: 'الف', numM: '۱۹۸', city: '۳۳' },
    service: 'سرویس بعدی: ۵,۵۰۰ کیلومتر (شمع ایریدیوم)',
    health: '۹۶٪ سلامت'
  },
  'peugeot206_2': {
    engineCode: 'موتور ۱۴۰۰ TU3 فرانسوی',
    oilGrade: 'روغن 20W-50 یا 10W-40',
    plate: { numL: '۱۱', letter: 'ط', numM: '۲۴۵', city: '۲۲' },
    service: 'سرویس بعدی: ۴,۰۰۰ کیلومتر (روغن و صافی بنزین)',
    health: '۸۶٪ سلامت'
  },
  'peugeot206_5': {
    engineCode: 'موتور TU5 شانزده سوپاپ',
    oilGrade: 'روغن 10W-40 تمام‌سنتتیک',
    plate: { numL: '۱۱', letter: 'ب', numM: '۷۸۴', city: '۳۳' },
    service: 'سرویس بعدی: ۵,۰۰۰ کیلومتر (دیسک و لنت)',
    health: '۹۰٪ سلامت'
  },
  'runna': {
    engineCode: 'موتور TU5 پلاس استاندارد',
    oilGrade: 'روغن 10W-40 تمام‌سنتتیک',
    plate: { numL: '۱۱', letter: 'ی', numM: '۳۹۲', city: '۲۲' },
    service: 'سرویس بعدی: ۵,۰۰۰ کیلومتر (روغن و لنت)',
    health: '۸۹٪ سلامت'
  },
  'dena': {
    engineCode: 'پیشرانه EF7 توربوشارژ',
    oilGrade: 'روغن 5W-40 توربو گرید SN',
    plate: { numL: '۵۵', letter: 'ل', numM: '۹۱۸', city: '۷۷' },
    service: 'سرویس بعدی: ۵,۵۰۰ کیلومتر (روغن توربو)',
    health: '۹۴٪ سلامت'
  },
  'dena_turbo': {
    engineCode: 'پیشرانه TC7 توربو ۶ دنده',
    oilGrade: 'روغن 5W-40 تمام‌سنتتیک',
    plate: { numL: '۵۵', letter: 'ج', numM: '۶۰۳', city: '۷۷' },
    service: 'سرویس بعدی: ۶,۰۰۰ کیلومتر (روغن و شمع توربو)',
    health: '۹۶٪ سلامت'
  },
  'tara': {
    engineCode: 'موتور TU5P نسل جدید',
    oilGrade: 'روغن 10W-40 SN اورجینال',
    plate: { numL: '۵۵', letter: 'س', numM: '۸۳۱', city: '۷۷' },
    service: 'سرویس بعدی: ۶,۵۰۰ کیلومتر (روغن و فیلترها)',
    health: '۹۷٪ سلامت'
  },
  'shahin': {
    engineCode: 'موتور M15TC توربوشارژ',
    oilGrade: 'روغن 10W-40 SN توربو',
    plate: { numL: '۴۴', letter: 'ق', numM: '۵۶۲', city: '۹۹' },
    service: 'سرویس بعدی: ۵,۰۰۰ کیلومتر (روغن توربو)',
    health: '۹۲٪ سلامت'
  },
  'soren': {
    engineCode: 'پیشرانه EF7 فابریک شرکتی',
    oilGrade: 'روغن 10W-40 SL بهران',
    plate: { numL: '۷۲', letter: 'ن', numM: '۳۸۹', city: '۵۵' },
    service: 'سرویس بعدی: ۴,۸۰۰ کیلومتر (روغن و فیلتر هوا)',
    health: '۸۹٪ سلامت'
  },
  'samand': {
    engineCode: 'موتور XU7 / EF7 ملی',
    oilGrade: 'روغن 20W-50 یا 10W-40',
    plate: { numL: '۷۲', letter: 'ب', numM: '۴۱۵', city: '۵۵' },
    service: 'سرویس بعدی: ۴,۲۰۰ کیلومتر (شمع و وایر)',
    health: '۸۵٪ سلامت'
  },
  'l90': {
    engineCode: 'موتور ۱۶۰۰ K4M رنو فرانسه',
    oilGrade: 'روغن 10W-40 ELF اورجینال',
    plate: { numL: '۳۳', letter: 'هـ', numM: '۱۷۲', city: '۶۶' },
    service: 'سرویس بعدی: ۶,۰۰۰ کیلومتر (روغن و لنت فابریک)',
    health: '۹۳٪ سلامت'
  },
  'sandero': {
    engineCode: 'موتور ۱۶۰۰ K4M رنو با جعبه‌دنده AL4',
    oilGrade: 'روغن 10W-40 ELF رنو',
    plate: { numL: '۳۳', letter: 'م', numM: '۴۸۳', city: '۶۶' },
    service: 'سرویس بعدی: ۶,۰۰۰ کیلومتر (روغن گیربکس و موتور)',
    health: '۹۲٪ سلامت'
  },
  'nissan': {
    engineCode: 'پیشرانه Z24 انژکتوری پرقدرت',
    oilGrade: 'روغن 20W-50 ویژه فشار بار سنگین',
    plate: { numL: '۶۱', letter: 'ع', numM: '۳۳۸', city: '۴۷' },
    service: 'سرویس بعدی: ۳,۵۰۰ کیلومتر (چهارشاخ و روغن دیفرانسیل)',
    health: '۸۷٪ سلامت'
  },
  'quick': {
    engineCode: 'موتور M15 یورو ۵ ارتقایافته',
    oilGrade: 'روغن 10W-40 نیمه‌سنتتیک',
    plate: { numL: '۸۸', letter: 'و', numM: '۹۷۲', city: '۳۸' },
    service: 'سرویس بعدی: ۵,۰۰۰ کیلومتر (روغن و صافی بنزین)',
    health: '۹۲٪ سلامت'
  },
  'saina': {
    engineCode: 'موتور M15 استاندارد سایپا',
    oilGrade: 'روغن 10W-40 نیمه‌سنتتیک',
    plate: { numL: '۸۸', letter: 'د', numM: '۵۴۳', city: '۳۸' },
    service: 'سرویس بعدی: ۵,۰۰۰ کیلومتر (روغن و لنت)',
    health: '۹۱٪ سلامت'
  },
  'tiba': {
    engineCode: 'موتور M15 هشت سوپاپ',
    oilGrade: 'روغن 10W-40 یا 20W-50',
    plate: { numL: '۸۸', letter: 'ج', numM: '۲۶۱', city: '۳۸' },
    service: 'سرویس بعدی: ۴,۵۰۰ کیلومتر (روغن موتور)',
    health: '۸۸٪ سلامت'
  }
};

function getCarTelematics(carKey){
  if(!carKey) return CAR_TELEMATICS_MAP['pride'];
  const k = carKey.toLowerCase();
  return CAR_TELEMATICS_MAP[k] || CAR_TELEMATICS_MAP['pride'];
}

// ==================== تابع رندر هوشمند پروفایل خودرو و اقلام مصرفی پرتخفیف ====================
function renderVehicleProfileHub(carKey = currentSelectedCar){
  const car = carDataMap[carKey] || carDataMap['pride'];
  const nameEl = document.getElementById('vphCarName');
  const engineEl = document.getElementById('vphCarEngine');
  const engTxt = document.getElementById('vphEngineTxt');
  const oilTxt = document.getElementById('vphOilTxt');
  const srvTxt = document.getElementById('vphServiceTxt');
  const imgEl = document.getElementById('vphCarImage');
  const scroller = document.getElementById('vphItemsScroller');

  if(nameEl) nameEl.textContent = car.name.split('/')[0].trim();

  // مشخصات تلماتیکس و فنی
  const telematics = getCarTelematics(carKey);
  if(engineEl && telematics.engineCode) {
    engineEl.textContent = `${telematics.engineCode} • ${telematics.oilGrade}`;
  }
  if(engTxt && telematics.engineCode) {
    engTxt.textContent = telematics.engineCode;
  }
  if(oilTxt && telematics.oilGrade) {
    oilTxt.textContent = telematics.oilGrade;
  }
  if(srvTxt && telematics.service) {
    srvTxt.textContent = telematics.service.replace('سرویس بعدی:', '').trim();
  }
  const hlthEl = document.getElementById('vphHealthTxt');
  if(hlthEl && telematics.health) hlthEl.textContent = telematics.health;

  // تنظیم دقیق چراغ‌ها، پرتوهای نوری و راهنماها
  const frontCfg = getCarFrontConfig(carKey);
  const hlL = document.getElementById('vphHlL');
  const hlR = document.getElementById('vphHlR');
  const hzL = document.getElementById('vphHzL');
  const hzR = document.getElementById('vphHzR');
  const coneL = document.getElementById('vphConeL');
  const coneR = document.getElementById('vphConeR');

  if(hlL && frontCfg.hlL) { 
    hlL.style.left = frontCfg.hlL[0] + '%'; 
    hlL.style.top = frontCfg.hlL[1] + '%'; 
  }
  if(hlR && frontCfg.hlR) { 
    hlR.style.left = frontCfg.hlR[0] + '%'; 
    hlR.style.top = frontCfg.hlR[1] + '%'; 
  }
  if(hzL && frontCfg.hzL) { 
    hzL.style.left = frontCfg.hzL[0] + '%'; 
    hzL.style.top = frontCfg.hzL[1] + '%'; 
  }
  if(hzR && frontCfg.hzR) { 
    hzR.style.left = frontCfg.hzR[0] + '%'; 
    hzR.style.top = frontCfg.hzR[1] + '%'; 
  }
  if(coneL && frontCfg.hlL) {
    coneL.style.left = frontCfg.hlL[0] + '%';
    coneL.style.top = frontCfg.hlL[1] + '%';
  }
  if(coneR && frontCfg.hlR) {
    coneR.style.left = frontCfg.hlR[0] + '%';
    coneR.style.top = frontCfg.hlR[1] + '%';
  }

  // انیمیشن ریموت آنلاک (۲ بار فلاش سریع راهنماها هنگام تعویض خودرو)
  const stage = document.getElementById('vphCarStage');
  if(stage) {
    stage.classList.remove('unlock-flash');
    void stage.offsetWidth;
    stage.classList.add('unlock-flash');
    setTimeout(() => { if(stage) stage.classList.remove('unlock-flash'); }, 1100);
  }

  if(imgEl) {
    const realImg = (frontCfg.img || '');
    imgEl.onload = () => {
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    };
    imgEl.onerror = () => {
      if(imgEl.src.includes('cars_studio')) { imgEl.src = imgEl.src.replace('cars_studio', 'cars_front'); return; }
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    };
    if(imgEl.getAttribute('src') !== realImg) {
      imgEl.style.opacity = '0.35';
      imgEl.style.transform = 'scale(0.96)';
      imgEl.src = realImg;
    } else {
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }
    if(imgEl.complete && imgEl.naturalWidth > 0) {
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }
  }

  if(!scroller) return;
  scroller.innerHTML = '';

  const carShort = car.name.split(' ')[0];
  const family = (carKey.includes('pride') || carKey.includes('quick') || carKey.includes('saina') || carKey.includes('tiba') || carKey.includes('atlas') || carKey.includes('sahand')) ? 'pride' :
                 (carKey.includes('samand') || carKey.includes('dena') || carKey.includes('soren')) ? 'ef7' :
                 (carKey.includes('206') || carKey.includes('207') || carKey.includes('ranna') || carKey.includes('tara')) ? 'tu5' : 'general';

  // ۵ قلم قطعه پرمصرف دوره‌ای با بیشترین تخفیف متناسب با هر خودرو:
  const consumableDeals = [
    {
      id: `deal-oil-${carKey}`,
      cat: 'روغن موتور',
      title: family === 'pride' ? `روغن بهران پیشتاز 20W-50 فابریک ${carShort}` :
             family === 'ef7' ? `روغن بهران سوپر رانا 5W-40 توربو ${carShort}` :
             `روغن توتال ۷۰۰۰ فرانسه 10W-40 فابریک ${carShort}`,
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0',
      discount: '۲۲٪-',
      price: family === 'pride' ? 480000 : 790000,
      oldPrice: family === 'pride' ? 620000 : 990000,
      catKey: 'oil'
    },
    {
      id: `deal-lent-${carKey}`,
      cat: 'لنت ترمز',
      title: `لنت ترمز سرامیکی جلو ضدحرارت فابریک ${carShort}`,
      img: 'images/tiles/لنت.webp',
      discount: '۲۵٪-',
      price: family === 'pride' ? 360000 : 540000,
      oldPrice: family === 'pride' ? 480000 : 720000,
      catKey: 'lent'
    },
    {
      id: `deal-headlight-${carKey}`,
      cat: 'هدلایت و چراغ',
      title: family === 'pride' || family === 'tu5' ? `هدلایت توربو LED دوکنتاک H4 فابریک ${carShort}` : `هدلایت توربو LED خطی H7 فابریک ${carShort}`,
      img: 'images/tiles/هدلایت_و_چراغ.webp',
      discount: '۳۰٪-',
      price: 580000,
      oldPrice: 830000,
      catKey: 'headlight'
    },
    {
      id: `deal-battery-${carKey}`,
      cat: 'باتری و برق',
      title: family === 'pride' ? `باتری ۵۰ آمپر اتمی سپاهان ویژه ${carShort}` : `باتری ۶۰ آمپر اتمی سوزوکی فابریک ${carShort}`,
      img: 'images/tiles/باتری.webp',
      discount: '۲۰٪-',
      price: family === 'pride' ? 1850000 : 2450000,
      oldPrice: family === 'pride' ? 2300000 : 3050000,
      catKey: 'battery'
    },
    {
      id: `deal-tire-${carKey}`,
      cat: 'تایر و لاستیک',
      title: family === 'pride' ? 'جفت لاستیک یزد تایر 165/65R13 فابریک' : 'جفت لاستیک کویر تایر 185/65R14 استاندارد',
      img: 'images/tiles/لاستیک.webp',
      discount: '۱۵٪-',
      price: family === 'pride' ? 3200000 : 4100000,
      oldPrice: family === 'pride' ? 3750000 : 4850000,
      catKey: 'tire'
    }
  ];

  consumableDeals.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vph-item-card';
    card.onclick = (e) => {
      if(e.target.closest('.vph-add-btn')) return;
      openCategoryModal(item.catKey);
    };
    card.innerHTML = `
      <span class="vph-discount-tag">${item.discount}</span>
      <div class="vph-item-stage">
        <img loading="lazy" decoding="async"  src="${item.img}" alt="${item.title}">
      </div>
      <div>
        <div class="vph-item-cat">${item.cat}</div>
        <div class="vph-item-name" title="${item.title}">${item.title}</div>
      </div>
      <div class="vph-item-foot">
        <div class="vph-price-box">
          <span class="vph-item-old">${item.oldPrice.toLocaleString('fa-IR')}</span>
          <div class="vph-item-price">${item.price.toLocaleString('fa-IR')} <span>تومان</span></div>
        </div>
        <button class="vph-add-btn" onclick="event.stopPropagation(); addToCart(this, '${item.title}', '${item.id}', ${item.price})" title="افزودن سریع به سبد">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    `;
    scroller.appendChild(card);
  });
}

function setCarFilter(carKey, btn){
  playCarChirpSound();
  currentSelectedCar = carKey;
  renderVehicleProfileHub(carKey);
  const data = carDataMap[carKey] || carDataMap['pride'];
  const carCleanName = data.name.split('/')[0].trim();

  // ۱. به‌روزرسانی بج خودرو در هدر صفحه اصلی و فروشگاه (بدون تکرار آیکون خودرو)
  const headerBadge = document.getElementById('headerCarBadge');
  if(headerBadge) {
    headerBadge.innerHTML = `${carCleanName} <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline-block; vertical-align:middle; margin-right:3px;"><polyline points="6 9 12 15 18 9"/></svg>`;
  }

  // ۲. به‌روزرسانی بخش «قطعات سازگار با: ...» در صفحه دسته‌بندی‌ها
  const cmCarTag = document.getElementById('cmCarTag');
  if(cmCarTag) {
    cmCarTag.textContent = carCleanName;
  }

  // ۳. اگر صفحه دسته‌بندی باز است، محصولات فوراً بر اساس خودروی جدید تطبیق داده شوند
  const catModal = document.getElementById('catModal');
  if(catModal && catModal.classList.contains('open')){
    const adapted = getVehicleSpecificProducts(currentOpenCategory, currentSelectedCar);
    renderCategoryProducts(adapted);
    const subEl = document.getElementById('cmSub');
    if(subEl) subEl.textContent = `نمایش قطعات فابریک و سازگار با ${carCleanName} (${adapted.length} کالا)`;
  }

  // ۴. به‌روزرسانی کاروسل‌های صفحه اصلی فروشگاه با خودروی جدید
  renderTapsiTopicCarousels();
  renderVehicleProfileHub(currentSelectedCar);

  // ۵. به‌روزرسانی کارت کارنامه خودرو در اسلایدر هدر فروشگاه
  const shsCarName = document.getElementById('shsCarName');
  const shsMileage = document.getElementById('shsMileage');
  const shsCarThumb = document.getElementById('shsCarThumb');
  if(shsCarName) shsCarName.textContent = data.name;
  if(shsMileage) {
    const km = 35000 + (carKey.length * 4321) % 55000;
    shsMileage.textContent = km.toLocaleString('fa-IR');
  }
  if(shsCarThumb && data.img) {
    shsCarThumb.src = data.img;
  }

  // ۶. به‌روزرسانی برچسب‌های سازگاری روی کارت‌ها
  document.querySelectorAll('.item-compat-badge, .sh-compat-tag').forEach(b => {
    b.innerHTML = `<svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#10B981" stroke-width="2.5" style="display:inline-block; vertical-align:middle; margin-left:2px;"><polyline points="20 6 9 17 4 12"/></svg> ${data.compatText}`;
  });

  // ۷. اگر مودال مشخصات کالا باز است، اطلاعات سازگاری آن نیز بلادرنگ به‌روزرسانی شود
  const specModal = document.getElementById('productSpecModal');
  if(specModal && specModal.classList.contains('open') && currentSpecProduct){
    openProductSpecModal(currentSpecProduct.id);
  }

  // ۸. بستن پنجره انتخاب خودرو
  closeCarPicker();

  showToast(`قطعات با موفقیت روی «${carCleanName}» تنظیم و تطبیق داده شدند.`);
}

function openCarPicker(){
  const m = document.getElementById('carPickerModal');
  if(m){
    m.classList.add('open');
    renderCarPickerList();
  }
}

function closeCarPicker(e){
  if(e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('svm-close')) return;
  const m = document.getElementById('carPickerModal');
  if(m) m.classList.remove('open');
}

// ۲. مشاهده کل محصولات یک دسته‌بندی
let currentOpenCategory = 'battery';
function openCategoryModal(catKey){
  currentOpenCategory = catKey;
  const cat = categoryDataMap[catKey] || categoryDataMap['battery'];
  const modal = document.getElementById('catModal');
  const iconEl = document.getElementById('cmIcon');
  const titleEl = document.getElementById('cmTitle');
  const subEl = document.getElementById('cmSub');
  const carTag = document.getElementById('cmCarTag');

  const currentCar = carDataMap[currentSelectedCar] || carDataMap['pride'];
  const carCleanName = currentCar.name.split('/')[0].split('(')[0].trim();

  // واکشی قطعات هوشمند و کاملاً منطبق بر خودروی انتخابی
  const adaptedProducts = getVehicleSpecificProducts(catKey, currentSelectedCar);

  if(iconEl) iconEl.innerHTML = cat.icon || '';
  if(titleEl) titleEl.textContent = cat.title;
  if(subEl) subEl.textContent = `نمایش قطعات فابریک و سازگار با ${carCleanName} (${adaptedProducts.length} کالا)`;
  if(carTag) carTag.textContent = carCleanName;

  lastCatBase = adaptedProducts;
  catFilterIdx = {brand:0, price:0, rating:0, sales:0};
  currentCatSort = 'all';
  buildCatFilterUI();
  applyCatFilters();

  if(modal){
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }
}

function closeCategoryModal(){
  const modal = document.getElementById('catModal');
  if(modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function renderCategoryProducts(products){
  const gridEl = document.getElementById('catProductsGrid');
  if(!gridEl) return;
  gridEl.innerHTML = '';

  const car = carDataMap[currentSelectedCar] || carDataMap['pride'];

  products.forEach(p => {
    const priceFormatted = p.priceFmt || (p.price ? (p.price.toLocaleString('fa-IR') + ' تومان') : 'تماس بگیرید');
    const oldPriceFormatted = p.oldPriceFmt || (p.oldPrice ? (p.oldPrice.toLocaleString('fa-IR') + ' تومان') : '');

    const isCompared = compareList.some(item => item.id === p.id);
    const card = document.createElement('div');
    card.className = 'cat-prod-card'; card.style.cursor = 'pointer'; card.onclick = (e) => { if(!e.target.closest('button')) openProductSpecModal(p.id); };
    const isBat = (p.cat === 'battery' || (p.title && p.title.includes('باتری')));
    card.innerHTML = `
      <div class="cpc-img-wrap">
        <img loading="lazy" decoding="async"  src="${p.img}" alt="${p.title}">
      </div>
      <div class="tc-info">
        <div class="tc-brand-row">
          <span class="tc-brand">${p.brand.split('•')[0].trim()}</span>
          ${isBat ? '<span class="tc-badge-service">نصب در محل</span>' : ''}
        </div>
        <div class="tc-title" title="${p.title}">${p.title}</div>
        <div class="tc-meta"><span>★ ${(p.rating||0).toLocaleString('fa-IR')}</span><i>•</i><span>فروش ${(p.sales||0).toLocaleString('fa-IR')}</span></div>
        <div class="tc-compat">فابریک ${car.name.split('/')[0].split('(')[0].trim()}</div>
      </div>
      <div class="tc-foot">
        <div class="tc-price-wrap">
          ${p.oldPriceFmt ? `<span class="tc-old">${oldPriceFormatted}</span>` : ''}
          <div class="tc-price">${priceFormatted}</div>
        </div>
        <button class="tc-add-btn" onclick="event.stopPropagation(); addToCart(this, \'${p.title}\', \'${p.id}\', ${p.price})" title="افزودن به سبد"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

let catFilterIdx = {brand:0, price:0, rating:0, sales:0};
let currentCatSort = 'all';
let lastCatBase = [];
let catPriceBuckets = [];
let catBrandList = [];

function catHashSales(id){ let s=7; for(let i=0;i<id.length;i++){ s=(s*31+id.charCodeAt(i))%997; } return 60+s; }
function faCompact(v){
  if(v>=1000000){ const x=Math.round(v/100000)/10; return x.toLocaleString('fa-IR')+' میلیون'; }
  return Math.round(v/1000).toLocaleString('fa-IR')+' هزار';
}
function catBrandOf(p){ return (p.brand||'').split('•')[0].trim(); }

function buildCatFilterUI(){
  const wrap = document.getElementById('cmFilterGroups');
  if(!wrap) return;
  catBrandList = [...new Set(lastCatBase.map(catBrandOf))].filter(Boolean);
  lastCatBase.forEach(p=>{ if(p.sales==null) p.sales = catHashSales(p.id); });
  const prices = lastCatBase.map(p=>p.price||0);
  const mn = Math.min.apply(null,prices), mx = Math.max.apply(null,prices);
  catPriceBuckets = [];
  const step = ((mx-mn)/4)||1;
  for(let i=0;i<4;i++){ catPriceBuckets.push([mn+step*i, i===3?mx+1:mn+step*(i+1)]); }
  const rows = [
    {key:'brand', label:'برند', chips:['همه'].concat(catBrandList)},
    {key:'price', label:'قیمت', chips:['همه'].concat(catPriceBuckets.map(b=>faCompact(b[0])+' تا '+faCompact(b[1])))},
    {key:'rating', label:'امتیاز', chips:['همه','۴ ستاره به بالا','۴٫۵ ستاره به بالا']},
    {key:'sales', label:'فروش', chips:['همه','فروش ۱۰۰+','فروش ۵۰۰+']}
  ];
  wrap.innerHTML = '';
  rows.forEach(r=>{
    const row = document.createElement('div'); row.className='cm-fg-row';
    const lb = document.createElement('span'); lb.className='cm-fg-label'; lb.textContent = r.label+':';
    row.appendChild(lb);
    r.chips.forEach((c,ix)=>{
      const b = document.createElement('button');
      b.className = 'cm-fg-chip'+(catFilterIdx[r.key]===ix?' active':'');
      b.textContent = c;
      b.onclick = ()=>{ catFilterIdx[r.key]=ix; buildCatFilterUI(); applyCatFilters(); };
      row.appendChild(b);
    });
    wrap.appendChild(row);
  });
}

function applyCatFilters(){
  let list = [...lastCatBase];
  if(catFilterIdx.brand>0) list = list.filter(p=>catBrandOf(p)===catBrandList[catFilterIdx.brand-1]);
  if(catFilterIdx.price>0){ const b=catPriceBuckets[catFilterIdx.price-1]; if(b) list=list.filter(p=>(p.price||0)>=b[0]&&(p.price||0)<b[1]); }
  if(catFilterIdx.rating>0) list = list.filter(p=>(p.rating||0)>= [0,4,4.5][catFilterIdx.rating]);
  if(catFilterIdx.sales>0) list = list.filter(p=>(p.sales||0)>= [0,100,500][catFilterIdx.sales]);
  if(currentCatSort==='compatible'){
    const car = carDataMap[currentSelectedCar] || carDataMap['pride'];
    const carShort = car.name.split('/')[0].split('(')[0].trim().toLowerCase();
    const f = list.filter(p => {
      const cText = ((p.compat || '') + ' ' + ((carCompatDb[p.id] && carCompatDb[p.id].compat) || '')).toLowerCase();
      return cText.includes(carShort) || cText.includes(car.name.toLowerCase().slice(0, 4)) || cText.includes('تمامی') || cText.includes('کلیه');
    });
    if(f.length===0){ showToast(`کلیه قطعات این دسته‌بندی استانداردهای فابریک ${car.name.split('/')[0].trim()} را پشتیبانی می‌کنند.`); }
    else { showToast(`${f.length.toLocaleString('fa-IR')} قطعه کاملاً فابریک و منطبق با «${car.name.split('/')[0].trim()}» یافت شد.`); list = f; }
  } else if(currentCatSort==='cheapest'){ list.sort((a,b)=>(a.price||0)-(b.price||0)); }
  else if(currentCatSort==='expensive'){ list.sort((a,b)=>(b.price||0)-(a.price||0)); }
  else if(currentCatSort==='bestseller'){ list.sort((a,b)=>(b.sales||0)-(a.sales||0)); }
  else if(currentCatSort==='discount'){ list.sort((a,b)=>parseInt(b.discount||'0')-parseInt(a.discount||'0')); }
  renderCategoryProducts(list);
  const subEl = document.getElementById('cmSub');
  if(subEl){
    const car = carDataMap[currentSelectedCar] || carDataMap['pride'];
    subEl.textContent = `نمایش ${list.length.toLocaleString('fa-IR')} کالا از ${lastCatBase.length.toLocaleString('fa-IR')} • سازگار با ${car.name.split('/')[0].split('(')[0].trim()}`;
  }
}

function sortCatProducts(sortType, btn){
  document.querySelectorAll('.cm-sort-pill').forEach(p => p.classList.remove('active'));
  if(btn) btn.classList.add('active');
  currentCatSort = sortType;
  applyCatFilters();
}

// ۳. سیستم مقایسه هوشمند و فوق‌العاده حرفه‌ای کالاها (Showdown Pro Comparison System)
let compareOnlyDiffs = false;

function findProductById(prodId){
  // جستجو در کاتالوگ موتوربانو
  const mbFound = motorBanoProducts.find(p => p.id === prodId);
  if(mbFound) return mbFound;

  // ۰. اولویت اول: جستجو در تمام دسته‌ها و خانواده‌های خودرو (پراید، نیسان، سمند، پژو و...)
  const catsToCheck = ['tire', 'battery', 'lent', 'clutch', 'oil', 'spark', 'headlight'];
  const carsToCheck = [currentSelectedCar, 'pride', 'nissan', 'samand', 'peugeot206_5', 'tara'];
  for(const checkCar of carsToCheck){
    for(const cKey of catsToCheck){
      const vProds = getVehicleSpecificProducts(cKey, checkCar);
      const found = vProds.find(p => p.id === prodId);
      if(found){
        return {
          id: found.id,
          title: found.title,
          brand: found.brand || 'اصلی شرکتی',
          origin: found.origin || 'ایران / تحت لیسانس بین‌المللی',
          warranty: found.warranty || '۲۴ ماه ضمانت طلایی تعویض',
          price: found.price,
          oldPrice: found.oldPrice || Math.round(found.price * 1.22),
          discount: found.discount || '۱۵٪',
          inst: found.inst || (Math.round(found.price / 4)).toLocaleString('fa-IR'),
          img: found.img,
          rating: 9.8,
          satisfaction: 99,
          tech: 'تکنولوژی پیشرفته تولید با آلیاژ درجه یک مقاوم در شرایط سخت',
          lifespan: '۳ سال یا ۶۰,۰۰۰ کیلومتر',
          shipping: (cKey === 'battery' || (found.title && found.title.includes('باتری'))) ? 'ارسال فوری و اعزام تکنسین با تجهیزات تخصصی در محل' : 'ارسال اکسپرس پستی / باربری تیپاکس به سراسر کشور',
          compat: found.compat || (carDataMap[checkCar] ? carDataMap[checkCar].name : 'خودروی انتخابی'),
          specs: found.specs || { 'کیفیت ساخت': 'Grade A+ شرکتی', 'استاندارد': 'ISO TS 16949 فابریک' }
        };
      }
    }
  }

  // ۱. جستجو در دسته‌بندی‌ها
  for(const cat of Object.values(categoryDataMap)){
    const found = cat.products.find(p => p.id === prodId);
    if(found){
      return {
        id: found.id,
        title: found.title,
        brand: found.brand || 'اصلی شرکتی',
        origin: found.origin || 'ایران / تحت لیسانس بین‌المللی',
        warranty: found.warranty || '۲۴ ماه ضمانت طلایی تعویض',
        price: found.price,
        oldPrice: found.oldPrice || Math.round(found.price * 1.25),
        discount: found.discount || '۲۰٪',
        inst: (found.installment || '۴ قسط بدون بهره').replace('۴ قسط ', ''),
        img: found.img,
        rating: 9.6,
        satisfaction: 98,
        tech: 'تکنولوژی پیشرفته تولید مقاوم در برابر حرارت بالا',
        lifespan: '۳ سال یا ۶۰,۰۰۰ کیلومتر',
        shipping: 'ارسال فوری زیر ۲ ساعت با پیک اختصاصی',
        compat: 'سازگاری ۱۰۰٪ فابریک بدون تغییر در سیستم خودرو',
        specs: found.specs || { 'کیفیت ساخت': 'Grade A+', 'استاندارد': 'ISO TS 16949' }
      };
    }
  }

  // ۲. جستجو در کاروسل‌های موضوعی (topicCarouselsData)
  for(const list of Object.values(topicCarouselsData)){
    const found = list.find(p => p.id === prodId);
    if(found){
      return {
        id: found.id,
        title: found.title,
        brand: found.brand,
        origin: found.brand.includes('JAPAN') ? 'ژاپن (تحت لیسانس)' : (found.brand.includes('GERMANY') ? 'آلمان' : 'ایران - تراز اول صادراتی'),
        warranty: '۲۴ ماه ضمانت تعویض درجا در سراسر کشور',
        price: found.price,
        oldPrice: found.oldPrice,
        discount: found.discount,
        inst: found.inst + ' تومانی',
        img: found.img,
        rating: 9.7,
        satisfaction: 99,
        tech: 'متریال درجه یک بهینه‌سازی‌شده برای شرایط آب‌وهوایی ایران',
        lifespan: 'حداقل ۵۰,۰۰۰ کیلومتر کارکرد تضمینی',
        shipping: (found.cat === 'battery' || (found.title && found.title.includes('باتری'))) ? 'پیک اکسپرس فوری زیر ۲ ساعت به همراه نصب در محل' : 'ارسال اکسپرس پستی / تیپاکس سراسری با کد رهگیری',
        compat: 'کاملاً فابریک و مورد تایید شرکت خودروساز',
        specs: {
          'فروشگاه تاییدشده': found.store,
          'اقساط بدون سود': '۴ قسط ' + found.inst + ' تومانی',
          'اصالت قطعه': 'تضمین اصالت هولوگرام‌دار فیزیکی'
        }
      };
    }
  }

  // پیش‌فرض اگر یافت نشد
  return {
    id: prodId,
    title: 'قطعه تخصصی خودرو اورجینال',
    brand: 'شرکتی تاییدشده',
    origin: 'ایران / وارداتی اصلی',
    warranty: '۱۸ ماه گارانتی اصالت و سلامت',
    price: 1850000,
    oldPrice: 2300000,
    discount: '۲۰٪',
    inst: '۴۶۲,۵۰۰ تومانی',
    img: 'images/shop/battery-thumb.jpg',
    rating: 9.4,
    satisfaction: 96,
    tech: 'استاندارد معتبر خودروسازی',
    lifespan: '۲ سال یا ۴۰,۰۰۰ کیلومتر',
    shipping: 'ارسال فوری در تهران و سراسر کشور',
    compat: 'فابریک کلیه مدل‌های استاندارد',
    specs: { 'استاندارد': 'ملی ایران', 'نوع': 'اصلی شرکتی' }
  };
}

function toggleCompare(prodId, btn){
  const existingIdx = compareList.findIndex(p => p.id === prodId);
  if(existingIdx !== -1){
    compareList.splice(existingIdx, 1);
    if(btn){
      btn.classList.remove('active');
    }
    showToast('محصول از لیست مقایسه خارج شد.');
  } else {
    if(compareList.length >= 4){
      showToast('حداکثر ۴ محصول را می‌توانید همزمان مقایسه کنید.');
      return;
    }
    const prod = findProductById(prodId);
    compareList.push(prod);
    if(btn){
      btn.classList.add('active');
    }
    showToast(`«${prod.title.slice(0, 26)}...» به میز مقایسه اضافه شد.`);
  }

  updateCompareFloatingBar();
  syncAllCompareButtons();
}

function syncAllCompareButtons(){
  document.querySelectorAll('.tc-compare-btn, .cpc-btn-compare, .apg-compare-btn').forEach(b => {
    const fn = b.getAttribute('onclick') || '';
    const match = fn.match(/'([^']+)'/);
    if(match){
      const id = match[1];
      const isComp = compareList.some(item => item.id === id);
      b.classList.toggle('active', isComp);
      if(b.classList.contains('cpc-btn-compare')){
        b.innerHTML = isComp
          ? '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>در مقایسه</span>'
          : '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></svg> <span>مقایسه</span>';
      }
    }
  });
}

function updateCompareFloatingBar(){
  const bar = document.getElementById('compareFloatingBar');
  const thumbs = document.getElementById('cfbThumbnails');
  const textEl = document.getElementById('cfbCompareText');
  const catBtn = document.getElementById('catMhCompareBtn');
  const catCount = document.getElementById('catMhCompareCount');

  if(catBtn && catCount){
    if(compareList.length > 0){
      catBtn.style.display = 'flex';
      catCount.textContent = `${compareList.length} در مقایسه`;
    } else {
      catBtn.style.display = 'none';
    }
  }

  if(!bar) return;

  if(compareList.length > 0){
    bar.classList.add('active');
    if(textEl) textEl.textContent = `${compareList.length} کالا در میز مقایسه`;
    if(thumbs){
      thumbs.innerHTML = '';
      compareList.forEach((p, idx) => {
        const img = document.createElement('img');
        img.src = p.img;
        img.className = 'cfb-avatar-item';
        img.alt = p.title;
        img.title = p.title;
        img.style.zIndex = 4 - idx;
        thumbs.appendChild(img);
      });
    }
  } else {
    bar.classList.remove('active');
  }
}

function clearCompareList(){
  compareList = [];
  updateCompareFloatingBar();
  syncAllCompareButtons();
  showToast('میز مقایسه پاک شد.');
  closeCompareModal();
}

function toggleCompareOnlyDiffs(){
  compareOnlyDiffs = !compareOnlyDiffs;
  const btn = document.getElementById('cmpDiffToggleBtn');
  if(btn) btn.classList.toggle('active', compareOnlyDiffs);
  renderShowdownContent();
}

function openCompareModal(){
  if(compareList.length === 0){
    showToast('لطفاً حداقل ۱ محصول را به مقایسه اضافه کنید.');
    return;
  }
  const modal = document.getElementById('compareModal');
  if(!modal) return;

  renderShowdownContent();
  modal.classList.add('open');
}

function renderShowdownContent(){
  const container = document.getElementById('compareShowdownContent');
  if(!container) return;

  const count = compareList.length;
  const cols = Math.min(Math.max(count, 2), 4);

  // پیدا کردن ارزان‌ترین و بالاترین تخفیف برای برچسب پیشنهاد برتر
  let bestValIdx = 0;
  let maxDisc = -1;
  compareList.forEach((p, idx) => {
    const d = parseInt(p.discount || '0');
    if(d > maxDisc){
      maxDisc = d;
      bestValIdx = idx;
    }
  });

  // ۱. ساخت کارت‌های هیرو سه‌بعدی و عرصه دوئل کالاها
  let html = `<div class="cmp-arena-cards" data-cols="${cols}">`;
  compareList.forEach((p, idx) => {
    const isBest = (idx === bestValIdx && count > 1);
    html += `
      <div class="cmp-card ${isBest ? 'best-choice' : ''}">
        ${isBest ? '<div class="cmp-choice-tag"><svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor" stroke="none" style="display:inline-block; vertical-align:middle; margin-left:3px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>پیشنهاد برتر ارزش خرید</div>' : ''}
        <button class="cmp-del-btn" onclick="removeFromCompare('${p.id}')" title="حذف از مقایسه"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        <div class="cmp-stage">
          <img loading="lazy" decoding="async"  src="${p.img}" alt="${p.title}">
        </div>
        <div>
          <span class="cmp-brand-badge">${p.brand}</span>
          <div class="cmp-title" title="${p.title}">${p.title}</div>
          <div class="cmp-price-row">
            <span class="cmp-final-price">${p.price.toLocaleString('fa-IR')} <small style="font-size:8px;">تومان</small></span>
            <span class="cmp-old-price">${p.oldPrice.toLocaleString('fa-IR')}</span>
            <br>
            <span class="cmp-inst-pill">۴ قسط ${p.inst}</span>
          </div>
        </div>
        <button class="cmp-quick-buy-btn" onclick="addToCart(this, '${p.title}', '${p.id}', ${p.price})">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          خرید سریع
        </button>
      </div>
    `;
  });
  html += `</div>`;

  // ۲. تعریف ردیف‌های مقایسه دسته‌بندی‌شده
  const currentCar = carDataMap[currentSelectedCar] || { name: 'سایپا پراید ۱۳۱ / صبا' };

  const sections = [
    {
      title: 'شرایط قیمت، تخفیف و تسهیلات مالی',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#059669" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
      rows: [
        { label: 'قیمت پرداختی', getVal: p => `<b style="color:#059669; font-size:11.5px;">${p.price.toLocaleString('fa-IR')} تومان</b>` },
        { label: 'سود تخفیف', getVal: p => `<span class="cmp-badge-highlight">${(p.oldPrice - p.price).toLocaleString('fa-IR')} تومان سود (${p.discount})</span>` },
        { label: 'خرید ۴ قسطه', getVal: p => `<span class="cmp-badge-blue">۴ قسط ${p.inst} (بدون سود)</span>` },
        { label: 'شیوه ارسال', getVal: p => p.shipping }
      ]
    },
    {
      title: 'ضمانت اصالت، گارانتی و خدمات',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2563EB" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      rows: [
        { label: 'مدت گارانتی', getVal: p => `<b style="color:#2563EB;">${p.warranty}</b>` },
        { label: 'اصالت فیزیکی', getVal: p => 'تضمین ۱۰۰٪ اصالت و بازگشت وجه' },
        { label: 'شیوه تحویل و خدمات', getVal: p => (p.cat === 'battery' || (p.title && p.title.includes('باتری'))) ? '<span style="color:#15803D;font-weight:700;">🛠️ اعزام فوری تکنسین و نصب در محل</span>' : '<span style="color:#2563EB;font-weight:700;">📦 ارسال پستی / تیپاکس سراسری</span>' },
        { label: 'مهلت تست', getVal: p => '۷ روز ضمانت بازگشت بی‌قیدوشرط' }
      ]
    },
    {
      title: 'مشخصات فنی و متریال ساخت',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#D97706" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
      rows: [
        { label: 'کشور سازنده', getVal: p => p.origin },
        { label: 'تکنولوژی تولید', getVal: p => p.tech },
        { label: 'رده کیفی قطعه', getVal: p => 'Grade A+ استاندارد OE خودروساز' },
        { label: 'طول عمر مفید', getVal: p => p.lifespan }
      ]
    },
    {
      title: 'وضعیت سازگاری با خودروی شما',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#4F46E5" stroke-width="2"><rect x="3" y="11" width="18" height="8" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>',
      rows: [
        { label: 'خودروی فعال', getVal: p => `<b style="color:#0F172A;">${currentCar.name}</b>` },
        { label: 'نصب فابریک', getVal: p => p.compat },
        { label: 'نیاز به تبدیل', getVal: p => 'خیر - سوکت و براکت کاملاً منطبق فابریک' }
      ]
    },
    {
      title: 'ارزیابی کارشناسی و نظرات خریداران',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#EAB308" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      rows: [
        {
          label: 'نمره کارشناسی',
          getVal: p => `
            <div class="cmp-rating-bar">
              <span class="cmp-rating-num">${p.rating}</span>
              <div class="cmp-rating-track"><div class="cmp-rating-fill" style="width:${p.rating * 10}%;"></div></div>
            </div>
          `
        },
        { label: 'رضایت خریداران', getVal: p => `<b>${p.satisfaction}٪</b> خریداران خرید این کالا را توصیه کرده‌اند` }
      ]
    }
  ];

  // رندر گروه‌های مشخصات با فیلتر هوشمند تفاوت‌ها
  sections.forEach(sec => {
    let rowsHtml = '';
    sec.rows.forEach(r => {
      const vals = compareList.map(p => r.getVal(p));
      const isDiff = vals.some(v => v !== vals[0]);
      if(compareOnlyDiffs && !isDiff){
        return;
      }

      rowsHtml += `<div class="cmp-spec-row" data-cols="${cols}">`;
      rowsHtml += `<div class="cmp-spec-label">${r.label}</div>`;
      vals.forEach(v => {
        rowsHtml += `<div class="cmp-spec-val">${v}</div>`;
      });
      rowsHtml += `</div>`;
    });

    if(rowsHtml){
      html += `
        <div class="cmp-group-card">
          <div class="cmp-group-header">
            ${sec.icon}
            <span>${sec.title}</span>
          </div>
          ${rowsHtml}
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

function closeCompareModal(e){
  if(e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('svm-close')) return;
  const modal = document.getElementById('compareModal');
  if(modal) modal.classList.remove('open');
}

function removeFromCompare(prodId){
  const idx = compareList.findIndex(p => p.id === prodId);
  if(idx !== -1){
    compareList.splice(idx, 1);
  }
  updateCompareFloatingBar();
  syncAllCompareButtons();
  if(compareList.length > 0){
    renderShowdownContent();
  } else {
    closeCompareModal();
  }
}

// ۴. مدیریت سبد خرید و انتخاب ۴ روش ارسال
function addToCart(btn, title, prodId = 'gen-1', price = 2450000){
  cartItemsCount++;
  if(btn){
    const isIconOnly = btn.classList.contains('tc-add-btn') || btn.classList.contains('vph-add-btn') || btn.classList.contains('scs-card-add-btn') || btn.offsetWidth < 48;
    btn.classList.add('added');
    if(isIconOnly){
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
      }, 1600);
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> افزوده شد';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg> افزودن به سبد';
      }, 1600);
    }
  }

  // Add or increment item in cartList
  const existing = cartList.find(i => i.id === prodId);
  if(existing){
    existing.qty++;
  } else {
    const prod = findProductById(prodId);
    cartList.push({
      id: prodId,
      title: title || prod.title,
      price: price || prod.price,
      priceFmt: (price || prod.price).toLocaleString('fa-IR') + ' تومان',
      qty: 1,
      img: prod.img || 'images/shop/battery-thumb.jpg'
    });
  }

  updateCartCounters();
  showToast(`«${title}» به سبد اضافه شد (مجموع: ${cartItemsCount} قلم)`);
}

function updateCartCounters(){
  const snhBadge = document.getElementById('snhCartBadge');
  if(snhBadge) snhBadge.textContent = cartItemsCount;
  const navBadge = document.querySelector('.nav-item[data-page="shop"] .nav-badge');
  if(navBadge){
    navBadge.textContent = cartItemsCount;
    navBadge.style.background = '#10B981';
  }
}

function openCartModal(){
  const modal = document.getElementById('cartCheckoutModal');
  if(!modal) return;

  renderCartItems();
  updateCartInvoice();
  modal.classList.add('open');
}

function closeCartModal(e){
  if(e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('svm-close')) return;
  const modal = document.getElementById('cartCheckoutModal');
  if(modal) modal.classList.remove('open');
}

function renderCartItems(){
  const listEl = document.getElementById('ccItemsList');
  if(!listEl) return;
  listEl.innerHTML = '';

  if(cartList.length === 0){
    listEl.innerHTML = '<div style="text-align:center; padding:20px; color:#94A3B8; font-size:11.5px;">سبد خرید شما در حال حاضر خالی است.</div>';
    return;
  }

  cartList.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'cc-item';
    const isItemServ = (item.title && (item.title.includes('باتری') || item.title.includes('تعویض در محل')));
    row.innerHTML = `
      <div class="cc-item-info">
        <img loading="lazy" decoding="async"  src="${item.img}" class="cc-item-img" alt="${item.title}">
        <div>
          <div class="cc-item-name">${item.title}</div>
          <div style="display:flex;align-items:center;gap:6px;margin-top:2px;">
            <span class="ord-type-badge ${isItemServ ? 'ord-type-service' : 'ord-type-ecommerce'}">
            ${isItemServ ? '🛠️ سرویس در محل' : '📦 قطعه یدکی'}
          </span>
            <span class="cc-item-price">${(item.price * item.qty).toLocaleString('fa-IR')} تومان</span>
          </div>
        </div>
      </div>
      <div class="cc-item-qty">
        <button class="cc-qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
        <span style="font-size:11px; font-weight:800; min-width:14px; text-align:center;">${item.qty}</span>
        <button class="cc-qty-btn" onclick="changeCartQty(${idx}, -1)">-</button>
      </div>
    `;
    listEl.appendChild(row);
  });
}

function changeCartQty(idx, delta){
  if(!cartList[idx]) return;
  cartList[idx].qty += delta;
  if(cartList[idx].qty <= 0){
    cartList.splice(idx, 1);
  }
  cartItemsCount = cartList.reduce((sum, item) => sum + item.qty, 0);
  updateCartCounters();
  renderCartItems();
  updateCartInvoice();
}

function selectShipping(method){
  activeShippingMethod = method;
  document.querySelectorAll('.shipping-radio-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`ship-${method}`);
  if(card) card.classList.add('selected');

  updateCartInvoice();
  showToast(`شیوه ارسال روی «${shippingRates[method].title}» تنظیم شد.`);
}

function updateCartInvoice(){
  const subtotal = cartList.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipRate = shippingRates[activeShippingMethod] || shippingRates['instant'];
  
  // Free instant shipping on orders above 2M tomans
  let shipCost = shipRate.cost;
  if(activeShippingMethod === 'instant' && subtotal >= 2000000){
    shipCost = 0;
  }

  const finalTotal = subtotal + shipCost;

  const subtotalEl = document.getElementById('ccSubtotal');
  const shipTitleEl = document.getElementById('ccShipTitle');
  const shipCostEl = document.getElementById('ccShipCost');
  const finalTotalEl = document.getElementById('ccFinalTotal');

  if(subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('fa-IR') + ' تومان';
  if(shipTitleEl) shipTitleEl.textContent = `هزینه ارسال (${shipRate.title}):`;
  if(shipCostEl){
    shipCostEl.textContent = shipCost === 0 ? 'رایگان (جشنواره)' : shipCost.toLocaleString('fa-IR') + ' تومان';
    if(shipCost === 0) shipCostEl.style.color = '#059669';
    else shipCostEl.style.color = '#0F172A';
  }
  if(finalTotalEl) finalTotalEl.textContent = finalTotal.toLocaleString('fa-IR') + ' تومان';

  // هماهنگی متن دکمه ثبت سفارش با نوع کالا (خدماتی vs خرید اینترنتی)
  const submitBtn = document.querySelector('.cc-submit-btn');
  if(submitBtn){
    const isCartServ = detectOrderTypeFromItems(cartList);
    submitBtn.innerHTML = isCartServ === 'service' ? 
      '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> تایید سفارش و اعزام فوری تکنسین به محل 🛠️' :
      '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ثبت خرید اینترنتی و دریافت کد رهگیری پستی 📦';
  }
}


// ==================== بخش جامع مدیریت سفارش‌ها و فاکتورهای رسمی ====================
// تفکیک دقیق سفارش‌های خدماتی (نصب باتری و سرویس در محل) از خریدهای اینترنتی کالا (دیسک و صفحه کلاچ، تایر، شمع و...)

let userOrdersList = [
  // ۱. سفارش خدماتی در محل: خرید باتری + تعویض و نصب فوری در محل
  {
    id: 'IC-89412',
    orderType: 'service', // ماهیت: خدماتی و نیازمند تکنسین در محل
    status: 'active',
    statusText: 'تکنسین باتری در مسیر اعزام به محل خودرو',
    step: 3, // ۱: ثبت, ۲: تایید انبار, ۳: اعزام تکنسین, ۴: نصب و تحویل
    date: 'امروز، ساعت ۱۲:۴۵',
    carName: 'سایپا پراید ۱۳۱ / صبا',
    address: 'تهران، خیابان آزادی، بعد از تقاطع نواب، پلاک ۲۴',
    shippingMethod: 'اعزام موشکی تکنسین آی‌باتری (زیر ۴۵ دقیقه در محل)',
    technician: {
      name: 'مهندس آرش طاهری',
      role: 'تکنسین ارشد اعزامی و عیب‌یاب باتری و دینام',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      vehicle: 'وانت پراید امدادی ۲۴ ساعته (پلاک تهران ۳۳)',
      eta: '۱۸ دقیقه دیگر',
      avatar: 'images/tiles/باتری.webp'
    },
    items: [
      {
        title: 'باتری ۵۰ آمپر اوربیتال وان سیلور پرقدرت مخصوص پراید',
        price: 1850000,
        qty: 1,
        warranty: '۲۰ ماه گارانتی تعویض سراسری طلایی',
        img: 'images/tiles/باتری.webp'
      }
    ],
    subtotal: 1850000,
    discount: 250000,
    shipping: 0, // اعزام و نصب رایگان
    total: 1600000,
    paymentMethod: 'پرداخت در محل با پوز سیار پس از نصب و تست دینام',
    taxId: 'TX-1403-882193',
    issueDate: '۱۴۰۳/۰۷/۰۵ - ۱۲:۴۵'
  },

  // ۲. خرید اینترنتی کالا: دیسک و صفحه کلاچ والئو فرانسه (ارسال پستی با تیپاکس)
  {
    id: 'IC-94280',
    orderType: 'ecommerce', // ماهیت: خرید اینترنتی کالا و ارسال مرسوله
    status: 'active',
    statusText: 'بسته در حال انتقال بین مراکز توزیع تیپاکس',
    step: 3, // ۱: ثبت خرید, ۲: بسته‌بندی انبار مرکزی, ۳: تحویل به تیپاکس, ۴: تحویل به مشتری
    date: 'دیروز، ساعت ۱۶:۲۰',
    carName: 'پژو ۲۰۶ تیپ ۵ / ۲۰۷',
    address: 'تهران، سعادت‌آباد، میدان کاج، خیابان مروارید، مجتمع پارس',
    shippingMethod: 'تیپاکس اکسپرس هوایی (بسته‌بندی ضربه‌گیر ویژه قطعات حساس)',
    carrier: {
      name: 'تیپاکس اکسپرس هوایی (Tipax Express)',
      trackingCode: 'TPX-9841203714',
      eta: 'فردا بین ساعت ۱۰:۰۰ تا ۱۴:۰۰',
      originHub: 'انبار مرکزی غرب تهران - مرکز پردازش مکانیزه',
      statusDesc: 'مرسوله بارگیری شده و در مسیر توزیع به نشانی خریدار'
    },
    items: [
      {
        title: 'کیت کلاچ والئو سبز اصل فرانسه پری‌دمپر مخصوص پژو ۲۰۶ و ۲۰۷',
        price: 3250000,
        qty: 1,
        warranty: '۲۴ ماه ضمانت اصالت فیزیکی و عدم لرزش کلاچ',
        img: 'images/tiles/کلاچ.webp'
      }
    ],
    subtotal: 3250000,
    discount: 450000,
    shipping: 65000,
    total: 2865000,
    paymentMethod: 'پرداخت آنلاین از طریق درگاه امن شتابی',
    taxId: 'TX-1403-912048',
    issueDate: '۱۴۰۳/۰۷/۰۴ - ۱۶:۲۰'
  },

  // ۳. خرید اینترنتی کالا: لاستیک و تایر بارز فابریک سمند (ارسال با باربری قطعات سنگین)
  {
    id: 'IC-76120',
    orderType: 'ecommerce', // ماهیت: خرید اینترنتی کالا
    status: 'delivered',
    statusText: 'تحویل داده شده به گیرنده با بارنامه رسمی',
    step: 4, // تحویل شده
    date: '۳ روز گذشته',
    carName: 'سمند LX / دنا پلاس',
    address: 'اصفهان، خیابان شیخ صدوق شمالی، پلاک ۱۱۸',
    shippingMethod: 'باربری ویژه قطعات سنگین وطن (ارسال پالت‌بندی شده)',
    carrier: {
      name: 'باربری قطعات سنگین وطن',
      trackingCode: 'VTN-4892104',
      eta: 'تحویل با موفقیت انجام شد',
      originHub: 'شعبه شوش تهران به مقصد اصفهان',
      statusDesc: 'مرسوله با تایید پیامکی تحویل مشتری گردید'
    },
    items: [
      {
        title: 'لاستیک ۱۸۵/۶۵R۱۵ بارز فابریک کارخانه‌ای سمند (جفتی)',
        price: 3450000,
        qty: 1,
        warranty: '۴۸ ماه ضمانت رسمی تعویض شرکتی بارز',
        img: 'images/tiles/لاستیک.webp'
      }
    ],
    subtotal: 3450000,
    discount: 350000,
    shipping: 120000,
    total: 3220000,
    paymentMethod: 'پرداخت آنلاین از طریق درگاه امن زرین‌پال',
    taxId: 'TX-1403-752104',
    issueDate: '۱۴۰۳/۰۷/۰۲ - ۱۵:۲۰'
  }
];

let currentOrderFilter = 'all';

function updateOrdersCount(){
  const activeCount = userOrdersList.filter(o => o.status === 'active').length;
  const serviceCount = userOrdersList.filter(o => o.orderType === 'service').length;
  const ecomCount = userOrdersList.filter(o => o.orderType === 'ecommerce').length;

  const counterEl = document.getElementById('ordNavCounter');
  if(counterEl){
    counterEl.textContent = activeCount;
    counterEl.style.display = activeCount > 0 ? 'inline-block' : 'none';
  }
  const totalCountEl = document.getElementById('ordTotalCount');
  if(totalCountEl) totalCountEl.textContent = userOrdersList.length;

  const servCountEl = document.getElementById('ordServiceCount');
  if(servCountEl) servCountEl.textContent = serviceCount;

  const ecomCountEl = document.getElementById('ordEcomCount');
  if(ecomCountEl) ecomCountEl.textContent = ecomCount;
}

function openOrdersModal(){
  closeProductSpecModal();
  const modal = document.getElementById('ordersModal');
  if(!modal) return;
  closeDrawer();
  closeProfileModal();
  renderOrdersList(currentOrderFilter);
  updateOrdersCount();
  modal.classList.add('open');
}

function closeOrdersModal(e){
  if(e && e.target && e.target.id !== 'ordersModal' && !e.target.classList.contains('ord-close-btn')) return;
  const modal = document.getElementById('ordersModal');
  if(modal) modal.classList.remove('open');
}

function filterOrdersTab(filter, btn){
  currentOrderFilter = filter;
  document.querySelectorAll('.ord-tab').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  renderOrdersList(filter);
}

function renderOrdersList(filter){
  const container = document.getElementById('ordersListContainer');
  if(!container) return;
  container.innerHTML = '';

  let filtered = userOrdersList;
  if(filter === 'service'){
    filtered = userOrdersList.filter(o => o.orderType === 'service');
  } else if(filter === 'ecommerce'){
    filtered = userOrdersList.filter(o => o.orderType === 'ecommerce');
  } else if(filter === 'active'){
    filtered = userOrdersList.filter(o => o.status === 'active');
  } else if(filter === 'delivered'){
    filtered = userOrdersList.filter(o => o.status === 'delivered');
  }

  if(filtered.length === 0){
    container.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:#64748B;">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#94A3B8" stroke-width="1.5" style="margin:0 auto 12px;display:block;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>
        <b style="font-size:14px;color:#1E293B;display:block;margin-bottom:4px;">هیچ سفارشی در این بخش یافت نشد</b>
        <span style="font-size:12px;">سفارشات جدید و خریدهای شما در این قسمت نمایش داده می‌شوند.</span>
      </div>
    `;
    return;
  }

  filtered.forEach(order => {
    const isActive = order.status === 'active';
    const isService = order.orderType === 'service';
    const card = document.createElement('div');
    card.className = 'ord-card';
    
    // محتوای اقلام
    const itemsHtml = order.items.map(item => `
      <div class="ord-item-row">
        <img loading="lazy" decoding="async"  class="ord-item-thumb" src="${item.img}" alt="${item.title}">
        <div class="ord-item-details">
          <div class="ord-item-title">${item.title}</div>
          <div class="ord-item-sub">
            <span>تعداد: ${item.qty} عدد</span>
            <span>•</span>
            <span style="color:#059669;">${item.warranty}</span>
          </div>
        </div>
        <div class="ord-item-price">${(item.price * item.qty).toLocaleString('fa-IR')} ت</div>
      </div>
    `).join('');

    // محاسبه پیشرفت استپر
    const step1Class = order.step >= 1 ? 'done' : '';
    const step2Class = order.step >= 2 ? 'done' : (order.step === 1 ? 'active' : '');
    const step3Class = order.step >= 3 ? (order.step === 3 ? 'active' : 'done') : '';
    const step4Class = order.step >= 4 ? 'done' : (order.step === 4 ? 'active' : '');
    const fillWidth = order.step === 1 ? '10%' : (order.step === 2 ? '38%' : (order.step === 3 ? '68%' : '100%'));

    // تفکیک استپر و بخش اختصاصی: خدماتی vs خرید اینترنتی
    let stepperHtml = '';
    let executorCardHtml = '';
    let actionButtonsHtml = '';

    if(isService){
      // استپر خدمات در محل
      stepperHtml = `
        <div class="ord-stepper">
          <div class="ord-step-fill" style="width:${fillWidth};"></div>
          <div class="ord-step-item done">
            <div class="ord-step-circle">✓</div>
            <span class="ord-step-title">ثبت سفارش</span>
          </div>
          <div class="ord-step-item ${step2Class}">
            <div class="ord-step-circle">${order.step >= 2 ? '✓' : '۲'}</div>
            <span class="ord-step-title">تایید انبار</span>
          </div>
          <div class="ord-step-item ${step3Class}">
            <div class="ord-step-circle">${order.step > 3 ? '✓' : '۳'}</div>
            <span class="ord-step-title">اعزام تکنسین</span>
          </div>
          <div class="ord-step-item ${step4Class}">
            <div class="ord-step-circle">${order.step >= 4 ? '✓' : '۴'}</div>
            <span class="ord-step-title">نصب در محل</span>
          </div>
        </div>
      `;

      // کارت تکنسین اعزامی اختصاصی با تماس و نقشه
      executorCardHtml = `
        <div class="ord-tech-card">
          <div class="ord-tech-info">
            <div class="ord-tech-avatar">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
            </div>
            <div>
              <div class="ord-tech-name">${order.technician.name}</div>
              <div class="ord-tech-role">${order.technician.vehicle} • ${isActive ? `رسیدن: ${order.technician.eta}` : 'ماموریت تکمیل شد'}</div>
            </div>
          </div>
          <button class="ord-btn-call" onclick="callTechnician('${order.technician.phone}')">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            تماس با تکنسین
          </button>
        </div>
      `;

      actionButtonsHtml = `
        <button class="ord-action-btn ord-btn-invoice" onclick="openInvoiceModal('${order.id}')">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          مشاهده فاکتور رسمی و گارانتی
        </button>
        ${isActive ? `
          <button class="ord-action-btn ord-btn-map" onclick="openTrackingMap('${order.id}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            نقشه زنده اعزام
          </button>
        ` : `
          <button class="ord-action-btn ord-btn-map" onclick="reorderItem('${order.id}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            سفارش مجدد سرویس
          </button>
        `}
      `;
    } else if(isVehicle){
      // استپر خرید خودرو صفر کیلومتر
      stepperHtml = `
        <div class="ord-stepper">
          <div class="ord-step-fill" style="width:${fillWidth};"></div>
          <div class="ord-step-item done">
            <div class="ord-step-circle">✓</div>
            <span class="ord-step-title">ثبت رزرو</span>
          </div>
          <div class="ord-step-item ${step2Class}">
            <div class="ord-step-circle">${order.step >= 2 ? '✓' : '۲'}</div>
            <span class="ord-step-title">صدور مدارک و بیمه</span>
          </div>
          <div class="ord-step-item ${step3Class}">
            <div class="ord-step-circle">${order.step > 3 ? '✓' : '۳'}</div>
            <span class="ord-step-title">بارگیری خودروبر</span>
          </div>
          <div class="ord-step-item ${step4Class}">
            <div class="ord-step-circle">${order.step >= 4 ? '✓' : '۴'}</div>
            <span class="ord-step-title">تحویل درب منزل</span>
          </div>
        </div>
      `;

      executorCardHtml = `
        <div class="ord-carrier-card" style="background:#F0F9FF;border-color:#BAE6FD;">
          <div class="ord-carrier-info">
            <div class="ord-carrier-icon" style="background:#E0F2FE;color:#0284C7;border-color:#BAE6FD;">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div>
              <div class="ord-carrier-name" style="color:#0369A1;">${order.carrier.name}</div>
              <div class="ord-carrier-track-line" style="color:#0284C7;">
                <span>بارنامه خودروبر:</span>
                <span class="ord-track-code" style="border-color:#BAE6FD;color:#0369A1;">${order.carrier.trackCode || order.carrier.trackingCode}</span>
              </div>
            </div>
          </div>
          <button class="ord-btn-call" style="background:#0284C7;" onclick="callTechnician('${order.carrier.phone || '09128889900'}')">
            تماس با راننده
          </button>
        </div>
      `;

      actionButtonsHtml = `
        <button class="ord-action-btn ord-btn-invoice" onclick="openInvoiceModal('${order.id}')">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          مشاهده پیش‌فاکتور رسمی خودرو
        </button>
      `;
    } else {
      // استپر خرید اینترنتی قطعات
      stepperHtml = `
        <div class="ord-stepper">
          <div class="ord-step-fill" style="width:${fillWidth};"></div>
          <div class="ord-step-item done">
            <div class="ord-step-circle">✓</div>
            <span class="ord-step-title">ثبت خرید</span>
          </div>
          <div class="ord-step-item ${step2Class}">
            <div class="ord-step-circle">${order.step >= 2 ? '✓' : '۲'}</div>
            <span class="ord-step-title">بسته‌بندی انبار</span>
          </div>
          <div class="ord-step-item ${step3Class}">
            <div class="ord-step-circle">${order.step > 3 ? '✓' : '۳'}</div>
            <span class="ord-step-title">تحویل به پست/تیپاکس</span>
          </div>
          <div class="ord-step-item ${step4Class}">
            <div class="ord-step-circle">${order.step >= 4 ? '✓' : '۴'}</div>
            <span class="ord-step-title">تحویل به مشتری</span>
          </div>
        </div>
      `;

      // کارت شرکت حمل و نقل (تیپاکس/پست/باربری) به جای کارت تکنسین
      executorCardHtml = `
        <div class="ord-carrier-card">
          <div class="ord-carrier-info">
            <div class="ord-carrier-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div>
              <div class="ord-carrier-name">${order.carrier.name}</div>
              <div class="ord-carrier-track-line">
                <span>بارنامه:</span>
                <span class="ord-track-code">${order.carrier.trackingCode}</span>
                <span>• ${order.carrier.eta}</span>
              </div>
            </div>
          </div>
          <button class="ord-btn-copy-code" onclick="copyTrackingCode('${order.carrier.trackingCode}')">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            کپی کد
          </button>
        </div>
      `;

      actionButtonsHtml = `
        <button class="ord-action-btn ord-btn-invoice" onclick="openInvoiceModal('${order.id}')">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          مشاهده و دانلود فاکتور خرید
        </button>
        <button class="ord-action-btn ord-btn-map" onclick="trackCarrierPackage('${order.carrier.trackingCode}')">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          استعلام در تیپاکس/پست
        </button>
      `;
    }

    card.innerHTML = `
      <div class="ord-card-head">
        <div class="ord-id-wrap">
          <span class="ord-id-pill">کد: ${order.id}</span>
          <span class="ord-date">${order.date}</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="ord-type-badge ${isService ? 'ord-type-service' : 'ord-type-ecommerce'}">
            ${isService ? '🛠️ سرویس در محل' : '📦 خرید اینترنتی کالا'}
          </span>
          <span class="ord-status-badge ${isActive ? 'ord-status-active' : 'ord-status-delivered'}">
            ${isActive ? '<span class="ord-live-dot"></span>' : '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'}
            ${order.statusText}
          </span>
        </div>
      </div>

      <!-- استپر پیشرفت ۴ مرحله‌ای (منطبق با نوع سفارش) -->
      ${stepperHtml}

      <!-- مجری سفارش (تکنسین برای خدمات vs تیپاکس/باربری برای خرید اینترنتی) -->
      ${executorCardHtml}

      <!-- اقلام سفارش -->
      <div class="ord-items-list">
        ${itemsHtml}
      </div>

      <!-- اطلاعات خودرو و تحویل در یک کادر خلاصه، تمیز و خلوت -->
      <div class="ord-summary-bar">
        <div class="ord-summary-item">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#2563EB" stroke-width="2"><rect x="3" y="11" width="18" height="8" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>
          <span class="ord-summary-lbl">خودرو:</span>
          <b>${order.carName}</b>
        </div>
        <div class="ord-summary-item">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#64748B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span class="ord-summary-lbl">تحویل:</span>
          <span>${order.address}</span>
        </div>
      </div>

      <!-- شیوه پرداخت و مبلغ کل -->
      <div class="ord-total-row">
        <span class="ord-total-label">${order.paymentMethod}</span>
        <span class="ord-total-val">${order.total.toLocaleString('fa-IR')} تومان</span>
      </div>

      <!-- دکمه‌های عملیاتی -->
      <div class="ord-actions-row">
        ${actionButtonsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

// کپی کردن کد رهگیری بارنامه
function copyTrackingCode(code){
  if(navigator.clipboard){
    navigator.clipboard.writeText(code).then(() => {
      showToast(`کد رهگیری ${code} کپی شد!`);
    }).catch(() => {
      showToast(`کد رهگیری: ${code}`);
    });
  } else {
    showToast(`کد رهگیری: ${code}`);
  }
}

// استعلام وضعیت بسته در سامانه تیپاکس یا پست
function trackCarrierPackage(code){
  showToast(`در حال استعلام وضعیت مرسوله ${code} از سامانه متمرکز تیپاکس...`);
}

// تماس مستقیم با تکنسین اعزامی
function callTechnician(phone){
  window.location.href = `tel:${phone}`;
  showToast(`در حال برقراری تماس با تکنسین (${phone})...`);
}

// سفارش مجدد
function reorderItem(orderId){
  const order = userOrdersList.find(o => o.id === orderId);
  if(!order) return;
  order.items.forEach(item => {
    quickAddToCart(item.title, item.price);
  });
  closeOrdersModal();
  openCartModal();
  showToast('اقلام به سبد خرید اضافه شدند.');
}

// نمایش موقعیت زنده روی نقشه (برای سفارش‌های خدماتی)
function openTrackingMap(orderId){
  const order = userOrdersList.find(o => o.id === orderId);
  const modal = document.getElementById('trackingMapModal');
  const etaText = document.getElementById('mapEtaText');
  if(order && etaText){
    etaText.textContent = `زمان تقریبی رسیدن تکنسین: ${order.technician ? order.technician.eta : 'در مسیر'}`;
  }
  if(modal) modal.classList.add('open');
}
function closeTrackingMap(e){
  if(e && e.target && e.target.id !== 'trackingMapModal' && !e.target.classList.contains('ord-close-btn')) return;
  const modal = document.getElementById('trackingMapModal');
  if(modal) modal.classList.remove('open');
}

// نمایش فاکتور رسمی (پشتیبانی از هر دو نوع خدماتی و خرید اینترنتی)
function openInvoiceModal(orderId){
  const order = userOrdersList.find(o => o.id === orderId) || userOrdersList[0];
  const modal = document.getElementById('invoiceDetailModal');
  const content = document.getElementById('invoiceModalContent');
  if(!modal || !content || !order) return;

  const isService = order.orderType === 'service';

  const rowsHtml = order.items.map((item, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td class="desc">
        <b>${item.title}</b>
        <div style="font-size:9px;color:#64748B;">${item.warranty}</div>
      </td>
      <td>${item.qty} عدد</td>
      <td>${item.price.toLocaleString('fa-IR')}</td>
      <td>${(order.discount / order.items.length).toLocaleString('fa-IR')}</td>
      <td><b>${((item.price * item.qty) - (order.discount / order.items.length)).toLocaleString('fa-IR')}</b></td>
    </tr>
  `).join('');

  // سطر دوم بر اساس نوع سفارش: اعزام تکنسین vs بسته‌بندی و ارسال پستی
  const isVehicle = order.orderType === 'vehicle';
  let secondRowHtml = '';
  if(isService){
    secondRowHtml = `
      <tr>
        <td>۲</td>
        <td class="desc"><b>خدمت اعزام تکنسین، تست دینام و نصب فابریک در محل</b></td>
        <td>۱ خدمت</td>
        <td>۱۵۰,۰۰۰</td>
        <td>۱۵۰,۰۰۰</td>
        <td><b>رایگان (طرح سراسری آی‌باتری)</b></td>
      </tr>
    `;
  } else if(isVehicle){
    secondRowHtml = `
      <tr>
        <td>۲</td>
        <td class="desc"><b>گواهی کارشناسی رنگ و فنی ۵ ستاره آی‌کارز + حمل با خودروبر کفی</b></td>
        <td>۱ خدمت</td>
        <td>۲,۵۰۰,۰۰۰</td>
        <td>۲,۵۰۰,۰۰۰</td>
        <td><b>رایگان (پوشش سراسری صفرچی)</b></td>
      </tr>
    `;
  } else {
    secondRowHtml = `
      <tr>
        <td>۲</td>
        <td class="desc"><b>هزینه بسته‌بندی ایمن ضد ضربه و ارسال مرسوله پستی/باربری</b></td>
        <td>۱ مرسوله</td>
        <td>${order.shipping.toLocaleString('fa-IR')}</td>
        <td>۰</td>
        <td><b>${order.shipping.toLocaleString('fa-IR')}</b></td>
      </tr>
    `;
  }

  modal.classList.add('open');
}

function closeInvoiceModal(e){
  if(e && e.target && e.target.id !== 'invoiceDetailModal' && !e.target.classList.contains('ord-close-btn') && !e.target.classList.contains('inv-close-footer-btn')) return;
  const modal = document.getElementById('invoiceDetailModal');
  if(modal) modal.classList.remove('open');
}

function printOfficialInvoice(){
  window.print();
  showToast('دستور چاپ و دریافت PDF فاکتور رسمی صادر شد.');
}

// تابع تشخیص هوشمند نوع سفارش (سرویس در محل vs خرید اینترنتی کالا)
function detectOrderTypeFromItems(items){
  const serviceKeywords = ['باتری', 'تعویض در محل', 'سرویس روغن', 'کارواش', 'تعویض فوری', 'امداد'];
  return items.some(item => serviceKeywords.some(kw => (item.title || '').includes(kw))) ? 'service' : 'ecommerce';
}

// ثبت نهایی سفارش با تشخیص خودکار نوع سفارش (خدماتی در محل vs خرید اینترنتی)
function submitFinalOrder(){
  const address = document.getElementById('ccAddressInput') ? document.getElementById('ccAddressInput').value : 'آدرس ثبت‌شده مشتری';
  const ship = (typeof shippingRates !== 'undefined' && shippingRates[activeShippingMethod]) ? shippingRates[activeShippingMethod] : { title: 'ارسال اکسپرس', price: 65000, time: '۲۴ ساعت کاری' };
  const orderNum = 'IC-' + Math.floor(10000 + Math.random() * 90000);

  const car = carDataMap[currentSelectedCar] || carDataMap['pride'];
  const carName = car.name.split('/')[0].trim();

  // محاسبه مبالغ واقعی از سبد
  const rawSubtotal = cartList.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = Math.round(rawSubtotal * 0.15);
  const finalTotal = rawSubtotal - discountAmount + (ship.price || 0);

  const finalItems = cartList.length > 0 ? cartList.map(item => ({
    title: item.title,
    price: item.price,
    qty: item.qty,
    warranty: '۲۴ ماه ضمانت اصالت و تعویض بی‌قیدوشرط',
    img: item.img || 'images/tiles/کلاچ.webp'
  })) : [
    {
      title: `کیت کلاچ والئو سبز اصل فرانسه مخصوص ${carName}`,
      price: 3250000,
      qty: 1,
      warranty: '۲۴ ماه ضمانت اصالت و سلامت فیزیکی',
      img: 'images/tiles/کلاچ.webp'
    }
  ];

  // تشخیص نوع سفارش (سرویس خدماتی یا خرید اینترنتی)
  const isServiceOrder = detectOrderTypeFromItems(finalItems);

  let newOrder;
  if(isServiceOrder === 'service'){
    newOrder = {
      id: orderNum,
      orderType: 'service',
      status: 'active',
      statusText: 'تکنسین در مسیر اعزام با تجهیزات نصب',
      step: 3,
      date: 'لحظاتی پیش',
      carName: car.name,
      address: address || 'تهران، خیابان آزادی، بعد از تقاطع نواب، پلاک ۲۴',
      shippingMethod: 'اعزام تکنسین آی‌کارز (نصب در محل)',
      technician: {
        name: 'مهندس آرش طاهری',
        role: 'تکنسین ارشد اعزامی و عیب‌یاب باتری و برق',
        phone: '۰۹۱۲۳۴۵۶۷۸۹',
        vehicle: 'وانت پراید امدادی ۲۴ ساعته (پلاک تهران ۳۳)',
        eta: ship.time || '۲۵ دقیقه دیگر',
        avatar: (finalItems[0] ? finalItems[0].img : 'images/tiles/باتری.webp')
      },
      items: finalItems,
      subtotal: rawSubtotal || 1850000,
      discount: discountAmount || 250000,
      shipping: 0,
      total: finalTotal || 1600000,
      paymentMethod: 'پرداخت در محل با پوز سیار پس از نصب و تست',
      taxId: 'TX-1403-' + Math.floor(100000 + Math.random() * 900000),
      issueDate: 'امروز - لحظاتی پیش'
    };
  } else {
    // خرید اینترنتی کالا (دیسک و صفحه، تایر، شمع و...)
    const trackingNo = 'TPX-' + Math.floor(1000000000 + Math.random() * 9000000000);
    newOrder = {
      id: orderNum,
      orderType: 'ecommerce',
      status: 'active',
      statusText: 'بسته در حال انتقال بین مراکز توزیع تیپاکس',
      step: 3,
      date: 'لحظاتی پیش',
      carName: car.name,
      address: address || 'تهران، خیابان آزادی، بعد از تقاطع نواب، پلاک ۲۴',
      shippingMethod: ship.title || 'تیپاکس اکسپرس هوایی',
      carrier: {
        name: 'تیپاکس اکسپرس هوایی (Tipax Express)',
        trackingCode: trackingNo,
        eta: 'فردا بین ساعت ۱۰:۰۰ تا ۱۴:۰۰',
        originHub: 'انبار مرکزی پردازش کالا',
        statusDesc: 'مرسوله بسته‌بندی شده و تحویل تیپاکس گردید'
      },
      items: finalItems,
      subtotal: rawSubtotal || 3250000,
      discount: discountAmount || 450000,
      shipping: ship.price || 65000,
      total: finalTotal || 2865000,
      paymentMethod: 'پرداخت آنلاین از طریق درگاه امن شتابی',
      taxId: 'TX-1403-' + Math.floor(100000 + Math.random() * 900000),
      issueDate: 'امروز - لحظاتی پیش'
    };
  }

  userOrdersList.unshift(newOrder);
  updateOrdersCount();

  closeCartModal();
  showToast(isServiceOrder === 'service' ? `سفارش خدماتی ${orderNum} ثبت شد! تکنسین اعزام گردید.` : `خرید اینترنتی ${orderNum} ثبت شد! بسته به تیپاکس تحویل می‌شود.`);

  // پاکسازی سبد
  cartList = [];
  cartItemsCount = 0;
  updateCartCounters();

  // هدایت مستقیم به بخش مدیریت سفارشات
  setTimeout(() => {
    openOrdersModal();
  }, 400);
}


// ۵. استوری‌های اینستاگرامی با نوار پیشرفت و نظرات خریداران
const storyContentMap = {
  'reviews': {
    title: 'حمید شریفی • خریدار لنت تکستار',
    sub: 'پژو ۲۰۷ • خرید تایید شده ۲ روز پیش',
    avatar: 'U',
    img: 'images/tiles/لنت.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«لنت تکستار رو برای ماشین خریدم، کمتر از ۲ ساعت با پیک رسید. ترمزگیری فوق‌العاده نرم شد و اصلاً سوت نمیکشه. بارکد اصالتش رو هم در سامانه ثبت کردم کاملاً اصلی بود!»'
  },
  'lent': {
    title: 'امیرحسین رضایی • خریدار لنت سرامیکی الیگ',
    sub: 'پراید ۱۳۱ • خرید تایید شده هفته گذشته',
    avatar: 'A',
    img: 'images/tiles/لنت.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«لنت سرامیکی الیگ حرف نداره! با اینکه پراید ترمز ضعیفی داره ولی بعد تعویض با این لنت، قدرت ترمزگیری دو برابر شد و دیسک چرخ اصلاً داغ نمیکنه.»'
  },
  'clutch': {
    title: 'مهرداد پاکزاد • دیسک و صفحه والئو سبز',
    sub: 'دنا پلاس • خرید تایید شده دیروز',
    avatar: 'VK',
    img: 'images/shop/clutch-disc-thumb.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«کلاچ به معنای واقعی پنبه شد! لرزش دنده یک کاملاً از بین رفت و شتاب ماشین برگشت به روز اول. گارانتی طلایی شرکتی هم همراه بسته بود.»'
  },
  'oil': {
    title: 'سهراب کریمی • روغن کاسترول مگناتک',
    sub: 'پژو پارس • خرید تایید شده',
    avatar: 'S',
    img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«صدای موتور بعد ریختن این روغن به شدت کم و نرم شد. هولوگرام وارداتی اصلی داشت و فیلتر سرکان هدیه هم داخل پک بود. دمتون گرم.»'
  },
  'battery': {
    title: 'فرشید نادری • تعویض باتری در محل',
    sub: 'کوییک R • سفارش نصب فوری',
    avatar: 'MR',
    img: 'images/photo1/battery.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«باتری ماشین صبح خوابیده بود، درخواست دادم ۲۵ دقیقه بعد تکنسین با پیک رسید، رایگان تست دینام و استارت گرفت و باتری اوربیتال با ۱۸ ماه گارانتی نصب کرد.»'
  },
  'headlight': {
    title: 'علی زمانی • هدلایت ۲۴۰ وات توربو',
    sub: 'تارا V1P • خرید تایید شده',
    avatar: 'Z',
    img: 'images/tiles/هدلایت_و_چراغ.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«نور خط کات عالی بدون اذیت کردن راننده مقابل، فن خنک‌کننده پرسرعت و کامپکت که توی کاسه چراغ کاملاً جا شد. پرتاب نورش توی جاده فوق‌العادست.»'
  },
  'spark': {
    title: 'بابک معتمدی • شمع سوزنی NGK ژاپن',
    sub: 'شاهین توربو • خرید تایید شده',
    avatar: 'M',
    img: 'images/shop/spark-plug-thumb.png',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«کپ کردن اول صبح و ریپ زدن ماشین کاملاً حل شد. مصرف سوخت هم حدود ۱ لیتر در ۱۰۰ کیلومتر کاهش پیدا کرد. شمع اصلی ساخت ژاپن بود.»'
  },
  'audio': {
    title: 'پوریا کاظمی • باند پایونیر اصلی',
    sub: 'سیستم صوتی خودرو',
    avatar: 'P',
    img: 'images/tiles/سیستم_صوتی.webp',
    rating: 'امتیاز: ۵.۰ از ۵.۰ (خریدار تایید شده)',
    quote: '«تفکیک صدای کریستالی و بیس عمیق بدون آمپلی‌فایر. برای داخل درهای فابریک عالی نشست و گارانتی ۱۲ ماهه پایونیران داشت.»'
  }
};

function openStoryViewer(type){
  const data = storyContentMap[type] || storyContentMap['reviews'];
  const modal = document.getElementById('storyViewerModal');
  const title = document.getElementById('svmTitle');
  const sub = document.getElementById('svmSub');
  const avatar = document.getElementById('svmAvatar');
  const img = document.getElementById('svmImg');
  const quote = document.getElementById('svmQuote');
  const rating = document.getElementById('svmRating');
  const card = document.querySelector('.svm-card');

  if(title) title.textContent = data.title;
  if(sub) sub.textContent = data.sub;
  if(avatar) avatar.textContent = data.avatar;
  if(img) img.src = data.img;
  if(quote) quote.textContent = data.quote;
  if(rating) rating.textContent = data.rating;

  if(modal){
    modal.classList.add('open');
    if(card){
      card.classList.remove('playing');
      setTimeout(() => card.classList.add('playing'), 50);
    }
  }

  if(storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    closeStoryModal();
  }, 4800);
}

function closeStoryModal(){
  const modal = document.getElementById('storyViewerModal');
  if(modal) modal.classList.remove('open');
  if(storyTimer) clearTimeout(storyTimer);
}

function likeStory(btn){
  btn.innerHTML = 'تشکر از نظر شما!';
  btn.style.background = '#059669';
  showToast('نظر شما به عنوان مفید ثبت شد.');
}

function quickAddToCart(title, price){
  cartItemsCount++;
  updateCartCounters();
  showToast(`«${title}» به سبد خرید اضافه شد.`);
}

function searchProducts(query){
  if(query.trim().length > 1){
    showToast(`در حال جستجو: «${query}»...`);
  }
}

// enableDragScroll defined in universal engine

// اسلایدر هیرو شاپ
function setShSlide(idx){
  currentShSlide = idx;
  const track = document.getElementById('shTrack');
  if(track) track.style.transform = `translateX(-${idx * 33.3333}%)`;
  document.querySelectorAll('.sh-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

function startShAuto(){
  if(shInterval) clearInterval(shInterval);
  shInterval = setInterval(() => {
    currentShSlide = (currentShSlide + 1) % 3;
    setShSlide(currentShSlide);
  }, 4200);
}

// مقداردهی اولیه در لود صفحه
function deferUntilNear(el, fn, margin){
  if(!el){ fn(); return; }
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(es => { if(es.some(e => e.isIntersecting)){ io.disconnect(); fn(); } }, {rootMargin: margin || '900px 0px', threshold: 0});
    io.observe(el);
  } else { fn(); }
}
window.addEventListener('DOMContentLoaded', () => {
  deferUntilNear(document.getElementById('sefrechiSliderTrack'), () => renderSefrechiSliderCards('all'));
  deferUntilNear(document.getElementById('motorbanoSliderTrack'), () => renderMotorbanoSliderCards());
  navigateTo('shop'); // باز شدن مستقیم روی فروشگاه با هماهنگی ۱۰۰٪ منوی زیرین و کشویی
  enableDragScroll();
  startShAuto();
  startShopSliderAutoPlay(); // اجرای چرخش خودکار اسلایدر ۵ بنر اصلی
  initHeaderTicker();
  initShopHeaderSwipe();
  renderCarPickerList();
  updateCompareFloatingBar();
  updateCartCounters();
});


// ==================== 2026 LUXURY SHOP DATA & LOGIC ====================
const curatedShopProducts = [
  {
    id: 'prod-bat-suzuki',
    cat: 'battery',
    title: 'باتری ۶۰ آمپر سوزوکی ژاپن (اتمی سیلد)',
    brand: 'SUZUKI JAPAN',
    warranty: '۲۴ ماه ضمانت تعویض طلایی',
    price: 2450000,
    oldPrice: 3450000,
    discount: '۲۹٪',
    img: 'images/tiles/باتری.webp'
  },
  {
    id: 'prod-lent-elig',
    cat: 'lent',
    title: 'لنت ترمز سرامیکی الیگ ژاپن (بدون سوت)',
    brand: 'ELIG JAPAN',
    warranty: 'ترمزگیری نرم بدون داغ شدن دیسک',
    price: 1280000,
    oldPrice: 1650000,
    discount: '۲۲٪',
    img: 'images/tiles/لنت.webp'
  },
  {
    id: 'prod-clutch-valeo',
    cat: 'clutch',
    title: 'کیت کلاچ والئو سبز اصل فرانسه (پدال پنبه‌ای)',
    brand: 'VALEO FRANCE',
    warranty: 'ضمانت اصالت با بارکد شرکتی',
    price: 3250000,
    oldPrice: 4200000,
    discount: '۲۳٪',
    img: 'images/tiles/کلاچ.webp'
  },
  {
    id: 'prod-oil-castrol',
    cat: 'oil',
    title: 'روغن موتور کاسترول مگناتک ۴ لیتری (10W-40)',
    brand: 'CASTROL MAGNATEC',
    warranty: 'اصل وارداتی با برچسب هولوگرام',
    price: 890000,
    oldPrice: 1150000,
    discount: '۲۲٪',
    img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
  },
  {
    id: 'prod-spark-ngk',
    cat: 'spark',
    title: 'شمع ایریدیوم NGK ژاپن سوزنی (دست ۴ عددی)',
    brand: 'NGK IRIDIUM IX',
    warranty: 'شتاب حداکثری و کاهش ۱۰٪ مصرف بنزین',
    price: 680000,
    oldPrice: 850000,
    discount: '۲۰٪',
    img: 'images/tiles/شمع.webp'
  },
  {
    id: 'prod-susp-kds',
    cat: 'lent',
    title: 'کمک‌فنر گازی و لنت ترمز تکستار آلمان',
    brand: 'TEXTAR GERMANY',
    warranty: 'ضمانت اصالت و عملکرد عالی',
    price: 1550000,
    oldPrice: 1950000,
    discount: '۲۰٪',
    img: 'images/tiles/جلوبندی.webp'
  },
  {
    id: 'prod-head-conpex',
    cat: 'battery',
    title: 'هدلایت توربو ۲۴۰ وات کانپکس ضد آب',
    brand: 'CONPEX TURBO',
    warranty: '۱ سال گارانتی تعویض شرکتی',
    price: 1420000,
    oldPrice: 1890000,
    discount: '۲۵٪',
    img: 'images/tiles/هدلایت_و_چراغ.webp'
  },
  {
    id: 'prod-rad-ir',
    cat: 'oil',
    title: 'رادیاتور آب دولول پربازده ایران رادیاتور',
    brand: 'IRAN RADIATOR',
    warranty: 'خنک‌کنندگی سریع و بدون رسوب',
    price: 1180000,
    oldPrice: 1450000,
    discount: '۱۹٪',
    img: 'images/tiles/رادیاتور.webp'
  }
];

let currentShopTab = 'all';

function renderModernShopProducts(list = curatedShopProducts){
  const grid = document.getElementById('shopProductsGrid');
  if(!grid) return;
  grid.innerHTML = '';

  list.forEach(p => {
    const isComp = compareList.some(item => item.id === p.id);
    const card = document.createElement('div');
    card.className = 'smp-card';
    card.innerHTML = `
      <div>
        <div class="smp-img-box" onclick="openCategoryModal('${p.cat}')">
          <img loading="lazy" decoding="async"  src="${p.img}" alt="${p.title}">
          <span class="smp-discount-badge">${p.discount}</span>
        </div>
        <div class="smp-brand">${p.brand}</div>
        <div class="smp-title" onclick="openCategoryModal('${p.cat}')">${p.title}</div>
        <div class="smp-warranty">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${p.warranty}</span>
        </div>
      </div>
      <div>
        <div class="smp-price-row">
          <div class="smp-price">${p.price.toLocaleString('fa-IR')} <span>تومان</span></div>
          <div class="smp-old-price">${p.oldPrice.toLocaleString('fa-IR')}</div>
        </div>
        <div class="smp-actions">
          <button class="smp-add-btn" onclick="addToCart(this, '${p.title}', '${p.id}', ${p.price})">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>خرید</span>
          </button>
          <button class="smp-compare-btn ${isComp ? 'active' : ''}" onclick="toggleCompare('${p.id}', this)" title="مقایسه مشخصات">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterShopTab(tabKey, btn){
  currentShopTab = tabKey;
  document.querySelectorAll('.sft-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');

  if(tabKey === 'all'){
    renderModernShopProducts(curatedShopProducts);
  } else {
    const filtered = curatedShopProducts.filter(p => p.cat === tabKey);
    renderModernShopProducts(filtered.length ? filtered : curatedShopProducts);
  }
}

function filterShopProducts(query){
  if(!query || !query.trim()){
    filterShopTab(currentShopTab);
    return;
  }
  const q = query.trim().toLowerCase();
  const matched = curatedShopProducts.filter(p => 
    p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
  );
  renderModernShopProducts(matched);
}

// Initial call on load
window.addEventListener('DOMContentLoaded', () => {
  deferUntilNear(document.getElementById('shopProductsGrid'), () => renderModernShopProducts());
});


// ==================== APPLE MINIMAL AUTO STORE JS ====================
let selectedAppleCategory = 'all';

const appleProductsCatalog = [
  {
    id: 'prod-bat-suzuki',
    cat: 'battery',
    title: 'باتری ۶۰ آمپر سوزوکی ژاپن (اتمی سیلد)',
    brand: 'SUZUKI JAPAN',
    warranty: '۲۴ ماه گارانتی تعویض',
    price: 2450000,
    oldPrice: 3450000,
    discount: '۲۹٪',
    installment: '۴ قسط ماهانه ۶۱۲,۵۰۰ تومان',
    img: 'images/tiles/باتری.webp'
  },
  {
    id: 'prod-lent-elig',
    cat: 'lent',
    title: 'لنت ترمز سرامیکی الیگ ژاپن (بدون سوت)',
    brand: 'ELIG CERAMIC',
    warranty: 'ترمزگیری نرم بدون سوت',
    price: 1280000,
    oldPrice: 1650000,
    discount: '۲۲٪',
    installment: '۴ قسط ماهانه ۳۲۰,۰۰۰ تومان',
    img: 'images/tiles/لنت.webp'
  },
  {
    id: 'prod-clutch-valeo',
    cat: 'clutch',
    title: 'کیت کلاچ والئو سبز اصل فرانسه (پدال پنبه‌ای)',
    brand: 'VALEO FRANCE',
    warranty: 'اصالت تضمینی با بارکد',
    price: 3250000,
    oldPrice: 4200000,
    discount: '۲۳٪',
    installment: '۴ قسط ماهانه ۸۱۲,۵۰۰ تومان',
    img: 'images/tiles/کلاچ.webp'
  },
  {
    id: 'prod-oil-castrol',
    cat: 'oil',
    title: 'روغن موتور کاسترول مگناتک ۴ لیتری (10W-40)',
    brand: 'CASTROL MAGNATEC',
    warranty: 'وارداتی اصل با هولوگرام',
    price: 890000,
    oldPrice: 1150000,
    discount: '۲۲٪',
    installment: '۴ قسط ماهانه ۲۲۲,۵۰۰ تومان',
    img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
  },
  {
    id: 'prod-spark-ngk',
    cat: 'spark',
    title: 'شمع ایریدیوم NGK ژاپن سوزنی لیزری (۴ عددی)',
    brand: 'NGK IRIDIUM IX',
    warranty: 'طول عمر ۱۰۰ هزار کیلومتر',
    price: 680000,
    oldPrice: 850000,
    discount: '۲۰٪',
    installment: '۴ قسط ماهانه ۱۷۰,۰۰۰ تومان',
    img: 'images/tiles/شمع.webp'
  },
  {
    id: 'prod-susp-kds',
    cat: 'suspension',
    title: 'کمک‌فنر گازی و روغنی KDS کره جنوبی اسپرت',
    brand: 'KDS KOREA',
    warranty: '۱۸ ماه ضمانت تعویض',
    price: 1550000,
    oldPrice: 1950000,
    discount: '۲۰٪',
    installment: '۴ قسط ماهانه ۳۸۷,۵۰۰ تومان',
    img: 'images/tiles/جلوبندی.webp'
  },
  {
    id: 'prod-head-conpex',
    cat: 'headlight',
    title: 'هدلایت توربو ۲۴۰ وات کانپکس ضد آب',
    brand: 'CONPEX TURBO',
    warranty: '۱ سال گارانتی بی قید و شرط',
    price: 1420000,
    oldPrice: 1890000,
    discount: '۲۵٪',
    installment: '۴ قسط ماهانه ۳۵۵,۰۰۰ تومان',
    img: 'images/tiles/هدلایت_و_چراغ.webp'
  },
  {
    id: 'prod-rad-ir',
    cat: 'cooling',
    title: 'رادیاتور آب دولول مس و آلومینیوم پربازده',
    brand: 'IRAN RADIATOR',
    warranty: 'خنک‌کنندگی سریع و بدون رسوب',
    price: 1180000,
    oldPrice: 1450000,
    discount: '۱۹٪',
    installment: '۴ قسط ماهانه ۲۹۵,۰۰۰ تومان',
    img: 'images/tiles/رادیاتور.webp'
  },
  {
    id: 'prod-tire-barz',
    cat: 'tire',
    title: 'لاستیک یزد تایر و بارز چهارفصل استاندارد',
    brand: 'YAZD TIRE',
    warranty: '۳ سال ضمانت کارخانه',
    price: 2100000,
    oldPrice: 2600000,
    discount: '۱۹٪',
    installment: '۴ قسط ماهانه ۵۲۵,۰۰۰ تومان',
    img: 'images/tiles/لاستیک.webp'
  },
  {
    id: 'prod-audio-pioneer',
    cat: 'audio',
    title: 'باند پایونیر ۶۹۷۵ اصلی با تفکیک صدای عالی',
    brand: 'PIONEER JAPAN',
    warranty: 'گارانتی اصالت صدا',
    price: 2850000,
    oldPrice: 3500000,
    discount: '۱۸٪',
    installment: '۴ قسط ماهانه ۷۱۲,۵۰۰ تومان',
    img: 'images/tiles/سیستم_صوتی.webp'
  },
  {
    id: 'prod-mirror-sport',
    cat: 'body',
    title: 'آینه بغل تاشو برقی با راهنمای کهربایی LED',
    brand: 'CRUZ PLUS',
    warranty: 'موتور برقی تقویت شده',
    price: 980000,
    oldPrice: 1250000,
    discount: '۲۱٪',
    installment: '۴ قسط ماهانه ۲۴۵,۰۰۰ تومان',
    img: 'images/tiles/آینه_و_بدنه.webp'
  },
  {
    id: 'prod-tools-pro',
    cat: 'tools',
    title: 'جعبه ابزار امدادی و جک هیدرولیکی پرقدرت',
    brand: 'RHINO PRO',
    warranty: 'فولاد کروم وانادیوم نشکن',
    price: 1350000,
    oldPrice: 1700000,
    discount: '۲۰٪',
    installment: '۴ قسط ماهانه ۳۳۷,۵۰۰ تومان',
    img: 'images/tiles/ابزار_و_امداد.webp'
  }
];

function selectHorizontalCat(catKey, el){
  selectedAppleCategory = catKey;
  document.querySelectorAll('.acs-item').forEach(item => item.classList.remove('active'));
  if(el) el.classList.add('active');

  const titleEl = document.getElementById('agsCategoryTitle');
  const countPill = document.getElementById('agsCountPill');

  if(catKey === 'all'){
    if(titleEl) titleEl.textContent = 'قطعات پیشنهادی و برگزیده';
    renderAppleProducts(appleProductsCatalog);
  } else {
    const catData = categoryDataMap[catKey];
    if(titleEl && catData) titleEl.textContent = catData.title;
    const filtered = appleProductsCatalog.filter(p => p.cat === catKey);
    renderAppleProducts(filtered.length ? filtered : appleProductsCatalog);
  }
}

function openCurrentCategoryModal(){
  if(selectedAppleCategory && selectedAppleCategory !== 'all'){
    openCategoryModal(selectedAppleCategory);
  } else {
    openCategoryModal('battery');
  }
}

function renderAppleProducts(products = appleProductsCatalog){
  const grid = document.getElementById('appleProductsGrid');
  const countPill = document.getElementById('agsCountPill');
  if(!grid) return;
  grid.innerHTML = '';

  if(countPill) countPill.textContent = `${products.length} کالا`;

  products.forEach(p => {
    const isComp = compareList.some(item => item.id === p.id);
    const card = document.createElement('div');
    card.className = 'apg-card';
    card.innerHTML = `
      <div>
        <div class="apg-stage" onclick="openCategoryModal('${p.cat}')">
          <img loading="lazy" decoding="async"  src="${p.img}" alt="${p.title}">
          <span class="apg-discount-tag">${p.discount}</span>
        </div>
        <div class="apg-badge">${p.brand}</div>
        <div class="apg-title" onclick="openCategoryModal('${p.cat}')">${p.title}</div>
        <div class="apg-installment-pill">${p.installment}</div>
      </div>
      <div>
        <div class="apg-price-row">
          <div class="apg-price">${p.price.toLocaleString('fa-IR')} <span>تومان</span></div>
          <div class="apg-old-price">${p.oldPrice.toLocaleString('fa-IR')}</div>
        </div>
        <div class="apg-actions">
          <button class="apg-add-btn" onclick="addToCart(this, '${p.title}', '${p.id}', ${p.price})">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span>خرید</span>
          </button>
          <button class="apg-compare-btn ${isComp ? 'active' : ''}" onclick="toggleCompare('${p.id}', this)" title="مقایسه مشخصات">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterShopProducts(query){
  if(!query || !query.trim()){
    selectHorizontalCat(selectedAppleCategory);
    return;
  }
  const q = query.trim().toLowerCase();
  const matched = appleProductsCatalog.filter(p => 
    p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
  );
  renderAppleProducts(matched);
}

// Initial render
window.addEventListener('DOMContentLoaded', () => {
  deferUntilNear(document.getElementById('appleProductsGrid'), () => renderAppleProducts());
});


// ==================== تابلو روان شیشه‌ای هوشمند (SMART TICKER / MARQUEE CONTROLLER) ====================
let tickerPos = 0;
let isTickerPaused = false;
let tickerSingleWidth = 0;
let tickerAnimId = null;

function initHeaderTicker(){
  const track = document.getElementById('tickerTrack');
  const content = document.getElementById('tickerContent');
  const tickerEl = document.getElementById('headerTicker');

  if(!track || !content || !tickerEl) return;

  // Clone content to create infinite seamless loop
  if(track.querySelectorAll('.ticker-content').length === 1){
    const clone1 = content.cloneNode(true);
    clone1.removeAttribute('id');
    const clone2 = content.cloneNode(true);
    clone2.removeAttribute('id');
    track.appendChild(clone1);
    track.appendChild(clone2);
  }

  let isPaused = false;
  let isShowingFlash = false;
  let singleWidth = content.scrollWidth || 880;
  
  // برای حرکت کاملاً پیوسته از چپ به راست:
  // موقعیت اولیه منفی یک عرض کامل است تا کپی دوم از ابتدای نوار وارد شود
  // و محتوا به نرمی از لبه چپ وارد شده و به راست حرکت کند
  let pos = -singleWidth;
  let cycleTravel = 0;

  // توقف موقت هنگام نگه داشتن ماوس یا لمس
  tickerEl.addEventListener('mouseenter', () => { isPaused = true; });
  tickerEl.addEventListener('mouseleave', () => { isPaused = false; });
  tickerEl.addEventListener('touchstart', () => { isPaused = true; }, {passive: true});
  tickerEl.addEventListener('touchend', () => { isPaused = false; });

  function stepTicker(){
    if(!isPaused && !isShowingFlash){
      const measured = content.scrollWidth;
      if(measured > 100){
        singleWidth = measured;
      }
      const speed = 0.82; // حرکت آرام و چشم‌نواز از چپ به راست

      // حرکت پیوسته از چپ به راست
      pos += speed;
      cycleTravel += speed;

      // ریست نامحسوس و بدون پرش پیکسلی
      if(pos >= 0){
        pos -= singleWidth;
      }
      track.style.transform = `translateX(${pos}px)`;

      // پس از اتمام نمایش یک دور کامل تمام خدمات، کارت کد تخفیف نمایش داده می‌شود
      if(cycleTravel >= singleWidth){
        cycleTravel = 0;
        triggerPromoCodeFlash();
      }
    }
    tickerAnimId = requestAnimationFrame(stepTicker);
  }



  function triggerPromoCodeFlash(){
    isShowingFlash = true;
    tickerEl.classList.add('show-flash', 'blinking');
    setTimeout(() => {
      tickerEl.classList.remove('show-flash', 'blinking');
      isShowingFlash = false;
    }, 4200);
  }

  if(tickerAnimId) cancelAnimationFrame(tickerAnimId);
  // حرکت مارکی با انیمیشن CSS (خارج از main-thread) بدون rAF دائمی
  track.style.setProperty('--tw', singleWidth + 'px');
  track.style.animation = 'tickMove ' + Math.max(24, Math.round(singleWidth / 49)) + 's linear infinite';
  track.addEventListener('animationiteration', () => {
    track.style.animationPlayState = 'paused';
    triggerPromoCodeFlash();
    setTimeout(() => { track.style.animationPlayState = 'running'; }, 2600);
  });
  tickerEl.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
  tickerEl.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
  tickerEl.addEventListener('touchstart', () => { track.style.animationPlayState = 'paused'; }, {passive: true});
  tickerEl.addEventListener('touchend', () => { track.style.animationPlayState = 'running'; });
}




// ==================== TAPSI-STYLE MULTI-MODEL TOPIC CAROUSELS DATA ====================
const topicCarouselsData = {
  // ۱. کالای زودفروش اول: روغن موتور و فیلترها (پرمصرف‌ترین سرویس دوره‌ای)
  oil: [
    {
      id: 'oil-1',
      cat: 'oil',
      brand: 'CASTROL MAGNATEC',
      store: 'کاسترول ایران',
      title: 'روغن موتور کاسترول مگناتک ۴ لیتری (10W-40)',
      price: 890000,
      oldPrice: 1150000,
      discount: '۲۲٪',
      inst: '۲۲۲,۵۰۰',
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
    },
    {
      id: 'oil-2',
      cat: 'oil',
      brand: 'TOTAL QUARTZ',
      store: 'توتال شاپ',
      title: 'روغن موتور توتال کوارتز ۷۰۰۰ اصلی امارات ۴ لیتری',
      price: 1150000,
      oldPrice: 1450000,
      discount: '۲۱٪',
      inst: '۲۸۷,۵۰۰',
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
    },
    {
      id: 'oil-3',
      cat: 'oil',
      brand: 'BEHRAN RANA',
      store: 'بهران انلاین',
      title: 'روغن موتور بهران سوپر رانا تمام سنتتیک (5W-30)',
      price: 740000,
      oldPrice: 920000,
      discount: '۱۹٪',
      inst: '۱۸۵,۰۰۰',
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
    },
    {
      id: 'oil-4',
      cat: 'oil',
      brand: 'ADDINOL GERMANY',
      store: 'روغن آلمان',
      title: 'روغن موتور ادینول آلمان اکستریم لایت ۵ لیتری',
      price: 1450000,
      oldPrice: 1850000,
      discount: '۲۱٪',
      inst: '۳۶۲,۵۰۰',
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
    },
    {
      id: 'oil-5',
      cat: 'oil',
      brand: 'SERKAN FILTER',
      store: 'سرکان پارت',
      title: 'پکیج تعویض روغن بهران + فیلتر روغن و هوای سرکان',
      price: 620000,
      oldPrice: 780000,
      discount: '۲۰٪',
      inst: '۱۵۵,۰۰۰',
      img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0'
    }
  ],

  // ۲. کالای زودفروش دوم: لنت و سیستم ترمز تخصصی
  lent: [
    {
      id: 'lent-1',
      cat: 'lent',
      brand: 'ELIG CERAMIC',
      store: 'نمایندگی الیگ',
      title: 'لنت ترمز سرامیکی الیگ ژاپن ترمزگیری بدون سوت',
      price: 1280000,
      oldPrice: 1650000,
      discount: '۲۲٪',
      inst: '۳۲۰,۰۰۰',
      img: 'images/tiles/لنت.webp'
    },
    {
      id: 'lent-2',
      cat: 'lent',
      brand: 'TEXTAR GERMANY',
      store: 'پخش تکستار',
      title: 'لنت ترمز جلو تکستار اصل آلمان بدون داغی',
      price: 1150000,
      oldPrice: 1490000,
      discount: '۲۳٪',
      inst: '۲۸۷,۵۰۰',
      img: 'images/tiles/لنت.webp'
    },
    {
      id: 'lent-3',
      cat: 'lent',
      brand: 'BREMBO ITALY',
      store: 'ایران ترمز',
      title: 'دیسک چرخ سوراخ‌دار خنک‌شونده مسابقه‌ای برمبو',
      price: 1650000,
      oldPrice: 2100000,
      discount: '۲۱٪',
      inst: '۴۱۲,۵۰۰',
      img: 'images/tiles/لنت.webp'
    },
    {
      id: 'lent-4',
      cat: 'lent',
      brand: 'HI-Q KOREA',
      store: 'کره یدک',
      title: 'لنت ترمز های‌کیو گلد کره جنوبی سنسوردار',
      price: 890000,
      oldPrice: 1150000,
      discount: '۲۲٪',
      inst: '۲۲۲,۵۰۰',
      img: 'images/tiles/لنت.webp'
    },
    {
      id: 'lent-5',
      cat: 'lent',
      brand: 'EMCO OE',
      store: 'اتحاد موتور',
      title: 'لنت ترمز امکو شرکتی گارانتی ۱۲ ماهه',
      price: 620000,
      oldPrice: 790000,
      discount: '۲۱٪',
      inst: '۱۵۵,۰۰۰',
      img: 'images/tiles/لنت.webp'
    }
  ],

  // ۳. کالای زودفروش سوم: باتری و برق خودرو
  battery: [
    {
      id: 'bat-1',
      cat: 'battery',
      brand: 'SUZUKI JAPAN',
      store: 'سپاهان باتری',
      title: 'باتری ۶۰ آمپر سوزوکی ژاپن اتمیک سیلد',
      price: 2450000,
      oldPrice: 3450000,
      discount: '۲۹٪',
      inst: '۶۱۲,۵۰۰',
      img: 'images/tiles/باتری.webp'
    },
    {
      id: 'bat-2',
      cat: 'battery',
      brand: 'ORBITAL SILVER',
      store: 'امداد باتری',
      title: 'باتری ۵۰ آمپر اوربیتال وان سیلور پرقدرت',
      price: 1850000,
      oldPrice: 2550000,
      discount: '۲۷٪',
      inst: '۴۶۲,۵۰۰',
      img: 'images/tiles/باتری.webp'
    },
    {
      id: 'bat-3',
      cat: 'battery',
      brand: 'ATOMIC CALCIUM',
      store: 'سپاهان باتری',
      title: 'باتری ۶۶ آمپر اتمیک کلسیم پلاس شارژدار',
      price: 2350000,
      oldPrice: 3100000,
      discount: '۲۴٪',
      inst: '۵۸۷,۵۰۰',
      img: 'images/tiles/باتری.webp'
    },
    {
      id: 'bat-4',
      cat: 'battery',
      brand: 'SABA VARIAN',
      store: 'صباباتری',
      title: 'باتری ۷۴ آمپر صبا واریان استارت پرقدرت',
      price: 1950000,
      oldPrice: 2450000,
      discount: '۲۰٪',
      inst: '۴۸۷,۵۰۰',
      img: 'images/tiles/باتری.webp'
    },
    {
      id: 'bat-5',
      cat: 'battery',
      brand: 'VARTA GERMANY',
      store: 'بازرگانی وارتا',
      title: 'باتری ۷۰ آمپر وارتا آلمان سیلد بدون نیاز به آب',
      price: 3400000,
      oldPrice: 4200000,
      discount: '۱۹٪',
      inst: '۸۵۰,۰۰۰',
      img: 'images/tiles/باتری.webp'
    }
  ],

  // ۴. کالای زودفروش چهارم: دیسک و صفحه کلاچ
  clutch: [
    {
      id: 'clutch-1',
      cat: 'clutch',
      brand: 'VALEO FRANCE',
      store: 'پخش والئو',
      title: 'کیت کلاچ والئو سبز اصل فرانسه پری‌دمپر نرم',
      price: 3250000,
      oldPrice: 4200000,
      discount: '۲۳٪',
      inst: '۸۱۲,۵۰۰',
      img: 'images/tiles/کلاچ.webp'
    },
    {
      id: 'clutch-2',
      cat: 'clutch',
      brand: 'DAIKIN EXEDY',
      store: 'ژاپن یدک',
      title: 'دیسک و صفحه دایکن ژاپن پدال پنبه‌ای بدون لرزش',
      price: 3600000,
      oldPrice: 4600000,
      discount: '۲۲٪',
      inst: '۹۰۰,۰۰۰',
      img: 'images/tiles/کلاچ.webp'
    },
    {
      id: 'clutch-3',
      cat: 'clutch',
      brand: 'SECO KOREA',
      store: 'سکو پارت',
      title: 'کیت کلاچ سکو کره جنوبی شتاب‌گیری روان',
      price: 2850000,
      oldPrice: 3600000,
      discount: '۲۱٪',
      inst: '۷۱۲,۵۰۰',
      img: 'images/tiles/کلاچ.webp'
    },
    {
      id: 'clutch-4',
      cat: 'clutch',
      brand: 'LUK GERMANY',
      store: 'آلمان پارت',
      title: 'دیسک و صفحه لوک آلمان بلبرینگ دوبل تقویتی',
      price: 3900000,
      oldPrice: 4900000,
      discount: '۲۰٪',
      inst: '۹۷۵,۰۰۰',
      img: 'images/tiles/کلاچ.webp'
    },
    {
      id: 'clutch-5',
      cat: 'clutch',
      brand: 'EZAM PLUS',
      store: 'عظام انلاین',
      title: 'کیت کلاچ عظام پلاس پری‌دمپر صادراتی',
      price: 2100000,
      oldPrice: 2650000,
      discount: '۲۱٪',
      inst: '۵۲۵,۰۰۰',
      img: 'images/tiles/کلاچ.webp'
    }
  ],

  // ۵. شمع، وایر و سیستم جرقه
  spark: [
    {
      id: 'spark-1',
      cat: 'spark',
      brand: 'NGK IRIDIUM',
      store: 'ژاپن یدک',
      title: 'شمع ایریدیوم NGK ژاپن سوزنی لیزری دست ۴ عددی',
      price: 680000,
      oldPrice: 850000,
      discount: '۲۰٪',
      inst: '۱۷۰,۰۰۰',
      img: 'images/tiles/شمع.webp'
    },
    {
      id: 'spark-2',
      cat: 'spark',
      brand: 'DENSO POWER',
      store: 'دنسو پارت',
      title: 'شمع دنسو ایریدیوم پاور ژاپن کاهش مصرف بنزین',
      price: 740000,
      oldPrice: 940000,
      discount: '۲۱٪',
      inst: '۱۸۵,۰۰۰',
      img: 'images/tiles/شمع.webp'
    },
    {
      id: 'spark-3',
      cat: 'spark',
      brand: 'BOSCH GERMANY',
      store: 'بوش سنتر',
      title: 'شمع بوش دو پلاتین سوپرفایر اصل آلمان دست ۴ تایی',
      price: 590000,
      oldPrice: 750000,
      discount: '۲۱٪',
      inst: '۱۴۷,۵۰۰',
      img: 'images/tiles/شمع.webp'
    },
    {
      id: 'spark-4',
      cat: 'spark',
      brand: 'BOUGICORD',
      store: 'برق خودرو',
      title: 'وایر شمع تمام سیلیکونی بوجیکورد مقاومت صفر',
      price: 320000,
      oldPrice: 420000,
      discount: '۲۴٪',
      inst: '۸۰,۰۰۰',
      img: 'images/tiles/شمع.webp'
    },
    {
      id: 'spark-5',
      cat: 'spark',
      brand: 'VALEO IGNITION',
      store: 'والئو پارت',
      title: 'کویل دوبل والئو تقویت جرقه و شتاب موتور',
      price: 890000,
      oldPrice: 1100000,
      discount: '۱۹٪',
      inst: '۲۲۲,۵۰۰',
      img: 'images/tiles/شمع.webp'
    }
  ],

  // ۶. هدلایت و سیستم روشنایی
  headlight: [
    {
      id: 'head-1',
      cat: 'headlight',
      brand: 'CONPEX TURBO',
      store: 'توربو لایت',
      title: 'هدلایت توربو ۲۴۰ وات کانپکس پرنور ضد آب خط کات دقیق',
      price: 1420000,
      oldPrice: 1890000,
      discount: '۲۵٪',
      inst: '۳۵۵,۰۰۰',
      img: 'images/tiles/هدلایت_و_چراغ.webp'
    },
    {
      id: 'head-2',
      cat: 'headlight',
      brand: 'PHILIPS ULTINON',
      store: 'فیلیپس پارت',
      title: 'هدلایت فیلیپس LED التینون پرو ۵۰۰۰ خطی بدون لرزش نور',
      price: 1950000,
      oldPrice: 2450000,
      discount: '۲۰٪',
      inst: '۴۸۷,۵۰۰',
      img: 'images/tiles/هدلایت_و_چراغ.webp'
    },
    {
      id: 'head-3',
      cat: 'headlight',
      brand: 'OSRAM NIGHT',
      store: 'اسرام سنتر',
      title: 'لامپ اسرام نایت بریکر لیزری اصل آلمان پرتاب نور بالا',
      price: 880000,
      oldPrice: 1150000,
      discount: '۲۳٪',
      inst: '۲۲۰,۰۰۰',
      img: 'images/tiles/هدلایت_و_چراغ.webp'
    },
    {
      id: 'head-4',
      cat: 'headlight',
      brand: 'M8 PRO COPPER',
      store: 'لایت پلاس',
      title: 'هدلایت M8 پرو فن دوبل لوله مسی خنک‌کننده',
      price: 1100000,
      oldPrice: 1400000,
      discount: '۲۱٪',
      inst: '۲۷۵,۰۰۰',
      img: 'images/tiles/هدلایت_و_چراغ.webp'
    },
    {
      id: 'head-5',
      cat: 'headlight',
      brand: 'TIGER LENS',
      store: 'زنون سنتر',
      title: 'پروژکتور مه‌شکن تایگر لنزدار ۳ حالته زنون سفید زرد',
      price: 1680000,
      oldPrice: 2100000,
      discount: '۲۰٪',
      inst: '۴۲۰,۰۰۰',
      img: 'images/tiles/هدلایت_و_چراغ.webp'
    }
  ]
};

// ==================== UNIVERSAL SMOOTH DRAG & WHEEL SCROLL ENGINE ====================

// ناوبری دقیق با فلش‌های اشاره‌گر (چپ و راست) با قابلیت لوپ (Loop)
function scrollTrack(trackId, dir){
  const track = document.getElementById(trackId);
  if(!track) return;

  const isCat = (trackId === 'shopCatScroller');
  const step = isCat ? 140 : 170;
  
  const isLeft = (dir === 'left' || dir === 'next' || dir === -1);
  const delta = isLeft ? -step : step;
  const startScroll = track.scrollLeft;

  // اسکرول نرم در جهت مشخص شده
  track.scrollBy({ left: delta, behavior: 'smooth' });

  // بررسی وضعیت مرزها برای دور زدن و حلقه کاروسل (Loop)
  setTimeout(() => {
    if(Math.abs(track.scrollLeft - startScroll) < 4){
      if(isLeft){
        track.scrollTo({ left: 0, behavior: 'smooth' });
        if(track.scrollLeft === startScroll){
          track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        }
      } else {
        track.scrollTo({ left: -track.scrollWidth, behavior: 'smooth' });
        if(track.scrollLeft === startScroll){
          track.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }
  }, 140);
}

// اتصال کامل اشاره‌گر (Pointer, Mouse, Touch) به عنصر افقی
function attachDragScrollToElement(slider){
  if(!slider) return;

  slider.style.cursor = 'grab';
  slider.style.userSelect = 'none';
  slider.style.webkitUserSelect = 'none';
  slider.style.touchAction = 'pan-x pan-y';

  // غیرفعال‌سازی درگ تصاویر
  slider.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.style.userSelect = 'none';
    img.style.webkitUserDrag = 'none';
    img.style.pointerEvents = 'none';
  });

  if(slider._pointerAttached) return;
  slider._pointerAttached = true;

  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasMoved = false;
  let activePointerId = null;

  // استفاده از Pointer Events برای سازگاری همزمان با ماوس، لمس دست، ترک‌پد و قلم
  slider.addEventListener('pointerdown', (e) => {
    if(e.pointerType !== 'mouse') return; // لمس: اسکرول بومی با اینرسی
    if(e.button !== 0) return;
    isDown = true;
    hasMoved = false;
    startX = e.clientX;
    scrollStart = slider.scrollLeft;
    activePointerId = e.pointerId;
    slider.style.cursor = 'grabbing';
  });

  slider.addEventListener('pointermove', (e) => {
    if(!isDown) return;
    const dx = e.clientX - startX;
    if(Math.abs(dx) > 12){
      if(!hasMoved){
        hasMoved = true;
        try { slider.setPointerCapture(activePointerId); } catch(err){}
      }
      e.preventDefault();
      // تست سازگاری RTL
      slider.scrollLeft = scrollStart - dx;
      if(slider.scrollLeft === scrollStart){
        slider.scrollLeft = scrollStart + dx;
      }
    }
  });

  const onPointerFinish = (e) => {
    if(!isDown) return;
    isDown = false;
    slider.style.cursor = 'grab';
    if(activePointerId !== null){
      try { slider.releasePointerCapture(activePointerId); } catch(err){}
      activePointerId = null;
    }
    setTimeout(() => { hasMoved = false; }, 60);
  };

  slider.addEventListener('pointerup', onPointerFinish);
  slider.addEventListener('pointercancel', onPointerFinish);

  // جلوگیری از کلیک ناخواسته کارت هنگام پیمایش
  slider.addEventListener('click', (e) => {
    if(hasMoved){
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
    }
  }, true);

  // اسکرول بسیار نرم با چرخاندن غلتک ماوس (Wheel)
  slider.addEventListener('wheel', (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if(Math.abs(delta) > 2){
      e.preventDefault();
      const old = slider.scrollLeft;
      const step = (delta > 0 ? 1 : -1) * Math.min(Math.abs(delta) * 1.5, 95);
      slider.scrollLeft += step;
      if(slider.scrollLeft === old){
        slider.scrollLeft -= step;
      }
    }
  }, { passive: false });
}

// فعال‌سازی روی تمامی کاروسل‌ها، نوار کاشی‌ها و دسته‌ها
function enableDragScroll(){
  const selectors = [
    '#shopCatScroller',
    '.shop-cat-scroller',
    '.tapsi-carousel-track',
    '.cm-sort-track',
    '.shop-carousel-wrap',
    '.shop-stories-wrap',
    '.micro-bestsellers-wrap',
    '.cfb-pills-wrap',
    '.shop-filter-tabs',
    '.scu-pills-wrap'
  ];

  document.querySelectorAll(selectors.join(', ')).forEach(el => {
    attachDragScrollToElement(el);
  });
}

function renderTapsiTopicCarousels(){
  const adaptedTopics = ['oil', 'lent', 'battery', 'clutch'];
  Object.keys(topicCarouselsData).forEach(topicKey => {
    const __trk = document.getElementById('track-' + topicKey);
    deferUntilNear(__trk && (__trk.closest('.shop-carousel-section') || __trk), () => __buildTopicCarousel(topicKey, adaptedTopics));
  });
  enableDragScroll();
}
function __buildTopicCarousel(topicKey, adaptedTopics){
  adaptedTopics = adaptedTopics || ['oil', 'lent', 'battery', 'clutch'];
  {
    const track = document.getElementById(`track-${topicKey}`);
    if(!track) return;
    track.innerHTML = '';

    let list = topicCarouselsData[topicKey];
    if(adaptedTopics.includes(topicKey)){
      const vProds = getVehicleSpecificProducts(topicKey, currentSelectedCar);
      if(vProds && vProds.length > 0){
        list = vProds.map(vp => ({
          id: vp.id,
          cat: topicKey,
          brand: vp.brand.split('•')[0].trim(),
          store: 'تامین رسمی آی‌کارز',
          title: vp.title,
          price: vp.price,
          oldPrice: vp.oldPrice,
          discount: vp.discount,
          inst: vp.inst || Math.round(vp.price / 4).toLocaleString('fa-IR'),
          img: vp.img,
          compat: vp.compat
        }));
      }
    }
    list.forEach(p => {
      const isBattery = (p.cat === 'battery' || topicKey === 'battery' || (p.title && p.title.includes('باتری')));
      const brandClean = (p.brand || 'اورجینال شرکتی').split('•')[0].trim();
      const compatShort = (carCompatDb[p.id] && carCompatDb[p.id].compatShort) || 'انواع خودرو';

      const card = document.createElement('div');
      card.className = 'tc-card';
      card.style.cursor = 'pointer';
      card.onclick = (e) => {
        if(e.target.closest('.tc-add-btn')) return;
        openProductSpecModal(p.id);
      };
      card.innerHTML = `
        <!-- استیج تصویر کاملاً آزاد، تمیز و حرفه‌ای -->
        <div class="tc-stage">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>

        <!-- برند و عنوان مینیمال -->
        <div class="tc-info">
          <div class="tc-brand-row">
            <span class="tc-brand">${brandClean}</span>
            ${isBattery ? '<span class="tc-badge-service">نصب در محل</span>' : ''}
          </div>
          <div class="tc-title" title="${p.title}">${p.title}</div>
          <div class="tc-compat">فابریک ${compatShort}</div>
        </div>

        <!-- قیمت و افزودن به سبد -->
        <div class="tc-foot">
          <div class="tc-price-wrap">
            ${p.oldPrice ? `<span class="tc-old">${p.oldPrice.toLocaleString('fa-IR')}</span>` : ''}
            <div class="tc-price">${p.price.toLocaleString('fa-IR')} <span>تومان</span></div>
          </div>
          <button class="tc-add-btn" onclick="event.stopPropagation(); addToCart(this, \'${p.title}\', \'${p.id}\', ${p.price})" title="افزودن به سبد"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
        </div>
      `;
      track.appendChild(card);
    });
  }
}

function filterShopSearch(query){
  if(!query || !query.trim()){
    renderTapsiTopicCarousels();
  renderVehicleProfileHub(currentSelectedCar);
    return;
  }
  const q = query.trim().toLowerCase();
  Object.keys(topicCarouselsData).forEach(k => { const t = document.getElementById('track-' + k); if(t && !t.childElementCount) __buildTopicCarousel(k); });
  Object.keys(topicCarouselsData).forEach(topicKey => {
    const track = document.getElementById(`track-${topicKey}`);
    if(!track) return;
    const cards = track.querySelectorAll('.tc-card');
    cards.forEach(c => {
      const txt = c.textContent.toLowerCase();
      c.style.display = txt.includes(q) ? 'flex' : 'none';
    });
  });
}

// Initial render of topic carousels
window.addEventListener('DOMContentLoaded', () => {
  initAppTheme();
  renderTapsiTopicCarousels();
  renderVehicleProfileHub(currentSelectedCar);
});


// ۵. مدیریت اسلایدر ۳ تایی هدر فروشگاه (کارنامه خودرو و خدمات)
let currentShopSlide = 0;
let shopSlideInterval = null;

function goToShopSlide(idx){
  currentShopSlide = (idx + 5) % 5;
  const track = document.getElementById('shsSliderTrack');
  const dots = document.querySelectorAll('#shsSliderDots .shs-dot');
  if(track){
    track.style.transition = 'transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)';
    track.style.transform = `translateX(-${currentShopSlide * 20}%)`;
  }
  dots.forEach((d, i) => {
    d.classList.toggle('active', i === currentShopSlide);
  });
}

function prevShopSlide(e){
  if(e) e.stopPropagation();
  goToShopSlide(currentShopSlide - 1);
  startShopSliderAutoPlay();
}

function nextShopSlide(e){
  if(e) e.stopPropagation();
  goToShopSlide(currentShopSlide + 1);
  startShopSliderAutoPlay();
}

function startShopSliderAutoPlay(){
  if(shopSlideInterval) clearInterval(shopSlideInterval);
  shopSlideInterval = setInterval(() => {
    goToShopSlide(currentShopSlide + 1);
  }, 3500);
}

function stopShopSliderAutoPlay(){
  if(shopSlideInterval) clearInterval(shopSlideInterval);
}

// کارنامه سلامت و تشخیص رنگ خودرو
function openVehicleResumeModal(){
  const m = document.getElementById('vehicleResumeModal');
  if(!m) return;
  const data = carDataMap[currentSelectedCar] || carDataMap['pride'];
  const titleEl = document.getElementById('vrmCarTitle');
  const mileEl = document.getElementById('vrmCarMileage');
  const certEl = document.getElementById('vrmCertCode');
  
  if(titleEl) titleEl.textContent = data.name;
  if(mileEl) mileEl.textContent = document.getElementById('shsMileage') ? document.getElementById('shsMileage').textContent : '۴۸,۵۰۰';
  if(certEl) certEl.textContent = 'CR-' + (84000 + (data.name.length * 37) % 9000);

  m.classList.add('open');
}

function closeVehicleResumeModal(e){
  if(e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('svm-close')) return;
  const m = document.getElementById('vehicleResumeModal');
  if(m) m.classList.remove('open');
}

function syncCarInspectionApi(btn){
  if(!btn) return;
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" style="animation:spin 1s linear infinite;"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> <span>در حال استعلام از سرور مرکزی...</span>';
  setTimeout(() => {
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>استعلام موفق: کارنامه رنگ تایید شد</span>';
    showToast('اطلاعات کارشناسی رنگ و سلامت بدنه مستقیماً از سامانه مرکزی به‌روزرسانی شد.');
  }, 1200);
}


// ==================== موتور پیشرفته جابجایی بنرها با ماوس و لمس دست (Real-time Drag & Swipe Engine) ====================
let isShopDragging = false;
let shopStartX = 0;
let shopCurrentX = 0;
let shopDiffX = 0;
let shopHasDragged = false;

function initShopHeaderSwipe(){
  const stage = document.getElementById('shopHeaderStage');
  const track = document.getElementById('shsSliderTrack');
  if(!stage || !track) return;

  stage.addEventListener('pointerdown', (e) => {
    if(e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    isShopDragging = true;
    shopHasDragged = false;
    shopStartX = e.clientX;
    shopCurrentX = e.clientX;
    shopDiffX = 0;
    
    stopShopSliderAutoPlay();
    stage.classList.add('is-dragging');
    track.style.transition = 'none';
    try {
      stage.setPointerCapture(e.pointerId);
    } catch(err){}
  });

  stage.addEventListener('pointermove', (e) => {
    if(!isShopDragging) return;
    shopCurrentX = e.clientX;
    shopDiffX = shopCurrentX - shopStartX;

    if(Math.abs(shopDiffX) > 6){
      shopHasDragged = true;
    }

    const wrapW = stage.clientWidth || 360;
    // محاسبه موقعیت لحظه‌ای ترنزیشن بر اساس جابجایی ماوس/انگشت (هر اسلاید ۲۰٪ کل تراک است)
    const basePct = -(currentShopSlide * 20);
    const dragDeltaPct = (shopDiffX / wrapW) * 20;
    const livePct = basePct + dragDeltaPct;

    track.style.transform = `translateX(${livePct}%)`;
  });

  const onPointerEnd = (e) => {
    if(!isShopDragging) return;
    isShopDragging = false;
    stage.classList.remove('is-dragging');
    try {
      stage.releasePointerCapture(e.pointerId);
    } catch(err){}

    const wrapW = stage.clientWidth || 360;
    const threshold = Math.max(30, wrapW * 0.10);

    track.style.transition = 'transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)';

    if(shopDiffX < -threshold){
      // کشیدن به سمت چپ: بنر بعدی
      goToShopSlide(currentShopSlide + 1);
    } else if(shopDiffX > threshold){
      // کشیدن به سمت راست: بنر قبلی
      goToShopSlide(currentShopSlide - 1);
    } else {
      // رهاسازی بدون رسیدن به حد آستانه: بازگشت کشسان به بنر فعلی
      goToShopSlide(currentShopSlide);
    }

    setTimeout(() => {
      shopDiffX = 0;
      shopHasDragged = false;
    }, 60);

    startShopSliderAutoPlay();
  };

  stage.addEventListener('pointerup', onPointerEnd);
  stage.addEventListener('pointercancel', onPointerEnd);

  // مهار کلیک‌های تصادفی هنگام کشیدن انگشت یا ماوس
  stage.querySelectorAll('.shs-slide').forEach(slide => {
    slide.addEventListener('click', (e) => {
      if(shopHasDragged){
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  });

  stage.addEventListener('mouseenter', () => {
    if(!isShopDragging) stopShopSliderAutoPlay();
  });
  stage.addEventListener('mouseleave', () => {
    if(!isShopDragging) startShopSliderAutoPlay();
  });
}


// ==================== مدیریت کارت مشخصات فنی و شناسنامه تخصصی محصول ====================

// پایگاه جامع تطابق و سازگاری خودروها
const carCompatDb = {'bat-1': {'compat': 'پژو ۲۰۶ (کلیه تیپ\u200cها)، پژو ۲۰۷، رانا و رانا پلاس، تارا، دنا پلاس، جک J4، ام\u200cوی\u200cام 315', 'compatShort': 'پژو ۲۰۶، ۲۰۷، رانا، تارا، دنا', 'carsList': ['پژو ۲۰۶ (کلیه تیپ\u200cها)', 'پژو ۲۰۷ دنده\u200cای و اتومات', 'رانا و رانا پلاس', 'تارا دنده\u200cای و اتومات', 'جک J4', 'ام\u200cوی\u200cام ۳۱۵']}, 'bat-2': {'compat': 'پراید ۱۳۱، ۱۱۱، ۱۳۲، ۱۴۱، صبا، نسیم، تیبا ۱ و ۲، ساینا، کوییک (تمامی مدل\u200cها)', 'compatShort': 'پراید، تیبا، ساینا، کوییک', 'carsList': ['پراید (کلیه مدل\u200cها)', 'تیبا ۱ و تیبا ۲', 'ساینا و ساینا S', 'کوییک و کوییک R', 'رنو پی\u200cکی']}, 'bat-3': {'compat': 'پژو پارس سال و TU5، سمند LX، سورن پلاس، دنا، دنا پلاس، پژو ۴۰۵، تندر ۹۰، زانتیا', 'compatShort': 'پارس، سمند، دنا، ۴۰۵، ال۹۰', 'carsList': ['پژو پارس سال و TU5', 'سمند LX و سورن پلاس', 'دنا و دنا پلاس', 'پژو ۴۰۵ GLX و SLX', 'تندر ۹۰ و ساندرو', 'سیتروئن زانتیا']}, 'bat-4': {'compat': 'سمند موتور ملی EF7، دنا پلاس توربو، پژو پارس ELX، زانتیا، رنو مگان، سراتو، تیگو ۵', 'compatShort': 'سمند EF7، دنا توربو، مگان، زانتیا', 'carsList': ['سمند و سورن EF7', 'دنا پلاس توربوشارژ', 'رنو مگان ۲۰۰۰', 'پژو پارس ELX', 'کیا سراتو ۲۰۰۰', 'چری تیگو ۵']}, 'bat-5': {'compat': 'رنو مگان، نیسان ماکسیما، مزدا ۳، سوزوکی ویتارا، هیوندای سوناتا، هایما S7، فیدلیتی', 'compatShort': 'ماکسیما، مگان، مزدا ۳، ویتارا', 'carsList': ['نیسان ماکسیما', 'رنو مگان و فلوئنس', 'مزدا ۳ و ۳ نیو', 'سوزوکی ویتارا ۲۴۰۰', 'هیوندای سوناتا', 'فیدلیتی']}, 'lent-1': {'compat': 'دنا پلاس، سمند LX، سورن پلاس، تارا، پژو پارس سال، پژو ۲۰۶ تیپ ۵', 'compatShort': 'دنا پلاس، سمند، پارس، تارا', 'carsList': ['دنا و دنا پلاس', 'سمند LX و سورن پلاس', 'تارا دنده\u200cای و اتومات', 'پژو پارس سال و TU5', 'پژو ۲۰۶ تیپ ۵']}, 'lent-2': {'compat': 'پژو ۲۰۶ (تیپ ۲، ۳ و ۵)، پژو ۲۰۷، رانا و رانا پلاس، دانگ\u200cفنگ H30 Cross', 'compatShort': 'پژو ۲۰۶، ۲۰۷، رانا، H30 Cross', 'carsList': ['پژو ۲۰۶ (کلیه تیپ\u200cها)', 'پژو ۲۰۷i دنده\u200cای و پانوراما', 'رانا و رانا پلاس', 'دانگ\u200cفنگ H30 کراس']}, 'lent-3': {'compat': 'پژو ۲۰۶، ۲۰۷، پارس TU5، دنا پلاس توربو، رانا، سمند (کالیپر تقویت\u200cشده)', 'compatShort': '۲۰۶، ۲۰۷، پارس TU5، دنا توربو', 'carsList': ['پژو ۲۰۶ و ۲۰۷', 'دنا پلاس توربو', 'پژو پارس TU5', 'رانا پلاس']}, 'lent-4': {'compat': 'پراید صبا، ۱۳۱، ۱۱۱، ۱۳۲، تیبا ۱ و ۲، ساینا، کوییک، کیا ریو، دوو سیلو', 'compatShort': 'پراید، تیبا، ساینا، کوییک', 'carsList': ['پراید (تمامی مدل\u200cها)', 'تیبا ۱ و تیبا ۲', 'ساینا و ساینا S', 'کوییک و کوییک R', 'کیا ریو']}, 'lent-5': {'compat': 'پژو ۴۰۵ GLX و SLX، پژو پارس سال، سمند LX، سورن موتور XU7 و EF7', 'compatShort': 'پژو ۴۰۵، پارس سال، سمند LX', 'carsList': ['پژو ۴۰۵ بنزینی و دوگانه', 'پژو پارس موتور XU7', 'سمند معمولی و LX', 'سورن معمولی']}, 'clutch-1': {'compat': 'پژو ۲۰۶ تیپ ۵، پژو ۲۰۷، رانا، رانا پلاس، تارا، پژو پارس TU5، اچ\u200cسی کراس', 'compatShort': '۲۰۶ تیپ ۵، ۲۰۷، رانا، تارا، پارس', 'carsList': ['پژو ۲۰۶ تیپ ۵', 'پژو ۲۰۷ دنده\u200cای و MC', 'رانا و رانا پلاس', 'تارا دنده\u200cای', 'پژو پارس TU5']}, 'clutch-2': {'compat': 'پراید (صبا، ۱۳۱، ۱۱۱، ۱۳۲)، تیبا ۱ و ۲، ساینا، کوییک، شاهین دنده\u200cای', 'compatShort': 'پراید، تیبا، ساینا، کوییک، شاهین', 'carsList': ['پراید (کلیه مدل\u200cها)', 'تیبا ۱ و تیبا ۲', 'ساینا و ساینا S', 'کوییک دنده\u200cای و اتومات', 'شاهین G و S']}, 'clutch-3': {'compat': 'پژو ۴۰۵، پژو پارس سال، سمند LX، سمند سورن (کلیه موتورهای XU7)', 'compatShort': 'پژو ۴۰۵، پارس سال، سمند XU7', 'carsList': ['پژو ۴۰۵ GLX و SLX', 'پژو پارس سال', 'سمند LX بنزینی و گازسوز', 'سورن XU7']}, 'clutch-4': {'compat': 'سمند موتور ملی EF7، دنا، دنا پلاس، سورن پلاس، تندر ۹۰ (ال۹۰)، ساندرو', 'compatShort': 'سمند EF7، دنا، دنا پلاس، ال۹۰', 'carsList': ['سمند موتور ملی EF7', 'دنا و دنا پلاس', 'سورن پلاس EF7', 'تندر ۹۰ (ال۹۰)', 'رنو ساندرو']}, 'clutch-5': {'compat': 'پراید ۱۳۱، ۱۱۱، ۱۳۲، ۱۴۱، صبا، نسیم، تیبا، ساینا، کوییک', 'compatShort': 'پراید، تیبا، ساینا، کوییک', 'carsList': ['پراید (کلیه مدل\u200cها)', 'تیبا صندوقدار و هاچبک', 'ساینا معمولی', 'کوییک دنده\u200cای']}, 'oil-1': {'compat': 'پژو ۲۰۶ تیپ ۲، پژو ۴۰۵، پژو پارس سال، سمند LX، پراید، تیبا، ساینا، کوییک', 'compatShort': '۲۰۶ تیپ ۲، پارس، سمند، پراید، تیبا', 'carsList': ['پژو ۲۰۶ تیپ ۲ و ۳', 'پژو ۴۰۵ و پارس XU7', 'سمند LX', 'پراید و تیبا', 'ساینا و کوییک']}, 'oil-2': {'compat': 'پژو ۲۰۶ تیپ ۵، ۲۰۷، رانا، تارا، پارس TU5، زانتیا، تندر ۹۰، ساندرو، مگان', 'compatShort': '۲۰۶ تیپ ۵، ۲۰۷، رانا، تارا، پارس TU5', 'carsList': ['پژو ۲۰۶ تیپ ۵', 'پژو ۲۰۷i', 'رانا و رانا پلاس', 'تارا دنده\u200cای و اتومات', 'پژو پارس TU5', 'تندر ۹۰']}, 'oil-3': {'compat': 'دنا پلاس توربو، شاهین توربو، سورن پلاس توربو، تارا، جک S5، چری تیگو ۷، هایما S7', 'compatShort': 'دنا توربو، شاهین، تارا، جک، هایما', 'carsList': ['دنا پلاس توربوشارژ', 'شاهین توربو', 'سورن پلاس توربو', 'تارا اتوماتیک', 'جک S5', 'هایما S7']}, 'oil-4': {'compat': 'کیا سراتو، هیوندای النترا و سوناتا، مزدا ۳، سوزوکی ویتارا، برلیانس H330، آریزو ۵', 'compatShort': 'سراتو، النترا، مزدا ۳، برلیانس', 'carsList': ['کیا سراتو', 'هیوندای النترا و سوناتا', 'مزدا ۳ نیو', 'برلیانس H330', 'چری آریزو ۵']}, 'oil-5': {'compat': 'پژو ۴۰۵، پژو پارس، سمند LX، دنا، پراید، تیبا (پکیج فابریک)', 'compatShort': 'پژو ۴۰۵، پارس، سمند، دنا', 'carsList': ['پژو ۴۰۵ و پارس', 'سمند و سورن', 'دنا معمولی', 'پراید و تیبا']}, 'spark-1': {'compat': 'پژو ۲۰۶ تیپ ۵، ۲۰۷، رانا، تارا، پارس TU5، دنا پلاس، سمند EF7، برلیانس', 'compatShort': '۲۰۶ تیپ ۵، ۲۰۷، رانا، تارا، پارس TU5', 'carsList': ['پژو ۲۰۶ تیپ ۵ و ۶', 'پژو ۲۰۷i', 'رانا و تارا', 'پژو پارس TU5', 'دنا و سمند EF7', 'برلیانس H330']}, 'spark-2': {'compat': 'پراید (کلیه مدل\u200cها)، تیبا ۱ و ۲، ساینا، کوییک، شاهین، ریو، دوو سیلو', 'compatShort': 'پراید، تیبا، ساینا، کوییک، شاهین', 'carsList': ['پراید صبا، ۱۳۱، ۱۱۱', 'تیبا ۱ و ۲', 'ساینا و کوییک', 'شاهین دنده\u200cای', 'کیا ریو']}, 'spark-3': {'compat': 'پژو ۴۰۵، پارس سال، سمند XU7، زانتیا ۱۸۰۰ و ۲۰۰۰، مزدا ۳۲۳', 'compatShort': 'پژو ۴۰۵، پارس سال، سمند XU7، زانتیا', 'carsList': ['پژو ۴۰۵ GLX و دوگانه', 'پژو پارس موتور XU7', 'سمند معمولی و LX', 'سیتروئن زانتیا']}, 'spark-4': {'compat': 'موتورهای TU5 (۲۰۶، ۲۰۷، رانا، پارس)، موتورهای XU7 (۴۰۵، پارس، سمند) و پراید', 'compatShort': '۲۰۶، ۲۰۷، پارس، ۴۰۵، سمند، پراید', 'carsList': ['پژو ۲۰۶ و ۲۰۷ (TU5)', 'پژو ۴۰۵ و پارس (XU7)', 'سمند LX', 'پراید انژکتوری']}, 'spark-5': {'compat': 'پژو ۲۰۶ تیپ ۵، پژو ۲۰۷، رانا، تارا، پارس TU5، دنا و سمند EF7', 'compatShort': '۲۰۶، ۲۰۷، رانا، تارا، پارس TU5', 'carsList': ['پژو ۲۰۶ و ۲۰۷', 'رانا و رانا پلاس', 'تارا دنده\u200cای و اتومات', 'پژو پارس TU5']}, 'head-1': {'compat': 'تمامی خودروها (پایه\u200cهای H4, H7, H1: ۲۰۶، ۲۰۷، پارس، دنا، سمند، تارا، پراید)', 'compatShort': 'کلیه خودروها (۲۰۶، ۲۰۷، پارس، دنا، پراید)', 'carsList': ['پژو ۲۰۶ و ۲۰۷', 'پژو پارس و دنا پلاس', 'سمند و سورن پلاس', 'تارا و شاهین', 'پراید، تیبا و کوییک']}, 'head-2': {'compat': 'پژو پارس، سمند سورن، دنا، دنا پلاس، تارا، پژو ۲۰۷، رنو ساندرو، برلیانس', 'compatShort': 'پارس، دنا پلاس، سورن، ۲۰۷، تارا', 'carsList': ['پژو پارس (سو بالا و پایین)', 'دنا و دنا پلاس', 'سورن پلاس', 'پژو ۲۰۷', 'تارا دنده\u200cای و اتومات']}, 'head-3': {'compat': 'پراید، تیبا، ساینا، کوییک، پژو ۴۰۵، تندر ۹۰ (پایه دوکنتاکت H4)', 'compatShort': 'پراید، تیبا، ساینا، کوییک، ۴۰۵، ال۹۰', 'carsList': ['پراید (تمامی مدل\u200cها)', 'تیبا، ساینا و کوییک', 'پژو ۴۰۵ GLX', 'تندر ۹۰ (ال۹۰)']}, 'head-4': {'compat': 'پژو ۲۰۶، ۲۰۷، رانا، دنا پلاس، جک S5، هایما S7، کیا سراتو، هیوندای اکسنت', 'compatShort': '۲۰۶، ۲۰۷، رانا، دنا، جک، هایما', 'carsList': ['پژو ۲۰۶ و ۲۰۷', 'رانا و رانا پلاس', 'دنا و دنا پلاس توربو', 'جک S5', 'هایما S7']}, 'head-5': {'compat': 'سپر جلوی پژو ۲۰۶، پژو ۲۰۷، رانا، تندر ۹۰، رنو ساندرو، سوزوکی ویتارا', 'compatShort': 'پژو ۲۰۶، ۲۰۷، رانا، ال۹۰، ساندرو', 'carsList': ['پژو ۲۰۶ و ۲۰۷', 'رانا و رانا پلاس', 'تندر ۹۰ (ال۹۰)', 'رنو ساندرو', 'سوزوکی ویتارا']}};


// ==================== REAL VEHICLE ADAPTATION ENGINE (موتور تطبیق هوشمند قطعات با خودرو) ====================
// تطبیق واقعی و علمی قطعات متناسب با خودروی انتخابی کاربر (سایز تایر، آمپراژ باتری، کیت کلاچ، لنت و روغن)

function getVehicleFamily(carKey){
  if(['pride', 'pride151', 'tiba', 'quick', 'saina'].includes(carKey)) return 'pride_family';
  if(['nissan'].includes(carKey)) return 'nissan_family';
  if(['samand', 'soren', 'dena', 'dena_turbo', 'peugeot405', 'pars'].includes(carKey)) return 'samand_family';
  if(['peugeot206_2', 'peugeot206_5', 'peugeot207', 'runna', 'tara'].includes(carKey)) return 'peugeot_family';
  if(['shahin'].includes(carKey)) return 'shahin_family';
  if(['l90', 'sandero', 'megane'].includes(carKey)) return 'renault_family';
  if(['mvm315', 'mvm_x22', 'mvm_x33', 'tiggo5', 'tiggo7', 'arrizo5', 'jac_j4', 'jac_s5', 'brilliance', 'kmc_t8', 'haima_s7', 'fidelity', 'dignity'].includes(carKey)) return 'chinese_suv_family';
  return 'general_family';
}

function getVehicleSpecificProducts(catKey, carKey){
  const family = getVehicleFamily(carKey);
  const car = carDataMap[carKey] || carDataMap['pride'];
  const carShort = car.name.split('/')[0].split('(')[0].trim();

  // ۱. لاستیک و تایر (تطبیق دقیق سایز فابریک)
  if(catKey === 'tire'){
    if(family === 'pride_family'){
      return [
        {
          id: 'tire-pride-1', cat: 'tire', brand: 'BAREZ TIRE • بارز', origin: 'ایران - تاریخ تولید روز',
          warranty: '۴۸ ماه گارانتی کتبی شرکتی بارز',
          title: `لاستیک ۱۶۵/۶۵R۱۳ بارز طرح رادیال فابریک ${carShort} (جفتی)`,
          price: 2850000, oldPrice: 3400000, discount: '۱۶٪', inst: '۷۱۲,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.8, compat: car.name,
          specs: { 'سایز تایر': '165/65R13 (سایز فابریک)', 'خودروی هدف': carShort, 'نوع ساختار': 'رادیال تیوبلس ۴ فصل', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-pride-2', cat: 'tire', brand: 'KAVIR TIRE • کویر تایر', origin: 'ایران - طرح KB22',
          warranty: '۴۸ ماه ضمانت رسمی تعویض',
          title: `لاستیک ۱۷۵/۶۰R۱۳ کویر تایر پهن اسپرت مخصوص ${carShort} (جفتی)`,
          price: 3100000, oldPrice: 3700000, discount: '۱۶٪', inst: '۷۷۵,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.9, compat: car.name,
          specs: { 'سایز تایر': '175/60R13 (پهن اسپرت)', 'خودروی هدف': carShort, 'نوع ساختار': 'رادیال با فرمان‌پذیری بالا', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-pride-3', cat: 'tire', brand: 'YAZD TIRE • یزد تایر', origin: 'ایران - تحت لیسانس وردشتاین',
          warranty: '۳۶ ماه ضمانت طلایی',
          title: `لاستیک ۱۶۵/۶۵R۱۳ یزد تایر طرح مارس نرم فابریک ${carShort} (جفتی)`,
          price: 2950000, oldPrice: 3500000, discount: '۱۵٪', inst: '۷۳۷,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.7, compat: car.name,
          specs: { 'سایز تایر': '165/65R13 استاندارد', 'خودروی هدف': carShort, 'نوع ساختار': 'تیوبلس ضد سایش', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-pride-4', cat: 'tire', brand: 'KUMHO KOREA • کومهو', origin: 'کره جنوبی - تولید اصل سئول',
          warranty: '۵ سال ضمانت اصالت و سلامت',
          title: `لاستیک ۱۷۵/۷۰R۱۳ کومهو کره سئول نرم و بی‌صدا مخصوص ${carShort} (جفتی)`,
          price: 4900000, oldPrice: 5800000, discount: '۱۵٪', inst: '۱,۲۲۵,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 5.0, compat: car.name,
          specs: { 'سایز تایر': '175/70R13 وارداتی نرم', 'خودروی هدف': carShort, 'نوع ساختار': 'سیلیکا با چسبندگی فوق‌العاده', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        }
      ];
    } else if(family === 'nissan_family'){
      return [
        {
          id: 'tire-nissan-1', cat: 'tire', brand: 'PIROOZI TIRE • پیروزی', origin: 'ایران - لایه سیمی باری',
          warranty: '۳۶ ماه گارانتی تناژ سنگین',
          title: 'لاستیک ۷.۰۰R۱۶ پیروزی تیوبلس باری سنگین نیسان آبی (جفتی)',
          price: 6400000, oldPrice: 7600000, discount: '۱۶٪', inst: '۱,۶۰۰,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.9, compat: car.name,
          specs: { 'سایز تایر': '7.00R16 (وانت بار سنگین)', 'خودروی هدف': 'زامیاد نیسان آبی و پادرا', 'شاخص بار': '14PR (تحمل بار تا ۳.۵ تن)', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-nissan-2', cat: 'tire', brand: 'DENA TIRE • دنا تایر', origin: 'ایران - طرح گل معدنی باری',
          warranty: '۴۸ ماه ضمانت شرکتی تناژ',
          title: 'لاستیک ۷.۵۰R۱۶ دنا تایر فوق باری سیم‌دار مخصوص بار سنگین نیسان (جفتی)',
          price: 6850000, oldPrice: 8100000, discount: '۱۵٪', inst: '۱,۷۱۲,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.8, compat: car.name,
          specs: { 'سایز تایر': '7.50R16 لایه سیمی', 'خودروی هدف': 'نیسان زامیاد و پادرا وانت', 'شاخص بار': '16PR ویژه تناژ بالا', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-nissan-3', cat: 'tire', brand: 'BAREZ TIRE • بارز', origin: 'ایران - لایه نخی با دوام',
          warranty: '۳۶ ماه ضمانت کتبی',
          title: 'لاستیک ۷.۰۰-۱۶ بارز لایه نخی شهری سبک نیسان وانت (جفتی)',
          price: 5900000, oldPrice: 7000000, discount: '۱۵٪', inst: '۱,۴۷۵,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.7, compat: car.name,
          specs: { 'سایز تایر': '7.00-16 لایه نخی', 'خودروی هدف': 'نیسان وانت شهری', 'شاخص بار': '12PR کارکرد شهری', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-nissan-4', cat: 'tire', brand: 'GT RADIAL • جی‌تی', origin: 'اندونزی - رادیال وارداتی باری',
          warranty: '۵ سال ضمانت رسمی',
          title: 'لاستیک ۲۳۵/۸۵R۱۶ جی‌تی رادیال تیوبلس آفرود و باری پادرا و نیسان (جفتی)',
          price: 8200000, oldPrice: 9600000, discount: '۱۵٪', inst: '۲,۰۵۰,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 5.0, compat: car.name,
          specs: { 'سایز تایر': '235/85R16 رادیال پهن', 'خودروی هدف': 'پادرا پلاس و نیسان وانت', 'شاخص بار': 'فوق‌العاده بادوام با عاج عمیق', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        }
      ];
    } else if(family === 'samand_family'){
      return [
        {
          id: 'tire-samand-1', cat: 'tire', brand: 'BAREZ TIRE • بارز', origin: 'ایران - طرح فابریک رادیال',
          warranty: '۴۸ ماه ضمانت تعویض',
          title: `لاستیک ۱۸۵/۶۵R۱۵ بارز فابریک کارخانه‌ای ${carShort} (جفتی)`,
          price: 3450000, oldPrice: 4100000, discount: '۱۶٪', inst: '۸۶۲,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.8, compat: car.name,
          specs: { 'سایز تایر': '185/65R15 فابریک', 'خودروی هدف': carShort, 'نوع ساختار': 'رادیال تیوبلس ۴ فصل', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-samand-2', cat: 'tire', brand: 'KAVIR TIRE • کویر تایر', origin: 'ایران - طرح اسپرت KB44',
          warranty: '۴۸ ماه ضمانت شرکتی',
          title: `لاستیک ۲۰۵/۶۰R۱۵ کویر تایر پهن اسپرت خوش‌رکاب ${carShort} (جفتی)`,
          price: 3950000, oldPrice: 4700000, discount: '۱۶٪', inst: '۹۸۷,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.9, compat: car.name,
          specs: { 'سایز تایر': '205/60R15 پهن اسپرت', 'خودروی هدف': carShort, 'نوع ساختار': 'فرمان‌پذیری دقیق در پیچ', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-samand-3', cat: 'tire', brand: 'YAZD TIRE • یزد تایر', origin: 'ایران - طرح اورانوس هلند',
          warranty: '۳۶ ماه ضمانت کتبی',
          title: `لاستیک ۱۸۵/۶۵R۱۵ یزد تایر طرح اورانوس نرم و ترمزگیری قوی ${carShort} (جفتی)`,
          price: 3600000, oldPrice: 4250000, discount: '۱۵٪', inst: '۹۰۰,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.7, compat: car.name,
          specs: { 'سایز تایر': '185/65R15 استاندارد', 'خودروی هدف': carShort, 'نوع ساختار': 'تیوبلس درجه یک', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-samand-4', cat: 'tire', brand: 'HANKOOK KOREA • هانکوک', origin: 'کره جنوبی - تولید اصل',
          warranty: '۵ سال ضمانت اصالت',
          title: `لاستیک ۲۰۵/۶۰R۱۵ هانکوک کره چسبندگی فوق‌العاده ${carShort} (جفتی)`,
          price: 6500000, oldPrice: 7700000, discount: '۱۵٪', inst: '۱,۶۲۵,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 5.0, compat: car.name,
          specs: { 'سایز تایر': '205/60R15 وارداتی کره', 'خودروی هدف': carShort, 'نوع ساختار': 'فوق‌العاده نرم و باوقار', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        }
      ];
    } else {
      // پژو ۲۰۶، ۲۰۷، رانا، تارا و سایرین (سایز ۱۴ یا ۱۶)
      const isR16 = ['tara', 'shahin'].includes(carKey);
      const size1 = isR16 ? '195/55R16' : '185/65R14';
      const size2 = isR16 ? '205/55R16' : '205/60R14';
      return [
        {
          id: 'tire-peug-1', cat: 'tire', brand: 'BAREZ TIRE • بارز', origin: 'ایران - رادیال پریمیوم',
          warranty: '۴۸ ماه ضمانت شرکتی',
          title: `لاستیک ${size1} بارز فابریک کارخانه‌ای ${carShort} (جفتی)`,
          price: isR16 ? 4250000 : 3200000, oldPrice: isR16 ? 5000000 : 3800000, discount: '۱۵٪', inst: isR16 ? '۱,۰۶۲,۵۰۰' : '۸۰۰,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.8, compat: car.name,
          specs: { 'سایز تایر': `${size1} فابریک`, 'خودروی هدف': carShort, 'نوع ساختار': 'رادیال تیوبلس ۴ فصل', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-peug-2', cat: 'tire', brand: 'KAVIR TIRE • کویر تایر', origin: 'ایران - طرح اسپرت',
          warranty: '۴۸ ماه ضمانت رسمی',
          title: `لاستیک ${size2} کویر تایر پهن اسپرت مخصوص ${carShort} (جفتی)`,
          price: isR16 ? 4700000 : 3850000, oldPrice: isR16 ? 5500000 : 4500000, discount: '۱۵٪', inst: isR16 ? '۱,۱۷۵,۰۰۰' : '۹۶۲,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.9, compat: car.name,
          specs: { 'سایز تایر': `${size2} پهن اسپرت`, 'خودروی هدف': carShort, 'نوع ساختار': 'پایداری بالا در پیچ‌های تند', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-peug-3', cat: 'tire', brand: 'YAZD TIRE • یزد تایر', origin: 'ایران - تکنولوژی وردشتاین',
          warranty: '۳۶ ماه ضمانت تعویض',
          title: `لاستیک ${size1} یزد تایر طرح مرکوری نرم فابریک ${carShort} (جفتی)`,
          price: isR16 ? 4400000 : 3350000, oldPrice: isR16 ? 5200000 : 3950000, discount: '۱۵٪', inst: isR16 ? '۱,۱۰۰,۰۰۰' : '۸۳۷,۵۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 4.7, compat: car.name,
          specs: { 'سایز تایر': `${size1} استاندارد`, 'خودروی هدف': carShort, 'نوع ساختار': 'سواری نرم و بی‌صدا', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        },
        {
          id: 'tire-peug-4', cat: 'tire', brand: 'KUMHO KOREA • کومهو', origin: 'کره جنوبی - تولید اصل',
          warranty: '۵ سال ضمانت اصالت',
          title: `لاستیک ${size2} کومهو کره سئول وارداتی درجه یک ${carShort} (جفتی)`,
          price: isR16 ? 7400000 : 5400000, oldPrice: isR16 ? 8700000 : 6400000, discount: '۱۵٪', inst: isR16 ? '۱,۸۵۰,۰۰۰' : '۱,۳۵۰,۰۰۰',
          img: 'images/tiles/لاستیک.webp', rating: 5.0, compat: car.name,
          specs: { 'سایز تایر': `${size2} وارداتی کره`, 'خودروی هدف': carShort, 'نوع ساختار': 'بالاترین گرید چسبندگی و ترمز', 'بسته‌بندی': 'یک جفت (۲ حلقه نو)' }
        }
      ];
    }
  }

  // ۲. باتری و برق خودرو (آمپراژ و ابعاد منطبق بر خودرو)
  if(catKey === 'battery'){
    if(family === 'pride_family'){
      return [
        {
          id: 'bat-p-1', cat: 'battery', brand: 'ORBITAL SILVER • سپاهان', origin: 'ایران - سپاهان باتری',
          warranty: '۲۰ ماه ضمانت تعویض طلایی',
          title: `باتری ۵۰ آمپر اوربیتال وان سیلور پرقدرت مخصوص ${carShort}`,
          price: 1850000, oldPrice: 2550000, discount: '۲۷٪', inst: '۴۶۲,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.8, compat: car.name,
          specs: { 'ظرفیت': '۵۰ آمپر ساعت (سایز فابریک پراید)', 'خودروی هدف': carShort, 'تکنولوژی': 'سیلد اتمی کلسیمی بدون نیاز به آب', 'ارسال و تعویض': 'زیر ۴۵ دقیقه با تست دینام' }
        },
        {
          id: 'bat-p-2', cat: 'battery', brand: 'SUZUKI JAPAN • سپاهان', origin: 'تحت لیسانس سوزوکی ژاپن',
          warranty: '۲۴ ماه ضمانت تعویض درجا',
          title: `باتری ۵۰ آمپر سوزوکی ژاپن سیلد اتمیک استارت سریع ${carShort}`,
          price: 2250000, oldPrice: 3100000, discount: '۲۷٪', inst: '۵۶۲,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.9, compat: car.name,
          specs: { 'ظرفیت': '۵۰ آمپر ساعت پریمیوم', 'خودروی هدف': carShort, 'جریان استارت (CCA)': '480 آمپر', 'گارانتی': '۲۴ ماه تعویض بی‌قیدوشرط' }
        },
        {
          id: 'bat-p-3', cat: 'battery', brand: 'SABA VARIAN • صبایاتری', origin: 'ایران - صبا باتری',
          warranty: '۱۸ ماه ضمانت شرکتی',
          title: `باتری ۵۵ آمپر صبا واریان اقتصادی با دوام بالا فابریک ${carShort}`,
          price: 1720000, oldPrice: 2300000, discount: '۲۵٪', inst: '۴۳۰,۰۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.7, compat: car.name,
          specs: { 'ظرفیت': '۵۵ آمپر ساعت پرقدرت', 'خودروی هدف': carShort, 'نوع': 'سیلد اسید شارژدار', 'خدمات': 'ارسال و نصب رایگان' }
        },
        {
          id: 'bat-p-4', cat: 'battery', brand: 'ATOMIC CALCIUM • سپاهان', origin: 'ایران - سپاهان باتری',
          warranty: '۲۱ ماه ضمانت طلایی',
          title: `باتری ۶۰ آمپر اتمیک تقویت سیستم صوتی فابریک ${carShort}`,
          price: 2100000, oldPrice: 2800000, discount: '۲۵٪', inst: '۵۲۵,۰۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.8, compat: car.name,
          specs: { 'ظرفیت': '۶۰ آمپر ساعت تقویتی', 'خودروی هدف': carShort, 'ویژگی': 'مناسب پراید با مانیتور و سیستم صوتی', 'گارانتی': '۲۱ ماه تعویض' }
        }
      ];
    } else if(family === 'nissan_family'){
      return [
        {
          id: 'bat-n-1', cat: 'battery', brand: 'SUZUKI JAPAN • سپاهان', origin: 'تحت لیسانس سوزوکی ژاپن',
          warranty: '۲۴ ماه ضمانت تعویض طلایی',
          title: 'باتری ۷۰ آمپر پایه بلند سوزوکی ژاپن فابریک نیسان آبی و پادرا',
          price: 2850000, oldPrice: 3850000, discount: '۲۶٪', inst: '۷۱۲,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 5.0, compat: car.name,
          specs: { 'ظرفیت': '۷۰ آمپر ساعت (پایه بلند قطب معکوس)', 'خودروی هدف': 'نیسان آبی Z24 و پادرا وانت', 'جریان استارت (CCA)': '620 آمپر ویژه استارت سنگین', 'خدمات': 'ارسال و نصب فوری' }
        },
        {
          id: 'bat-n-2', cat: 'battery', brand: 'ATOMIC CALCIUM • سپاهان', origin: 'ایران - سپاهان باتری',
          warranty: '۲۱ ماه ضمانت تعویض',
          title: 'باتری ۷۴ آمپر اتمیک کلسیم پرقدرت نیسان وانت دوگانه‌سوز',
          price: 2650000, oldPrice: 3500000, discount: '۲۴٪', inst: '۶۶۲,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.8, compat: car.name,
          specs: { 'ظرفیت': '۷۴ آمپر ساعت تناژ بالا', 'خودروی هدف': 'نیسان زامیاد دیزل و گازسوز', 'نوع': 'کلسیمی MF بدون نیاز به آب مقطر', 'گارانتی': '۲۱ ماه تعویض سراسری' }
        },
        {
          id: 'bat-n-3', cat: 'battery', brand: 'SABA VARIAN • صبایاتری', origin: 'ایران - صبا باتری',
          warranty: '۱۸ ماه ضمانت رسمی',
          title: 'باتری ۷۰ آمپر صبا واریان پایه بلند اقتصادی نیسان زامیاد',
          price: 2100000, oldPrice: 2750000, discount: '۲۴٪', inst: '۵۲۵,۰۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.7, compat: car.name,
          specs: { 'ظرفیت': '۷۰ آمپر ساعت', 'خودروی هدف': 'نیسان و پادرا', 'نوع': 'سیلد اسید شارژدار با چگالی بالا', 'خدمات': 'ارسال و نصب زیر ۴۵ دقیقه' }
        },
        {
          id: 'bat-n-4', cat: 'battery', brand: 'VARTA GERMANY • وارتا', origin: 'آلمان - اصلی وارداتی',
          warranty: '۲۴ ماه ضمانت اصالت',
          title: 'باتری ۹۰ آمپر وارتا آلمان سیلد ضد لرزش مخصوص نیسان دیزل و سنگین',
          price: 3900000, oldPrice: 4800000, discount: '۱۹٪', inst: '۹۷۵,۰۰۰',
          img: 'images/tiles/باتری.webp', rating: 5.0, compat: car.name,
          specs: { 'ظرفیت': '۹۰ آمپر ساعت سنگین', 'خودروی هدف': 'نیسان دیزل و باری تناژ ۳ تن', 'تکنولوژی': 'ورقه‌های سربی تقویت‌شده سیلد', 'گارانتی': '۲ سال اصالت و سلامت' }
        }
      ];
    } else {
      // سمند، دنا، پژو ۲۰۶، ۲۰۷، پارس و غیره (۶۰ تا ۷۴ آمپر فابریک)
      const amp = (family === 'samand_family' ? '۶۶ آمپر' : '۶۰ آمپر');
      const ampHigh = (family === 'samand_family' ? '۷۴ آمپر' : '۶۲ آمپر');
      return [
        {
          id: 'bat-s-1', cat: 'battery', brand: 'SUZUKI JAPAN • سپاهان', origin: 'تحت لیسانس سوزوکی ژاپن',
          warranty: '۲۴ ماه ضمانت تعویض طلایی',
          title: `باتری ${amp} سوزوکی ژاپن اتمیک سیلد فابریک ${carShort}`,
          price: 2450000, oldPrice: 3450000, discount: '۲۹٪', inst: '۶۱۲,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.9, compat: car.name,
          specs: { 'ظرفیت': `${amp} ساعت استاندارد کارخانه`, 'خودروی هدف': carShort, 'جریان استارت (CCA)': '540 آمپر', 'گارانتی': '۲۴ ماه تعویض بی‌قیدوشرط' }
        },
        {
          id: 'bat-s-2', cat: 'battery', brand: 'ORBITAL SILVER • سپاهان', origin: 'ایران - سپاهان باتری',
          warranty: '۲۰ ماه ضمانت تعویض',
          title: `باتری ${amp} اوربیتال وان سیلور پرقدرت مخصوص ${carShort}`,
          price: 2150000, oldPrice: 2850000, discount: '۲۵٪', inst: '۵۳۷,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.8, compat: car.name,
          specs: { 'ظرفیت': `${amp} ساعت`, 'خودروی هدف': carShort, 'نوع': 'سیلد کلسیمی بدون نیاز به آب مقطر', 'خدمات': 'ارسال و نصب فوری' }
        },
        {
          id: 'bat-s-3', cat: 'battery', brand: 'ATOMIC CALCIUM • سپاهان', origin: 'ایران - سپاهان باتری',
          warranty: '۲۱ ماه ضمانت طلایی',
          title: `باتری ${ampHigh} اتمیک کلسیم پلاس شارژدار مخصوص ${carShort}`,
          price: 2350000, oldPrice: 3100000, discount: '۲۴٪', inst: '۵۸۷,۵۰۰',
          img: 'images/tiles/باتری.webp', rating: 4.8, compat: car.name,
          specs: { 'ظرفیت': `${ampHigh} ساعت تقویتی`, 'خودروی هدف': carShort, 'ویژگی': 'مناسب کولر و استارت زمستانی', 'گارانتی': '۲۱ ماه تعویض درجا' }
        },
        {
          id: 'bat-s-4', cat: 'battery', brand: 'VARTA GERMANY • وارتا', origin: 'آلمان - اصل اروپایی',
          warranty: '۲۴ ماه ضمانت تعویض',
          title: `باتری ${ampHigh} وارتا آلمان سیلد فابریک مولتی‌پلکس ${carShort}`,
          price: 3400000, oldPrice: 4200000, discount: '۱۹٪', inst: '۸۵۰,۰۰۰',
          img: 'images/tiles/باتری.webp', rating: 5.0, compat: car.name,
          specs: { 'ظرفیت': `${ampHigh} ساعت آلمانی`, 'خودروی هدف': carShort, 'تکنولوژی': 'کامپکت پریمیوم ضد سولفاته', 'گارانتی': '۲ سال شرکتی' }
        }
      ];
    }
  }

  // ۳. لنت و ترمز تخصصی (تطبیق دیسک، کالیپر و فرمولاسیون فابریک خودرو)
  if(catKey === 'lent'){
    if(family === 'pride_family'){
      return [
        {
          id: 'lent-p-1', cat: 'lent', brand: 'HI-Q KOREA • های‌کیو', origin: 'کره جنوبی - اصلی گلد',
          warranty: '۲۴ ماه ضمانت بدون سوت و بدون داغی',
          title: `لنت ترمز جلو های‌کیو گلد کره جنوبی سنسوردار فابریک ${carShort}`,
          price: 580000, oldPrice: 750000, discount: '۲۳٪', inst: '۱۴۵,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.9, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'فرمولاسیون': 'نیمه‌متالیک ارتقایافته بدون لرزش فرمان', 'طول عمر': '۴۰,۰۰۰ کیلومتر' }
        },
        {
          id: 'lent-p-2', cat: 'lent', brand: 'ELIG CERAMIC • الیگ ژاپن', origin: 'تحت لیسانس الیگ ژاپن',
          warranty: '۲۴ ماه ضمانت تعویض',
          title: `لنت ترمز سرامیکی الیگ ژاپن ترمزگیری نرم و بی‌صدا فابریک ${carShort}`,
          price: 920000, oldPrice: 1200000, discount: '۲۳٪', inst: '۲۳۰,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 5.0, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'فرمولاسیون': 'نانو سرامیک بدون آزبست و بدون گرد لنت', 'مقاومت حرارتی': 'تا ۶۵۰ درجه' }
        },
        {
          id: 'lent-p-3', cat: 'lent', brand: 'EMCO OE • اتحاد موتور', origin: 'ایران - خط تولید سایپا',
          warranty: '۱۲ ماه گارانتی شرکتی',
          title: `لنت ترمز جلو امکو شرکتی خط تولید فابریک ${carShort}`,
          price: 420000, oldPrice: 540000, discount: '۲۲٪', inst: '۱۰۵,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.6, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'استاندارد': 'ملی ایران و گواهی سایپایدک', 'نوع': 'اصلی شرکتی' }
        },
        {
          id: 'lent-p-4', cat: 'lent', brand: 'PARS LENT • پارس لنت', origin: 'ایران - صادراتی',
          warranty: '۱۲ ماه ضمانت',
          title: `لنت ترمز عقب کاسه‌ای پارس لنت با فنربندی فابریک ${carShort}`,
          price: 380000, oldPrice: 480000, discount: '۲۱٪', inst: '۹۵,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.7, compat: car.name,
          specs: { 'محور نصب': 'کاسه چرخ‌های عقب', 'خودروی هدف': carShort, 'محتویات': 'دست ۴ عددی لنت کفشکی عقب', 'گیرایی': 'ترمز دستی قوی' }
        }
      ];
    } else if(family === 'nissan_family'){
      return [
        {
          id: 'lent-n-1', cat: 'lent', brand: 'HI-Q KOREA • گلد کره', origin: 'کره جنوبی - دیسکی دوبل',
          warranty: '۲۴ ماه ضمانت تناژ سنگین',
          title: 'لنت ترمز دیسکی دوبل جلو نیسان وانت پادرا و زامیاد گلد کره',
          price: 850000, oldPrice: 1100000, discount: '۲۳٪', inst: '۲۱۲,۵۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.9, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو (کالیپر دوبل)', 'خودروی هدف': 'نیسان آبی و پادرا', 'مقاومت': 'تحمل بار سنگین در شیب و ترافیک', 'ویژگی': 'ضد داغی' }
        },
        {
          id: 'lent-n-2', cat: 'lent', brand: 'PARS LENT • پارس لنت', origin: 'ایران - کفشکی فوق سنگین',
          warranty: '۱۸ ماه ضمانت شرکتی',
          title: 'لنت ترمز کاسه‌ای عقب دوبل نیسان آبی زامیاد پارس لنت سنگین',
          price: 790000, oldPrice: 990000, discount: '۲۰٪', inst: '۱۹۷,۵۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.8, compat: car.name,
          specs: { 'محور نصب': 'کاسه چرخ‌های عقب تناژ', 'خودروی هدف': 'نیسان وانت Z24', 'محتویات': 'کفشک‌های فولادی تقویت‌شده', 'تست': 'تست تناژ ۳.۵ تن' }
        },
        {
          id: 'lent-n-3', cat: 'lent', brand: 'ELIG CERAMIC • الیگ ژاپن', origin: 'تحت لیسانس الیگ',
          warranty: '۲۴ ماه ضمانت تعویض',
          title: 'لنت ترمز سرامیکی جلو نیسان وانت بدون بو و داغی دیسک چرخ',
          price: 1100000, oldPrice: 1400000, discount: '۲۱٪', inst: '۲۷۵,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 5.0, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': 'وانت نیسان و پادرا', 'ترکیب': 'سرامیک کربن با گیرایی میخکوب', 'دوام': 'طولانی‌مدت' }
        }
      ];
    } else {
      // سمند، دنا، پژو ۲۰۶، ۲۰۷، پارس
      return [
        {
          id: 'lent-s-1', cat: 'lent', brand: 'TEXTAR GERMANY • تکستار', origin: 'آلمان / فرانسه - اصلی ایساکو',
          warranty: '۲۴ ماه ضمانت بدون سوت و بدون داغی',
          title: `لنت ترمز جلو تکستار اصل آلمان فابریک کارخانه‌ای ${carShort}`,
          price: 1150000, oldPrice: 1490000, discount: '۲۳٪', inst: '۲۸۷,۵۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.9, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'استاندارد': 'ECE R90 اتحادیه اروپا', 'دوام': '۵۰,۰۰۰ کیلومتر رانندگی شهری' }
        },
        {
          id: 'lent-s-2', cat: 'lent', brand: 'ELIG CERAMIC • الیگ ژاپن', origin: 'تحت لیسانس الیگ ژاپن',
          warranty: '۲۴ ماه ضمانت تعویض طلایی',
          title: `لنت ترمز سرامیکی الیگ ژاپن ترمزگیری بدون سوت مخصوص ${carShort}`,
          price: 1280000, oldPrice: 1650000, discount: '۲۲٪', inst: '۳۲۰,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 5.0, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'فرمولاسیون': 'نانو سرامیک با پایداری ۶۵۰ درجه', 'گیرایی': 'نرم و فوری بدون داغی دیسک' }
        },
        {
          id: 'lent-s-3', cat: 'lent', brand: 'BREMBO ITALY • برمبو', origin: 'ایتالیا - اسپرت سوراخدار',
          warranty: '۳ سال ضمانت کیفیت دیسک',
          title: `دیسک چرخ سوراخ‌دار خنک‌شونده مسابقه‌ای برمبو مخصوص ${carShort}`,
          price: 1650000, oldPrice: 2100000, discount: '۲۱٪', inst: '۴۱۲,۵۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.9, compat: car.name,
          specs: { 'محور نصب': 'دیسک چرخ‌های جلو', 'خودروی هدف': carShort, 'ویژگی': 'سوراخ‌های تهویه گردابی ضد تاب برداشتن', 'متریال': 'چدن کربنی آلیاژی' }
        },
        {
          id: 'lent-s-4', cat: 'lent', brand: 'EMCO OE • اتحاد موتور', origin: 'ایران - خط تولید ایران‌خودرو',
          warranty: '۱۲ ماه گارانتی شرکتی',
          title: `لنت ترمز امکو شرکتی گارانتی ۱۲ ماهه فابریک ${carShort}`,
          price: 620000, oldPrice: 790000, discount: '۲۱٪', inst: '۱۵۵,۰۰۰',
          img: 'images/tiles/لنت.webp', rating: 4.7, compat: car.name,
          specs: { 'محور نصب': 'چرخ‌های جلو', 'خودروی هدف': carShort, 'گواهی': 'مورد تایید ایساکو و خط تولید', 'نوع': 'شرکتی تاییدشده' }
        }
      ];
    }
  }

  // ۴. دیسک و صفحه کلاچ (کیت متناسب با گیربکس و موتور خودرو)
  if(catKey === 'clutch'){
    if(family === 'pride_family'){
      return [
        {
          id: 'clutch-p-1', cat: 'clutch', brand: 'DAIKIN EXEDY • دایکن ژاپن', origin: 'ژاپن - اصل وارداتی پدال پنبه‌ای',
          warranty: '۲۴ ماه ضمانت بدون لرزش در نیم‌کلاچ',
          title: `دیسک و صفحه دایکن ژاپن پدال پنبه‌ای بدون لرزش فابریک ${carShort}`,
          price: 2650000, oldPrice: 3400000, discount: '۲۲٪', inst: '۶۶۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 5.0, compat: car.name,
          specs: { 'سایز کیت': '۲۰۰ میلی‌متر فابریک پراید', 'خودروی هدف': carShort, 'فناوری فنربندی': '۴ فنره دوبل پری‌دمپر نرم', 'احساس پدال': 'فوق‌العاده نرم و بدون خستگی پا' }
        },
        {
          id: 'clutch-p-2', cat: 'clutch', brand: 'EZAM PLUS • عظام پلاس', origin: 'ایران - استاندارد صادراتی',
          warranty: '۱۲ ماه گارانتی شرکتی عظام',
          title: `کیت کلاچ عظام پلاس پری‌دمپر صادراتی فابریک ${carShort}`,
          price: 1950000, oldPrice: 2500000, discount: '۲۲٪', inst: '۴۸۷,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.7, compat: car.name,
          specs: { 'سایز کیت': '۲۰۰ میلی‌متر استاندارد', 'خودروی هدف': carShort, 'محتویات': 'دیسک، صفحه کلاچ و بلبرینگ دوبل', 'شتاب‌گیری': 'کلاچ‌گیری سریع در ترافیک' }
        },
        {
          id: 'clutch-p-3', cat: 'clutch', brand: 'VALEO KOREA • والئو آبی', origin: 'کره جنوبی - جعبه آبی شرکتی',
          warranty: '۱۸ ماه ضمانت اصالت فیزیکی',
          title: `کیت کلاچ والئو آبی اصل کره ۲۰۰ میل فابریک خط تولید ${carShort}`,
          price: 2850000, oldPrice: 3600000, discount: '۲۱٪', inst: '۷۱۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.9, compat: car.name,
          specs: { 'سایز کیت': '۲۰۰ میل کره اصلی', 'خودروی هدف': carShort, 'جنس لنت': 'الیاف بافته شده کولار ضد بوی سوختگی', 'طول عمر': 'حداقل ۷۰,۰۰۰ کیلومتر' }
        },
        {
          id: 'clutch-p-4', cat: 'clutch', brand: 'SECO KOREA • سکو کره', origin: 'کره جنوبی - اصلی با هولوگرام',
          warranty: '۱۸ ماه ضمانت تعویض',
          title: `کیت کلاچ سکو کره جنوبی شتاب‌گیری روان مخصوص ${carShort}`,
          price: 2450000, oldPrice: 3100000, discount: '۲۱٪', inst: '۶۱۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.8, compat: car.name,
          specs: { 'سایز کیت': 'استاندارد X100/X200', 'خودروی هدف': carShort, 'ویژگی': 'پدال کلاچ بسیار نرم در ترافیک شهری', 'گارانتی': 'ضمانت اصالت فیزیکی' }
        }
      ];
    } else if(family === 'nissan_family'){
      return [
        {
          id: 'clutch-n-1', cat: 'clutch', brand: 'DAIKIN EXEDY • دایکن ژاپن', origin: 'ژاپن - کیت ۲۴۰ میل فوق سنگین',
          warranty: '۲۴ ماه ضمانت تناژ ۳.۵ تن',
          title: 'کیت کلاچ ۲۴۰ میلی‌متری دایکن ژاپن فوق باری نیسان آبی Z24',
          price: 4200000, oldPrice: 5300000, discount: '۲۱٪', inst: '۱,۰۵۰,۰۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 5.0, compat: car.name,
          specs: { 'قطر صفحه': '۲۴۰ میلی‌متر پهن تناژ', 'خودروی هدف': 'نیسان آبی و پادرا وانت', 'فنرها': '۶ فنره دوبل فوق تقویت بار سنگین', 'ویژگی': 'تحمل ۱۰۰٪ گشتاور در سربالایی' }
        },
        {
          id: 'clutch-n-2', cat: 'clutch', brand: 'SECO KOREA • سکو کره', origin: 'کره جنوبی - اصلی با بلبرینگ',
          warranty: '۱۸ ماه ضمانت شرکتی',
          title: 'کیت کلاچ سکو کره جنوبی نیسان وانت Z24 بنزینی و دوگانه',
          price: 3800000, oldPrice: 4800000, discount: '۲۱٪', inst: '۹۵۰,۰۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.9, compat: car.name,
          specs: { 'قطر صفحه': '۲۴۰ میلی‌متر استاندارد Z24', 'خودروی هدف': 'نیسان وانت زامیاد', 'بلبرینگ': 'همراه بلبرینگ کلاچ ژاپنی ناچی', 'ضمانت': 'بدون بکسوات' }
        },
        {
          id: 'clutch-n-3', cat: 'clutch', brand: 'VALEO FRANCE • والئو', origin: 'فرانسه - تقویت‌شده سنگین',
          warranty: '۱۸ ماه ضمانت اصالت',
          title: 'دیسک و صفحه تقویت‌شده والئو پادرا پلاس و نیسان ۲۴۰۰',
          price: 3650000, oldPrice: 4600000, discount: '۲۱٪', inst: '۹۱۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.8, compat: car.name,
          specs: { 'قطر صفحه': 'فابریک موتور ۲۴۰۰', 'خودروی هدف': 'وانت پادرا و نیسان', 'ویژگی': 'پدال متعادل با دوام بالا در حمل بار', 'تست': 'تست بارنامه رسمی' }
        }
      ];
    } else {
      // سمند، دنا، پژو ۲۰۶، ۲۰۷، تارا، پارس
      return [
        {
          id: 'clutch-s-1', cat: 'clutch', brand: 'VALEO FRANCE • والئو سبز', origin: 'فرانسه - اصلی جعبه سبز پری‌دمپر',
          warranty: '۲۴ ماه ضمانت تعویض و نرمی پدال',
          title: `کیت کلاچ والئو سبز اصل فرانسه پری‌دمپر نرم مخصوص ${carShort}`,
          price: 3250000, oldPrice: 4200000, discount: '۲۳٪', inst: '۸۱۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 5.0, compat: car.name,
          specs: { 'نوع کیت': 'پری‌دمپر ۴ فنره دوبل فرانسه', 'خودروی هدف': carShort, 'حذف لرزش': 'حذف ۱۰۰٪ لرزش در شروع حرکت و نیم‌کلاچ', 'بلبرینگ': 'بلبرینگ اصلی SKF فرانسه' }
        },
        {
          id: 'clutch-s-2', cat: 'clutch', brand: 'DAIKIN EXEDY • دایکن ژاپن', origin: 'ژاپن - وارداتی با پدال پنبه‌ای',
          warranty: '۲۴ ماه ضمانت اصالت و شتاب',
          title: `دیسک و صفحه دایکن ژاپن پدال پنبه‌ای شتاب‌گیری عالی فابریک ${carShort}`,
          price: 3600000, oldPrice: 4600000, discount: '۲۲٪', inst: '۹۰۰,۰۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.9, compat: car.name,
          specs: { 'نوع کیت': 'دایکن ژاپن پدال نرم', 'خودروی هدف': carShort, 'انتقال قدرت': 'انتقال ۱۰۰٪ گشتاور موتور به چرخ‌ها', 'دوام': '۸۰,۰۰۰ کیلومتر کارکرد تضمینی' }
        },
        {
          id: 'clutch-s-3', cat: 'clutch', brand: 'LUK GERMANY • لوک آلمان', origin: 'آلمان - کیت تقویت‌شده بلبرینگ دوبل',
          warranty: '۲۴ ماه ضمانت رسمی شرکتی',
          title: `دیسک و صفحه لوک آلمان بلبرینگ دوبل تقویتی فابریک ${carShort}`,
          price: 3900000, oldPrice: 4900000, discount: '۲۰٪', inst: '۹۷۵,۰۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 5.0, compat: car.name,
          specs: { 'نوع کیت': 'لوک آلمان سری تقویتی', 'خودروی هدف': carShort, 'ویژگی': 'مناسب موتورهای پرقدرت و شتاب‌گیری سریع', 'بلبرینگ': 'بلبرینگ هیدرولیک/دوبل لوک' }
        },
        {
          id: 'clutch-s-4', cat: 'clutch', brand: 'SECO KOREA • سکو کره', origin: 'کره جنوبی - اصلی با هولوگرام',
          warranty: '۱۸ ماه ضمانت تعویض',
          title: `کیت کلاچ سکو کره جنوبی شتاب‌گیری روان مخصوص ${carShort}`,
          price: 2850000, oldPrice: 3600000, discount: '۲۱٪', inst: '۷۱۲,۵۰۰',
          img: 'images/tiles/کلاچ.webp', rating: 4.8, compat: car.name,
          specs: { 'نوع کیت': 'سکو کره اصلی شرکتی', 'خودروی هدف': carShort, 'کیفیت': 'مقاوم در برابر حرارت و ترافیک سنگین', 'پدال': 'کلاچ‌گیری نرم و بی‌صدا' }
        }
      ];
    }
  }

  // ۵. روغن موتور و سرویس‌های دوره‌ای (گرانروی و ادتیوهای متناسب با موتور خودرو)
  if(catKey === 'oil'){
    if(family === 'pride_family'){
      return [
        {
          id: 'oil-p-1', cat: 'oil', brand: 'BEHRAN PISHTAZ • بهران', origin: 'ایران - پالایشگاه بهران',
          warranty: 'ضمانت ۱۰۰٪ اصالت فیزیکی روغن',
          title: `روغن موتور بهران پیشتاز 20W-50 چهار لیتری فابریک موتور ${carShort}`,
          price: 480000, oldPrice: 620000, discount: '۲۲٪', inst: '۱۲۰,۰۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.8, compat: car.name,
          specs: { 'گرانروی (SAE)': '20W-50 نیمه سنتتیک', 'خودروی هدف': carShort, 'سطح کیفی API': 'API SG/SJ مخصوص موتور پراید', 'کارکرد': '۶,۰۰۰ کیلومتر' }
        },
        {
          id: 'oil-p-2', cat: 'oil', brand: 'CASTROL GTX • کاسترول', origin: 'قشم - کاسترول تحت لیسانس انگلستان',
          warranty: 'ضمانت هولوگرام اصالت',
          title: `روغن موتور کاسترول جی‌تی‌ایکس 20W-50 ضد رسوب و لجن فابریک ${carShort}`,
          price: 620000, oldPrice: 790000, discount: '۲۱٪', inst: '۱۵۵,۰۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.9, compat: car.name,
          specs: { 'گرانروی (SAE)': '20W-50 روغن پاک‌کننده', 'خودروی هدف': carShort, 'سطح کیفی API': 'API SL', 'ویژگی': 'فرمول دوگانه ضد لجن در موتورهای کارکرده' }
        },
        {
          id: 'oil-p-3', cat: 'oil', brand: 'IRANOL SABA • ایرانول', origin: 'ایران - پالایشگاه ایرانول',
          warranty: 'اصالت قوطی فلزی پلمپ',
          title: `روغن موتور ایرانول صبا 20W-50 چهار لیتری فلزی مخصوص ${carShort}`,
          price: 410000, oldPrice: 520000, discount: '۲۱٪', inst: '۱۰۲,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.7, compat: car.name,
          specs: { 'گرانروی (SAE)': '20W-50 فلزی', 'خودروی هدف': carShort, 'سطح کیفی': 'استاندارد ملی خودروی پراید', 'حجم': '۴ لیتر پلمپ' }
        },
        {
          id: 'oil-p-4', cat: 'oil', brand: 'SERKAN PACKAGE • سرکان', origin: 'ایران - پکیج سرویس کامل',
          warranty: 'ضمانت کامل سرویس دوره‌ای',
          title: `پکیج تعویض روغن بهران پیشتاز + فیلتر روغن و فیلتر هوا سرکان فابریک ${carShort}`,
          price: 590000, oldPrice: 750000, discount: '۲۱٪', inst: '۱۴۷,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 5.0, compat: car.name,
          specs: { 'محتویات پکیج': '۴ لیتر روغن بهران + فیلتر سرکان', 'خودروی هدف': carShort, 'خدمات': 'ارسال با تکنسین و ساکشن روغن در محل' }
        }
      ];
    } else if(family === 'nissan_family'){
      return [
        {
          id: 'oil-n-1', cat: 'oil', brand: 'BEHRAN PISHTAZ • بهران', origin: 'ایران - پالایشگاه بهران',
          warranty: 'ضمانت اصالت روغن سنگین',
          title: 'روغن موتور بهران پیشتاز 20W-50 چهار لیتری ویژه موتور ۲۴۰۰ نیسان آبی',
          price: 490000, oldPrice: 630000, discount: '۲۲٪', inst: '۱۲۲,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.8, compat: car.name,
          specs: { 'گرانروی (SAE)': '20W-50 مخصوص بار سنگین', 'خودروی هدف': 'نیسان زامیاد Z24 و پادرا', 'حفاظت': 'مقاوم در برابر داغ کردن موتور در تناژ بالا' }
        },
        {
          id: 'oil-n-2', cat: 'oil', brand: 'IRANOL 16000 • ایرانول', origin: 'ایران - قوطی فلزی اصلی',
          warranty: 'ضمانت اصالت فیزیکی',
          title: 'روغن موتور ایرانول ۱۶۰۰۰ بیست-پنجاه چهار لیتری قوطی فلزی نیسان وانت',
          price: 450000, oldPrice: 580000, discount: '۲۲٪', inst: '۱۱۲,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.7, compat: car.name,
          specs: { 'گرانروی (SAE)': '20W-50 فلزی بادوام', 'خودروی هدف': 'نیسان بنزینی و دوگانه', 'کیلومتر کارکرد': '۷,۰۰۰ کیلومتر رانندگی جاده‌ای' }
        },
        {
          id: 'oil-n-3', cat: 'oil', brand: 'SERKAN PACKAGE • سرکان', origin: 'ایران - پکیج ویژه باری',
          warranty: 'ضمانت تعویض و اصالت فیلتر',
          title: 'پکیج روغن بهران + فیلتر روغن نیسان سرکان و فیلتر هوای دوبل نیسان آبی',
          price: 640000, oldPrice: 810000, discount: '۲۱٪', inst: '۱۶۰,۰۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.9, compat: car.name,
          specs: { 'محتویات': 'روغن بهران پیشتاز + فیلتر سرکان نیسان', 'خودروی هدف': 'نیسان وانت و پادرا', 'خدمات': 'تعویض سریع در محل کار یا انبار' }
        }
      ];
    } else {
      // سمند، دنا، پژو ۲۰۶، ۲۰۷، تارا، پارس (روغن‌های سنتتیک 10W-40 و 5W-30)
      return [
        {
          id: 'oil-s-1', cat: 'oil', brand: 'TOTAL QUARTZ • توتال ۷۰۰۰', origin: 'فرانسه / امارات - اصلی خط تولید',
          warranty: 'ضمانت ۱۰۰٪ اصالت و بارکد رهگیری',
          title: `روغن موتور توتال کوارتز ۷۰۰۰ اصلی فرانسه (10W-40) مخصوص ${carShort}`,
          price: 1150000, oldPrice: 1450000, discount: '۲۱٪', inst: '۲۸۷,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 5.0, compat: car.name,
          specs: { 'گرانروی (SAE)': '10W-40 نیمه سنتتیک', 'خودروی هدف': carShort, 'سطح کیفی API': 'API SN/CF بالاترین گرید', 'کارکرد': '۱۰,۰۰۰ کیلومتر' }
        },
        {
          id: 'oil-s-2', cat: 'oil', brand: 'CASTROL MAGNATEC • کاسترول', origin: 'انگلستان - قوطی فلزی مگناتک',
          warranty: 'ضمانت اصالت هولوگرام‌دار',
          title: `روغن موتور کاسترول مگناتک ۴ لیتری (10W-40) محافظت استارت سرد ${carShort}`,
          price: 890000, oldPrice: 1150000, discount: '۲۲٪', inst: '۲۲۲,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.9, compat: car.name,
          specs: { 'گرانروی (SAE)': '10W-40 مولکول‌های مغناطیسی', 'خودروی هدف': carShort, 'سطح کیفی': 'API SN محافظ سوپاپ‌ها', 'حجم': '۴ لیتر فلزی پلمپ' }
        },
        {
          id: 'oil-s-3', cat: 'oil', brand: 'BEHRAN RANA • بهران سوپر رانا', origin: 'ایران - تمام سنتتیک پیشرفته',
          warranty: 'ضمانت اصالت پالایشگاهی',
          title: `روغن موتور بهران سوپر رانا تمام سنتتیک (5W-30) توربو و شتاب فابریک ${carShort}`,
          price: 740000, oldPrice: 920000, discount: '۱۹٪', inst: '۱۸۵,۰۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 4.9, compat: car.name,
          specs: { 'گرانروی (SAE)': '5W-30 تمام سنتتیک ویژه', 'خودروی هدف': carShort, 'سطح کیفی': 'API SN Plus مخصوص موتورهای توربو و ۱۶ سوپاپ' }
        },
        {
          id: 'oil-s-4', cat: 'oil', brand: 'ADDINOL GERMANY • ادینول', origin: 'آلمان - وارداتی اصل اروپا',
          warranty: 'ضمانت نامه اصالت کالا',
          title: `روغن موتور ادینول آلمان اکستریم لایت ۵ لیتری مخصوص موتورهای مدرن ${carShort}`,
          price: 1450000, oldPrice: 1850000, discount: '۲۱٪', inst: '۳۶۲,۵۰۰',
          img: 'images/tiles/روغن_موتور.webp?v=iranian_behran_oil_3d_v2.0', rating: 5.0, compat: car.name,
          specs: { 'گرانروی (SAE)': '5W-40 فول سنتتیک آلمان', 'خودروی هدف': carShort, 'استاندارد': 'تاییدیه پورشه، بنز و پژو-سیتروئن', 'حجم': '۵ لیتر پلمپ آلمان' }
        }
      ];
    }
  }

  // سایر دسته‌ها از categoryDataMap یا پیش‌فرض
  const defCat = categoryDataMap[catKey] || categoryDataMap['battery'];
  return defCat.products || [];
}

let currentSpecProduct = null;
let currentSpecQty = 1;


// تابع هوشمند تولید تضمین‌ها و خدمات متناسب با دسته‌بندی کالا (حذف خطای تست دینام برای روغن و قطعات یدکی)
function getPerksForProduct(prod){
  const t = (prod.title || '').toLowerCase();
  const cat = prod.cat || '';
  const isBattery = (cat === 'battery' || t.includes('باتری') || t.includes('تعویض در محل'));
  const isOil = (cat === 'oil' || t.includes('روغن') || t.includes('فیلتر'));
  const isClutchOrBrakes = (cat === 'clutch' || cat === 'lent' || cat === 'tire' || t.includes('کلاچ') || t.includes('لنت') || t.includes('دیسک') || t.includes('لاستیک') || t.includes('تایر'));

  if(isBattery){
    return [
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        title: 'ارسال و نصب فوری',
        desc: 'زیر ۴۵ دقیقه در محل با تکنسین امداد'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        title: 'تست رایگان دینام',
        desc: 'بررسی ولتاژ استارت و مدار شارژ'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
        title: 'کسر هوشمند داغی',
        desc: 'محاسبه فوری ارزش باتری فرسوده'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        title: 'گارانتی فعال شرکتی',
        desc: 'ثبت در سامانه رسمی گارانتی'
      }
    ];
  }

  if(isOil){
    return [
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        title: 'اصالت ۱۰۰٪ فیزیکی',
        desc: 'پلمب شرکتی و گرید استاندارد API'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
        title: 'بسته‌بندی ضد نشت',
        desc: 'ارسال ایمن و ضد ضربه با تیپاکس'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: 'تاریخ تولید به‌روز',
        desc: 'تولید ماه‌های اخیر و ماندگاری بالا'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
        title: '۷ روز مهلت بازگشت',
        desc: 'در صورت مخدوش نشدن پلمب فابریک'
      }
    ];
  }

  if(isClutchOrBrakes){
    return [
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        title: 'هولوگرام و اصالت قطعه',
        desc: 'کد قطعه فابریک و شماره فنی رسمی'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
        title: 'تطبیق فابریک با خودرو',
        desc: 'نصب استاندارد و بدون مغایرت ابعادی'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
        title: 'ارسال با باربری و تیپاکس',
        desc: 'تحویل سریع درب منزل و کارگاه'
      },
      {
        icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
        title: '۷ روز ضمانت تعویض',
        desc: 'مرجوعی در صورت مغایرت یا عیب فیزیکی'
      }
    ];
  }

  // پیش‌فرض برای شمع، هدلایت و سایر ملزومات
  return [
    {
      icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      title: 'تست فنی قبل از ارسال',
      desc: 'کنترل فیزیکی و آزمایش سلامت قطعه'
    },
    {
      icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      title: 'سازگار با شبکه برق ECU',
      desc: 'چیپست هوشمند ضد خطا و بدون نویز'
    },
    {
      icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      title: 'ارسال با تیپاکس / پیشتاز',
      desc: 'بسته‌بندی ضربه‌گیر ویژه قطعات حساس'
    },
    {
      icon: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
      title: 'گارانتی طلایی تعویض',
      desc: 'مهلت تست سلامت و اصالت فیزیکی'
    }
  ];
}

// توابع کمکی مشخصات و تضمین‌های مینیمال محصول
function getProductRichDetails(prod, currentCar){
  if(prod.cat === 'motorbano' || (prod.id && prod.id.startsWith('mb-'))){
    return {
      desc: prod.desc || 'محصول تخصصی موتوربانو ویژه بانوان با استانداردهای رسمی ایمنی و ارگونومیک.',
      mfg: prod.mfg || 'کمپانی رسمی موتوربانو (MOTORBANO.IR)',
      weight: prod.weight || 'استاندارد سبک‌وزن بانوان',
      dim: prod.dim || 'ابعاد استاندارد ارگونومیک بانوان',
      material: prod.material || 'متریال درجه یک سبک‌وزن و مقاوم به ضربه',
      origin: prod.origin || 'ایران / پلتفرم استاندارد بین‌المللی',
      prodDate: prod.prodDate || 'مدل ساخت سال ۲۰۲۶ با گارانتی رسمی',
      extra: prod.extra || 'ارسال و تحویل فوری سراسر کشور با بیمه کامل'
    };
  }

  const t = (prod.title || '').toLowerCase();
  const cat = prod.cat || '';
  const carShort = currentCar.name.split('/')[0].split('(')[0].trim();

  if(cat === 'battery' || t.includes('باتری')){
    return {
      desc: `باتری اتمیک سیلد کلسیمی بدون نیاز به نگهداری (Maintenance Free) با صفحات سربی مقاوم در برابر دشارژ عمیق و صفحات آلیاژ کلسیم-نقره. این قطعه بالاترین جریان استارت سرد (CCA) را در تمامی شرایط اقلیمی سرد و گرم سال تامین نموده و دارای تطبیق ۱۰۰٪ فابریک کارخانه‌ای با سیستم برق و دینام خودروی ${carShort} می‌باشد.`,
      mfg: 'مجتمع صنایع سپاهان باتری (تحت لیسانس رسمی سوزوکی ژاپن)',
      weight: '۱۵.۸ کیلوگرم ± ۰.۲',
      dim: 'طول ۲۴۲ × عرض ۱۷۵ × ارتفاع ۱۹۰ میلی‌متر',
      material: 'صفحات سربی آلیاژ کلسیم-نقره با محفظه پلی‌پروپیلن مقاوم به ضربه',
      origin: 'ایران / تحت لیسانس ژاپن (استانداردهای بین‌المللی JIS و DIN)',
      prodDate: 'تولید سه‌ماهه سوم ۲۰۲۶ (الکترولیت تازه با گارانتی فعال)',
      extra: 'ظرفیت نامی ۶۰ آمپر ساعت • جریان استارت سرد ۵۲۰ آمپر فابریک'
    };
  } else if(cat === 'oil' || t.includes('روغن')){
    return {
      desc: `روغن موتور تمام سنتتیک فرموله‌شده با پیشرفته‌ترین مولکول‌های هوشمند جذب سطحی جهت ایجاد لایه محافظ دائمی روی قطعات متحرک پیشرانه از لحظه استارت اولیه تا سخت‌ترین شرایط رانندگی، بهینه‌سازی‌شده برای روانکاری قطعات داخلی موتور ${carShort}.`,
      mfg: 'کاسترول بین‌الملل / شرکت تولیدی کاسترول پارت (پلمپ اصلی هولوگرام‌دار)',
      weight: '۳.۷ کیلوگرم (خالص روغن + گالن پلیمری ۴ لیتری)',
      dim: 'حجم خالص ۴ لیتر (ابعاد گالن: ۲۸ × ۲۰ × ۱۰ سانتی‌متر)',
      material: 'روغن پایه تمام سنتتیک Group III+ با افزودنی‌های نانو ضدسایش',
      origin: 'تحت لیسانس انگلستان / سطح کیفی بین‌المللی API SN/CF',
      prodDate: 'تولید سال ۲۰۲۶ • تاریخ انقضا: ۵ سال پس از تولید',
      extra: 'درجه گرانروی 10W-40 مخصوص شرایط اقلیمی چهارفصل ایران'
    };
  } else if(cat === 'clutch' || t.includes('کلاچ')){
    return {
      desc: `کیت کامل کلاچ پری‌دمپر ارتقایافته مجهز به فنربندی دوبل میراکننده ارتعاشات فلایویل، تضمین‌کننده پدال‌گیری فوق‌العاده نرم و شتاب‌گیری یکنواخت بدون لرزش در شروع حرکت و سربالایی‌ها برای گیربکس خودروی ${carShort}.`,
      mfg: 'کمپانی والئو فرانسه (Valeo Green Box اصلی وارداتی)',
      weight: '۵.۴ کیلوگرم (مجموعه کامل ۳ تکه کیت کلاچ)',
      dim: 'قطر خارجی صفحه کلاچ ۲۰۰ میلی‌متر • شفت ۱۸ خار فابریک',
      material: 'فولاد آلیاژی کروم-مولیبدن با لنت‌های کامپوزیت کربن-سرامیک فاقد آزبست',
      origin: 'فرانسه / استاندارد فابریک خط تولید کارخانه‌ای (OEM)',
      prodDate: 'سری ساخت جدید ۲۰۲۶ با کد رهگیری اختصاصی والئو فرانسه',
      extra: 'شامل دیسک خورشیدی پرقدرت، صفحه پری‌دمپر ۴ فنره دوبل و بلبرینگ اصل'
    };
  } else if(cat === 'lent' || t.includes('لنت')){
    return {
      desc: `لنت ترمز سرامیکی با ضریب اصطکاک بالا و پایدار در داغ‌ترین شرایط ترمزگیری شهری و جاده‌ای. فاقد براده‌های خشن آهن و فاقد آزبست، مانع از سوت کشیدن چرخ‌ها و خط افتادن روی دیسک ترمز خودروی ${carShort} می‌شود.`,
      mfg: 'کمپانی الیگ ژاپن (ELIG Brake Systems Co.)',
      weight: '۱.۴۵ کیلوگرم (دست کامل ۴ عددی چرخ‌های جلو)',
      dim: 'طول ۱۳۵ × عرض ۵۵ × ضخامت گوشته ۱۶ میلی‌متر',
      material: 'فرمولاسیون نانوسرامیک با الیاف آرامید کولار و ذرات مس هدایت حرارتی',
      origin: 'ژاپن / دارای تاییدیه استاندارد ایمنی اروپا ECE R90',
      prodDate: 'تولید نیمه اول ۲۰۲۶ با ضمانت عدم سوت کشیدن',
      extra: 'مجهز به شیم‌های سه‌لایه الاستومری ضدلرزش نصب‌شده در پشت لنت'
    };
  } else {
    return {
      desc: `قطعه تخصصی و باکیفیت خودرویی منطبق بر استانداردهای کارخانه‌ای خط تولید، با مقاومت فیزیکی بالا در برابر تنش‌های مکانیکی و شرایط اقلیمی، سازگار با ${carShort}.`,
      mfg: 'تامین‌کننده رسمی استاندارد خودروسازی (OEM Part)',
      weight: '۲.۱ کیلوگرم',
      dim: 'ابعاد استاندارد فابریک کارخانه‌ای قطعه',
      material: 'متریال درجه یک مهندسی مقاوم در برابر حرارت و سایش',
      origin: 'ایران / وارداتی اصلی با هولوگرام تایید اصالت',
      prodDate: 'تولید سال ۲۰۲۶ با ضمانت سلامت فیزیکی',
      extra: 'ضمانت تطبیق فابریک بدون نیاز به تبدیل یا تغییر پایه'
    };
  }
}

function buildMinimalKeySpecs(prod, isService, currentCar){
  const carShort = currentCar.name.split('/')[0].split('(')[0].trim();
  const compatData = carCompatDb[prod.id] || { compatShort: carShort };
  const rich = getProductRichDetails(prod, currentCar);

  const specs = [];
  specs.push({
    label: 'شرکت سازنده',
    val: rich.mfg,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>',
    theme: 'blue'
  });
  specs.push({
    label: 'وزن دقیق محصول',
    val: rich.weight,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    theme: 'amber'
  });
  specs.push({
    label: 'ابعاد و اندازه',
    val: rich.dim,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    theme: 'purple'
  });
  specs.push({
    label: 'جنس و ساختار قطعه',
    val: rich.material,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    theme: 'emerald'
  });
  specs.push({
    label: 'کشور مبدا و استاندارد',
    val: rich.origin,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    theme: 'blue'
  });
  specs.push({
    label: 'تاریخ تولید و وضعیت',
    val: rich.prodDate,
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    theme: 'emerald'
  });
  specs.push({
    label: 'گارانتی رسمی شرکتی',
    val: prod.warranty || '۲۴ ماه ضمانت تعویض درجا',
    icon: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    theme: 'purple'
  });
  specs.push({
    label: 'شیوه تحویل و اجرا',
    val: isService ? 'اعزام تکنسین با ابزار تست در محل' : 'ارسال اکسپرس پستی / باربری تیپاکس',
    icon: isService
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
      : '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    theme: 'blue'
  });

  return specs;
}

function getMinimalGuarantees(prod, isService){
  if(isService){
    return [
      {
        title: 'نصب فوری در محل',
        desc: 'اعزام تکنسین زیر ۴۵ دقیقه',
        theme: 'blue',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
      },
      {
        title: 'تست سلامت برق',
        desc: 'تست رایگان دینام و استارت',
        theme: 'emerald',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
      },
      {
        title: 'کسر ارزش داغی',
        desc: 'محاسبه آنی باتری فرسوده',
        theme: 'amber',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
      }
    ];
  } else {
    return [
      {
        title: 'ضمانت اصالت ۱۰۰٪',
        desc: 'قطعه اورجینال با هولوگرام',
        theme: 'emerald',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
      },
      {
        title: 'بسته‌بندی ضربه‌گیر',
        desc: 'ارسال با تیپاکس و پست',
        theme: 'blue',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
      },
      {
        title: '۷ روز مهلت تعویض',
        desc: 'امکان عودت و بازگشت وجه',
        theme: 'purple',
        icon: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'
      }
    ];
  }
}

let savedShopScrollY = 0;

function openProductSpecModal(prodId){
  const prod = findProductById(prodId);
  if(!prod) return;

  savedShopScrollY = window.scrollY || document.documentElement.scrollTop || 0;

  currentSpecProduct = prod;
  currentSpecQty = 1;

  const modal = document.getElementById('productSpecModal');
  if(!modal) return;

  // فعال‌سازی حالت قفل ارتفاع استاندارد برای گوشی
  const phone = document.querySelector('.phone');
  if(phone) phone.classList.add('pdp-active');

  const isServiceProduct = (prod.cat === 'battery' || (prod.title && prod.title.includes('باتری')) || (prod.title && prod.title.includes('تعویض در محل')));
  const currentCar = carDataMap[currentSelectedCar] || carDataMap['pride'];
  const rich = getProductRichDetails(prod, currentCar);

  // ۱. تصویر و برند
  const imgEl = document.getElementById('psmImage');
  const brandEl = document.getElementById('psmBrandBadge');
  if(imgEl) imgEl.src = prod.img || 'images/shop/battery-thumb.jpg';
  if(brandEl) brandEl.textContent = (prod.brand || 'اورجینال شرکتی').split('•')[0].trim();

  // ۲. برچسب نوع خدمت و عنوان
  const deliveryTagEl = document.getElementById('psmDeliveryTag');
  if(deliveryTagEl){
    deliveryTagEl.textContent = isServiceProduct ? '🛠️ نصب در محل' : '📦 ارسال پستی';
    deliveryTagEl.className = isServiceProduct ? 'pdp-delivery-badge service' : 'pdp-delivery-badge ecom';
  }

  const titleEl = document.getElementById('psmTitle');
  if(titleEl) titleEl.textContent = prod.title;

  const compatCarEl = document.getElementById('psmCompatCar');
  if(compatCarEl) compatCarEl.textContent = currentCar.name.split('/')[0].split('(')[0].trim();

  // ۳. قیمت، تخفیف، اقساط
  const priceEl = document.getElementById('psmPrice');
  const oldPriceEl = document.getElementById('psmOldPrice');
  const discEl = document.getElementById('psmDiscountBadge');
  const instEl = document.getElementById('psmInstallmentAmount');
  const scrapNoteEl = document.getElementById('psmScrapNote');

  if(priceEl) priceEl.textContent = (prod.price || 1850000).toLocaleString('fa-IR');
  if(oldPriceEl) oldPriceEl.textContent = (prod.oldPrice || Math.round(prod.price * 1.25)).toLocaleString('fa-IR') + ' تومان';
  if(discEl) discEl.textContent = prod.discount || '۲۰٪ تخفیف';
  if(instEl) instEl.textContent = (prod.inst || '۴۶۲,۵۰۰ تومانی').replace(' تومانی', '') + ' تومان / ماه';
  if(scrapNoteEl) scrapNoteEl.style.display = isServiceProduct ? 'block' : 'none';

  // ۴. توضیحات روان و جامع محصول
  const descEl = document.getElementById('psmDescription');
  if(descEl) descEl.textContent = rich.desc;

  // ۵. لیست مشخصات فنی، وزن، ابعاد، سازنده و جنس کالا
  const specsGrid = document.getElementById('psmSpecsGrid');
  if(specsGrid){
    specsGrid.innerHTML = '';
    const keySpecs = buildMinimalKeySpecs(prod, isServiceProduct, currentCar);
    keySpecs.forEach(s => {
      const item = document.createElement('div');
      item.className = 'pdp-spec-row';
      item.innerHTML = `
        <div class="pdp-sr-icon-wrap ${s.theme}">${s.icon}</div>
        <span class="pdp-sr-label">${s.label}</span>
        <span class="pdp-sr-val">${s.val}</span>
      `;
      specsGrid.appendChild(item);
    });
  }

  // ۶. کارت‌های ۳ گانه مزایا و تضمین‌های سفارش
  const guarStrip = document.getElementById('psmGuaranteesStrip');
  if(guarStrip){
    guarStrip.innerHTML = '';
    const guarantees = getMinimalGuarantees(prod, isServiceProduct);
    guarantees.forEach(g => {
      const gCard = document.createElement('div');
      gCard.className = `pdp-guar-card ${g.theme}`;
      gCard.innerHTML = `
        <div class="pdp-guar-icon">${g.icon}</div>
        <span class="pdp-guar-title">${g.title}</span>
        <span class="pdp-guar-desc">${g.desc}</span>
      `;
      guarStrip.appendChild(gCard);
    });
  }

  // ۷. به‌روزرسانی قیمت کل در دکمه خرید
  updateSpecModalPrice();

  // اسکرول صفحه محتوا به بالا
  const scrollEl = modal.querySelector('.pdp-content-scroll');
  if(scrollEl) scrollEl.scrollTop = 0;

  modal.style.display = 'flex';
  modal.classList.add('open');

  // پیمایش ویوپورت صفحه به بالای گوشی
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeProductSpecModal(e){
  const modal = document.getElementById('productSpecModal');
  if(modal){
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
  const phone = document.querySelector('.phone');
  if(phone){
    phone.classList.remove('pdp-active');
  }
  if(savedShopScrollY > 0){
    window.scrollTo({ top: savedShopScrollY, behavior: 'instant' });
  }
}

function changeSpecQty(delta){
  currentSpecQty = Math.max(1, Math.min(10, currentSpecQty + delta));
  updateSpecModalPrice();
}

function updateSpecModalPrice(){
  const qtyEl = document.getElementById('psmQty');
  const totalEl = document.getElementById('psmTotalPrice');
  if(qtyEl) qtyEl.textContent = currentSpecQty.toLocaleString('fa-IR');
  if(totalEl && currentSpecProduct){
    const total = currentSpecProduct.price * currentSpecQty;
    totalEl.textContent = total.toLocaleString('fa-IR');
  }
}

function addSpecToCart(){
  if(!currentSpecProduct) return;
  const btn = document.getElementById('psmBtnAddToCart');
  if(btn){
    btn.classList.add('added');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>به سبد اضافه شد!</span>
    `;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `
        <svg class="pdp-cta-cart-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span id="pdpBuyBtnLabel">افزودن به سبد</span>
      `;
    }, 1500);
  }

  for(let i = 0; i < currentSpecQty; i++){
    addToCart(null, currentSpecProduct.title, currentSpecProduct.id, currentSpecProduct.price);
  }
}

// توابع مدیریت حالت شب (Dark Mode)
function toggleDarkMode(){
  const phone = document.querySelector('.phone');
  if(!phone) return;
  phone.classList.toggle('theme-dark');
  const isDark = phone.classList.contains('theme-dark');
  try {
    localStorage.setItem('icarz_theme', isDark ? 'dark' : 'light');
  } catch(e){}
  
  updateThemeToggleButtons(isDark);
  showToast(isDark ? 'حالت شب (Dark Mode) فعال شد 🌙' : 'حالت روز (Light Mode) فعال شد ☀️');
}

function updateThemeToggleButtons(isDark){
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach(btn => {
    btn.classList.toggle('is-dark', isDark);
  });
  const drawerSwitch = document.getElementById('drawerThemeSwitch');
  if(drawerSwitch){
    drawerSwitch.classList.toggle('active', isDark);
  }
}

function initAppTheme(){
  try {
    const saved = null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(saved === 'dark' || (!saved && prefersDark)){
      const phone = document.querySelector('.phone');
      if(phone) 
      updateThemeToggleButtons(true);
    }
  } catch(e){}
}

function quickCheckoutSpec(){
  if(!currentSpecProduct) return;
  const isServiceProduct = (currentSpecProduct.cat === 'battery' || (currentSpecProduct.title && currentSpecProduct.title.includes('باتری')) || (currentSpecProduct.title && currentSpecProduct.title.includes('تعویض در محل')));
  
  // برای باتری: ارسال اکسپرس فوری و تکنسین؛ برای دیسک و صفحه و تایر: تیپاکس یا باربری
  activeShippingMethod = isServiceProduct ? 'instant' : 'tipax';

  // اول به سبد اضافه شود
  addToCart(null, currentSpecProduct.title, currentSpecProduct.id, currentSpecProduct.price);
  // بستن مشخصات
  closeProductSpecModal();
  // باز کردن صفحه فاکتور و تسویه حساب
  openCartModal();
}

function toggleCompareFromSpec(){
  if(!currentSpecProduct) return;
  const cmpBtn = document.getElementById('psmCompareBtn');
  toggleCompare(currentSpecProduct.id, cmpBtn);
  const isCompared = compareList.some(item => item.id === currentSpecProduct.id);
  if(cmpBtn){
    cmpBtn.style.color = isCompared ? '#2563EB' : '#475569';
    cmpBtn.style.background = isCompared ? '#EFF6FF' : '#FFFFFF';
    cmpBtn.style.borderColor = isCompared ? '#BFDBFE' : '#E2E8F0';
  }
}

// تولید دیکشنری مشخصات فنی دقیق بر اساس دسته‌بندی و داده محصول
function buildProductSpecsDictionary(p){
  const dict = {};

  dict['برند و اصالت کالا'] = (p.brand || 'اورجینال شرکتی') + ' (تضمین ۱۰۰٪ اصالت فیزیکی)';
  dict['کشور سازنده / لیسانس'] = p.origin || (p.brand && p.brand.includes('JAPAN') ? 'ژاپن (تحت لیسانس رسمی)' : (p.brand && p.brand.includes('GERMANY') ? 'آلمان' : 'ایران - تراز اول صادراتی'));
  dict['مدت زمان گارانتی'] = p.warranty || '۲۴ ماه ضمانت تعویض طلایی بی‌قیدوشرط';

  const isServ = (p.cat === 'battery' || (p.title && p.title.includes('باتری')) || (p.title && p.title.includes('تعویض در محل')));
  dict['نوع سفارش و تحویل'] = isServ ? '🛠️ سفارش خدماتی و سرویس در محل (اعزام تکنسین با وانت امداد)' : '📦 خرید اینترنتی کالا (ارسال پستی و باربری به سراسر کشور)';
  const cData = carCompatDb[p.id];
  if(cData){
    dict['خودروهای مناسب و سازگار'] = cData.compat;
  }

  const t = (p.title || '').toLowerCase();
  const cat = p.cat || '';

  if(cat === 'battery' || t.includes('باتری')){
    dict['نوع تکنولوژی باتری'] = 'سیلد اتمی Maintenance Free (MF کلسیمی)';
    dict['ظرفیت (آمپراژ)'] = t.includes('۵۰') ? '۵۰ آمپر ساعت' : (t.includes('۶۶') ? '۶۶ آمپر ساعت' : (t.includes('۷۰') ? '۷۰ آمپر ساعت' : (t.includes('۷۴') ? '۷۴ آمپر ساعت' : '۶۰ آمپر ساعت')));
    dict['جریان استارت سرد (CCA)'] = '540A (استارت آنی در دمای منفی ۲۰ درجه)';
    dict['خدمات نصب و تعویض'] = 'ارسال زیر ۴۵ دقیقه با تکنسین + تست رایگان دینام';
    dict['شرایط داغی باتری'] = 'محاسبه شده با کسر تحویل داغی فرسوده هم‌آمپر';
  } else if(cat === 'lent' || t.includes('لنت') || t.includes('ترمز') || t.includes('دیسک')){
    dict['محور نصب'] = 'چرخ‌های جلو (سازگار با کالیپر فابریک)';
    dict['فرمولاسیون متریال'] = t.includes('سرامیک') ? 'نانو سرامیک پیشرفته بدون گرد لنت و بدون سوت' : 'نیمه‌متالیک ارتقایافته با کربن فعال';
    dict['مقاومت حرارتی'] = 'پایداری ترمزگیری تا ۶۵۰ درجه سانتی‌گراد';
    dict['طول عمر تقریبی'] = '۴۵,۰۰۰ تا ۶۰,۰۰۰ کیلومتر رانندگی شهری';
    dict['سنسور اخطار لنت'] = 'دارای پین الکتریکی هشدار پشت آمپر';
  } else if(cat === 'clutch' || t.includes('کلاچ') || t.includes('دیسک و صفحه')){
    dict['محتویات کیت'] = 'دیسک، صفحه کلاچ پری‌دمپر و بلبرینگ دوبل تقویت‌شده';
    dict['فناوری فنربندی صفحه'] = '۴ فنره دوبل پری‌دمپر (حذف ۱۰۰٪ لرزش در نیم‌کلاچ)';
    dict['جنس لنت اصطکاکی'] = 'الیاف کربن-کولار ضد داغی و بوی کلاچ';
    dict['احساس پدال کلاچ'] = 'پدال فوق‌العاده نرم و پنبه‌ای با کلاچ‌گیری روان';
  } else if(cat === 'oil' || t.includes('روغن') || t.includes('فیلتر')){
    dict['درجه گرانروی (SAE)'] = t.includes('5w-30') ? '5W-30 تمام سنتتیک' : '10W-40 نیمه سنتتیک پیشرفته';
    dict['سطح کیفی استانداردی'] = 'API SN / SP Plus (بالاترین استاندارد حفاظت موتور)';
    dict['حجم بسته‌بندی'] = '۴ لیتری قوطی فلزی پلمپ با بارکد رهگیری';
    dict['کارکرد پیشنهادی'] = '۸,۰۰۰ تا ۱۰,۰۰۰ کیلومتر یا ۱ سال کارکرد تضمینی';
  } else if(cat === 'spark' || t.includes('شمع') || t.includes('وایر') || t.includes('کویل')){
    dict['نوع آلیاژ الکترود'] = t.includes('ایریدیوم') ? 'ایریدیوم سوزنی لیزری 0.6mm' : 'پلاتینیوم دو زمانه مقاوم به حرارت';
    dict['فیلر شمع (Gap)'] = '0.8 میلی‌متر تنظیم کارخانه‌ای';
    dict['طول عمر استاندارد'] = '۷۰,۰۰۰ کیلومتر جرقه پایدار و بدون افت ولتاژ';
    dict['تاثیر بر خودرو'] = 'کاهش ۸٪ مصرف سوخت و شتاب‌گیری بسیار سریع‌تر';
  } else if(cat === 'headlight' || t.includes('هدلایت') || t.includes('لامپ') || t.includes('مه‌شکن')){
    dict['توان واقعی خروجی'] = '۱۲۰ تا ۲۴۰ وات توربو پاور';
    dict['نوع چیپست نوری'] = 'CSP Pro Multi-Core شدت نور و پرتاب فوق‌العاده';
    dict['رنگ و دمای نور'] = '۶۰۰۰ کلوین (سفید یخی سوپرفاکس بدون پخش نور)';
    dict['خنک‌کننده'] = 'لوله مسی دولایه Copper Tube + فن ۱۲,۰۰۰ دور بی‌صدا';
    dict['سیستم کنباس'] = 'چیپست هوشمند ضد خطا و نویز (بدون ارور ECU)';
  } else {
    if(p.specs && typeof p.specs === 'object'){
      Object.assign(dict, p.specs);
    }
  }

  dict['روش‌های ارسال'] = isServ
    ? 'اعزام موشکی امدادگر و تکنسین زیر ۴۵ دقیقه به آدرس شما'
    : 'ارسال با تیپاکس اکسپرس / باربری و پست پیشتاز سراسری (۲۴ الی ۴۸ ساعته)';
  dict['بسته‌بندی و تحویل'] = isServ
    ? 'تحویل حضوری قطعه توسط تکنسین + نصب فابریک در محل'
    : 'بسته‌بندی ایمن کارتن ضربه‌گیر با پلمب رسمی شرکت و کد رهگیری';
  dict['ضمانت بازگشت'] = isServ
    ? 'گارانتی تعویض درجا در صورت بروز هرگونه عیب ولتاژ'
    : '۷ روز مهلت تست و مرجوعی کالا در صورت عدم نصب یا مغایرت';
  dict['ضمانت بازگشت'] = '۷ روز مهلت تست و عودت بی‌قیدوشرط وجه';

  return dict;
}


;
// ==================== بازار فروشندگان آی‌کارز (مارکت‌پلیس چندفروشنده‌ای) ====================
const MK_S='icz_sellers', MK_P='icz_products', MK_SES='icz_session';
const MK_CAT={oil:'روغن و فیلتر',battery:'باتری',lent:'لنت و ترمز',clutch:'دیسک و صفحه',spark:'شمع',headlight:'هدلایت',parts:'سایر قطعات'};
const MK_CATIMG={oil:'images/tiles/روغن_موتور.webp',battery:'images/tiles/باتری.webp',lent:'images/tiles/لنت.webp',clutch:'images/tiles/کلاچ.webp',spark:'images/tiles/شمع.webp',headlight:'images/tiles/هدلایت_و_چراغ.webp',parts:'images/tiles/جلوبندی.webp'};
function mkGet(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
function mkSet(k,v){localStorage.setItem(k,JSON.stringify(v))}
function mkFa(n){return Number(n||0).toLocaleString('fa-IR')}
function mkSeed(){
  if(localStorage.getItem(MK_S))return;
  mkSet(MK_S,[{id:'s1',store:'قطعات البرز',owner:'رضا محمدی',phone:'09121234567',pass:'1234'},
             {id:'s2',store:'باتری تهران',owner:'سارا احمدی',phone:'09127654321',pass:'1234'}]);
  mkSet(MK_P,[
    {id:'p1',sellerId:'s1',title:'روغن موتور کاسترول GTX ۲۰W-50 چهار لیتری',cat:'oil',price:620000,old:715000,img:MK_CATIMG.oil},
    {id:'p2',sellerId:'s2',title:'باتری اتمی واریان ۵۵ آمپر گارانتی ۱۸ ماهه',cat:'battery',price:2850000,old:3100000,img:MK_CATIMG.battery},
    {id:'p3',sellerId:'s1',title:'شمع ایریدیوم NGV ژاپن (هر عدد)',cat:'spark',price:95000,old:120000,img:MK_CATIMG.spark},
    {id:'p4',sellerId:'s2',title:'هدلایت LED دوکنتاک H4 نور سفید یخی',cat:'headlight',price:1450000,old:0,img:MK_CATIMG.headlight}
  ]);
}
function mkSeller(id){return mkGet(MK_S,[]).find(s=>s.id===id)}
function renderMarketCards(){
  const t=document.getElementById('marketSliderTrack'); if(!t)return;
  const prods=mkGet(MK_P,[]), sellers=mkGet(MK_S,[]);
  t.innerHTML='';
  prods.forEach(p=>{
    const s=sellers.find(x=>x.id===p.sellerId)||{store:'فروشندهٔ آی‌کارز'};
    const off=p.old?Math.round((1-p.price/p.old)*100):0;
    const card=document.createElement('div'); card.className='tc-card';
    card.innerHTML=`
      <div class="tc-stage" style="position:relative;background:#F8FAFC;">
        ${off?`<span style="position:absolute;top:6px;left:6px;background:#FEF2F2;border:0.5px solid #FECACA;color:#DC2626;font-size:7px;font-weight:800;padding:1.5px 5px;border-radius:5px;z-index:2">−${mkFa(off)}٪</span>`:''}
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <span class="mk-seller-badge">🏪 ${s.store}</span>
      </div>
      <div class="tc-info">
        <div class="tc-brand-row"><span class="tc-brand" style="color:#047857;font-weight:700">${MK_CAT[p.cat]||'قطعات'}</span><span class="tc-badge-service" style="background:#ECFDF5;color:#047857;border-color:#A7F3D0">فروشندهٔ معتبر</span></div>
        <div class="tc-title" title="${p.title}">${p.title}</div>
      </div>
      <div class="tc-foot">
        <div class="tc-price-wrap">${p.old?`<span class="tc-old">${mkFa(p.old)}</span>`:''}<div class="tc-price">${mkFa(p.price)} <span>تومان</span></div></div>
        <button class="tc-add-btn" style="background:linear-gradient(135deg,#059669,#047857);box-shadow:0 3px 8px rgba(5,150,105,.38)" onclick="showToast('به سبد خرید اضافه شد ✔')"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      </div>`;
    t.appendChild(card);
  });
  if(typeof enableDragScroll==='function')enableDragScroll();
}
function mkTab(w){
  document.getElementById('mkTabReg').classList.toggle('on',w==='reg');
  document.getElementById('mkTabLog').classList.toggle('on',w==='log');
  document.getElementById('mkReg').style.display=w==='reg'?'block':'none';
  document.getElementById('mkLog').style.display=w==='log'?'block':'none';
}
function openSellerEntry(){
  const ses=localStorage.getItem(MK_SES);
  if(ses&&mkSeller(ses)){openSellerPanel();return}
  document.getElementById('sellerAuthModal').classList.add('open');
}
function sellerRegister(){
  const st=regStore.value.trim(),ow=regOwner.value.trim(),ph=regPhone.value.trim(),pa=regPass.value;
  if(!st||!ow||ph.length<10||pa.length<4){showToast('همهٔ فیلدها را کامل وارد کنید');return}
  const sellers=mkGet(MK_S,[]);
  if(sellers.some(s=>s.phone===ph)){showToast('این شماره قبلاً ثبت شده؛ وارد شوید');mkTab('log');return}
  const id='s'+Date.now();
  sellers.push({id,store:st,owner:ow,phone:ph,pass:pa});
  mkSet(MK_S,sellers); localStorage.setItem(MK_SES,id);
  document.getElementById('sellerAuthModal').classList.remove('open');
  showToast('فروشگاه «'+st+'» ساخته شد 🎉'); openSellerPanel();
}
function sellerLogin(){
  const ph=logPhone.value.trim(),pa=logPass.value;
  const s=mkGet(MK_S,[]).find(x=>x.phone===ph&&x.pass===pa);
  if(!s){showToast('شماره یا رمز عبور اشتباه است');return}
  localStorage.setItem(MK_SES,s.id);
  document.getElementById('sellerAuthModal').classList.remove('open');
  showToast('خوش آمدید، '+s.store+' 🏪'); openSellerPanel();
}
function sellerLogout(){localStorage.removeItem(MK_SES);document.getElementById('sellerPanelModal').classList.remove('open');showToast('از پنل فروشنده خارج شدید')}
function openSellerPanel(){
  const s=mkSeller(localStorage.getItem(MK_SES)); if(!s)return;
  spStore.textContent=s.store; spPhone.textContent='مالک: '+s.owner+' | '+mkFa(s.phone);
  renderPanelList(s.id);
  document.getElementById('sellerPanelModal').classList.add('open');
}
function renderPanelList(sid){
  const box=document.getElementById('spList'); box.innerHTML='';
  const list=mkGet(MK_P,[]).filter(p=>p.sellerId===sid);
  if(!list.length){box.innerHTML='<span style="font-size:10px;color:#94A3B8">هنوز محصولی ثبت نکرده‌اید.</span>';return}
  list.forEach(p=>{
    const row=document.createElement('div'); row.className='mk-prod';
    row.innerHTML=`<img loading="lazy" decoding="async"  src="${p.img}"><div style="flex:1"><b>${p.title}</b><span>${MK_CAT[p.cat]||''} | ${mkFa(p.price)} تومان</span></div><button class="mk-del" onclick="delProduct('${p.id}')">حذف</button>`;
    box.appendChild(row);
  });
}
function delProduct(pid){
  mkSet(MK_P, mkGet(MK_P,[]).filter(p=>p.id!==pid));
  renderMarketCards(); renderPanelList(localStorage.getItem(MK_SES));
  showToast('محصول حذف شد');
}
function sellerAddProduct(){
  const sid=localStorage.getItem(MK_SES); if(!sid)return;
  const title=pTitle.value.trim(), cat=pCat.value, price=+pPrice.value, old=+pOld.value||0;
  if(!title||!price){showToast('عنوان و قیمت الزامی است');return}
  const finish=(img)=>{
    const prods=mkGet(MK_P,[]);
    prods.unshift({id:'p'+Date.now(),sellerId:sid,title,cat,price,old,img});
    mkSet(MK_P,prods);
    pTitle.value='';pPrice.value='';pOld.value='';pImg.value='';
    renderMarketCards(); renderPanelList(sid);
    showToast('محصول شما در بازار منتشر شد ✔');
  };
  const f=pImg.files[0];
  if(!f){finish(MK_CATIMG[cat]);return}
  const rd=new FileReader();
  rd.onload=e=>{
    const im=new Image();
    im.onload=()=>{
      const sc=Math.min(1,420/Math.max(im.width,im.height));
      const c=document.createElement('canvas'); c.width=im.width*sc; c.height=im.height*sc;
      c.getContext('2d').drawImage(im,0,0,c.width,c.height);
      finish(c.toDataURL('image/jpeg',.82));
    };
    im.src=e.target.result;
  };
  rd.readAsDataURL(f);
}
mkSeed(); deferUntilNear(document.getElementById('marketSliderTrack'), renderMarketCards);

;
function mkFitFlow(){document.querySelectorAll('.ring-ad-tx').forEach(tx=>{const ch=tx.querySelector('.ring-ad-chips');if(!ch)return;const d=ch.scrollWidth-ch.clientWidth;if(d>2){ch.style.setProperty('--slide',d+'px');ch.classList.add('flow')}else{ch.classList.remove('flow')}})}
window.addEventListener('load',()=>setTimeout(mkFitFlow,400));
// ===== مدیریت اسکرول حرفه‌ای آی‌کارز =====
(function(){
  const prog = document.getElementById('scrollProgress');
  const toTop = document.getElementById('toTop');
  let lastY = window.scrollY, ticking = false;
  function upd(){
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if(prog) prog.style.transform = 'scaleX(' + (max>0 ? (y/max) : 0) + ')';
    if(toTop) toTop.classList.toggle('show', y > 600);
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(upd); } }, {passive:true});
  upd();
  // ظهور نرم بخش‌ها هنگام اسکرول
  const io = new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('rv-in'); io.unobserve(e.target); } }); }, {rootMargin:'300px 0px', threshold:0});
  document.querySelectorAll('.quad-banners,.shop-carousel-section').forEach(el=>{ el.classList.add('rv'); io.observe(el); });
  // توقف انیمیشن‌های پیوسته وقتی از دید خارج‌اند (صرفه‌جویی GPU)
  const ioA = new IntersectionObserver(es=>{ es.forEach(e=>{ e.target.classList.toggle('anim-off', !e.isIntersecting); }); }, {rootMargin:'160px 0px', threshold:0});
  document.querySelectorAll('.vph-blend,.ring-ad,.quad-banners,.shs-banner-img-full').forEach(el=>{ ioA.observe(el); });
})();

