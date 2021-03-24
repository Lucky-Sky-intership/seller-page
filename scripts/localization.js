const local = [
  {
    "id": "navbar-item1",
    "en": "Home",
    "ch": "主页"
  }, {
    "id": "navbar-item2",
    "en": "Seller",
    "ch": "销售"
  },
  {
    "id": "top-description-TTL",
    "en": "Lorem ipsum dolor sit amet",
    "ch": "一二三四五六七"
  },
  {
    "id": "top-description-SBTTL",
    "en": "Lorem ipsum dolor sit amet",
    "ch": "一二三四五六七"
  },
  {
    "id": "top-description-CTT",
    "en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
    Nisl suscipit adipiscing bibendum est ultricies integer quis\
    auctor. Quam nulla porttitor massa id neque aliquam vestibulum\
    morbi.",
    "ch": "少年十五二十时，步行夺得胡马骑。射杀山中白额虎，肯数邺下黄须儿。一身转战三千里，一剑曾当百万师。汉兵奋迅如霹雳，虏骑崩腾畏蒺藜。\
    卫青不败由天幸，李广无功缘数奇。自从弃置便衰朽，世事磋跎成白首。昔时飞箭无全目，今日垂杨生左肘。"
  },
  {
    "id": "block-1-title",
    "en": "Get Started",
    "ch": "一二三四五"
  },
  {
    "id": "block-1-content",
    "en": "Get to know the procedure for how to become a Seller at iJiaBuy.",
    "ch": "一二三四五六七八九十"
  },
  {
    "id": "block-2-title",
    "en": "Seller Types",
    "ch": "一二三四五"
  },
  {
    "id": "block-2-content",
    "en": "iJiaBuy provides multiple seller types to suit your needs.",
    "ch": "一二三四五六七八九十"
  },
  {
    "id": "block-3-title",
    "en": "Categories",
    "ch": "一二三四五"
  },
  {
    "id": "block-3-content",
    "en": "iJiaBuy has categories from food to personal care.",
    "ch": "一二三四五六七八九十"
  },
  {
    "id": "block-4-title",
    "en": "Benefits",
    "ch": "一二三四五"
  },
  {
    "id": "block-4-content",
    "en": "Selling products at iJiaBuy can give you benefits.",
    "ch": "一二三四五六七八九十"
  },
  {
    "id": "get-started-TTL",
    "en": "Get Started",
    "ch": "一二三四五"
  },
  {
    "id": "get-started-L1",
    "en": "Sign Up",
    "ch": "一二三四五"
  },
  {
    "id": "get-started-L2",
    "en": "Provide information and review terms of business",
    "ch": "一二三四五"
  },
  {
    "id": "get-started-L3",
    "en": "Add Products to Seller Portal and Add Payment method",
    "ch": "一二三四五"
  },
  {
    "id": "get-started-L4",
    "en": "Go Live once approved",
    "ch": "一二三四五"
  },
  {
    "id": "get-started-L5",
    "en": "Manage your business and get paid",
    "ch": "一二三四五"
  },
  {
    "id": "seller-types-TTL",
    "en": "Seller Types",
    "ch": "一二三四五"
  },
  {
    "id": "seller-types-I1",
    "en": "Vendor",
    "ch": "一二三四五"
  },
  {
    "id": "seller-types-I2",
    "en": "Supplier",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-TTL",
    "en": "Categories",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-I1",
    "en": "Personal",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-I2",
    "en": "Household",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-I3",
    "en": "Electronic",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-I4",
    "en": "Children",
    "ch": "一二三四五"
  },
  {
    "id": "catagories-I5",
    "en": "Yumms",
    "ch": "一二三四五"
  }

];

const languages = { 0: "en", 1: "ch" };
var lang = 0;

function switchLanguage() {
  lang = (lang + 1) % 2;
  var language = languages[lang];
  local.forEach(map => {
    var block = document.getElementById(map["id"]);
    if (block != null) { block.innerHTML = map[language]; }
  });
}