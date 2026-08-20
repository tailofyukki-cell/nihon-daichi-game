// ===== 埋め込みデータ（fetch不要・スタンドアロン版） =====

const EMBEDDED_CONFIG = {
  "gameName": "日本列島大地主ゲーム",
  "subtitle": "～ 47都道府県 地名争奪バトル ～",
  "initialMoney": 15000,
  "startBonus": 3000,
  "maxPlayers": 4,
  "minPlayers": 2,
  "diceCount": 2,
  "housesPerHotel": 4,
  "maxHousesPerProperty": 4,
  "bankruptcyThreshold": 0,
  "playerColors": ["#e74c3c", "#3498db", "#2ecc71", "#f39c12"],
  "playerEmojis": ["🔴", "🔵", "🟢", "🟡"],
  "groups": {
    "hokkaido":         { "name": "北海道",       "color": "#1abc9c", "size": 2 },
    "tohoku_hokuriku":  { "name": "東北・北陸",   "color": "#27ae60", "size": 7 },
    "kanto":            { "name": "関東",          "color": "#e74c3c", "size": 7 },
    "chubu":            { "name": "中部",          "color": "#e67e22", "size": 5 },
    "kinki":            { "name": "近畿",          "color": "#9b59b6", "size": 7 },
    "chugoku":          { "name": "中国",          "color": "#3498db", "size": 5 },
    "shikoku":          { "name": "四国",          "color": "#1abc9c", "size": 4 },
    "kyushu_okinawa":   { "name": "九州・沖縄",   "color": "#f39c12", "size": 8 },
    "transit":          { "name": "交通拠点",      "color": "#95a5a6", "size": 4 }
  },
  "victoryCondition": "selectable_turn_limit_or_last_standing",
  "turnLimitOptions": [50, 80, 0],
  "victoryNote": "50または80ターンを選んだ場合は終了時の総資産（所持金＋土地評価額＋建物評価額－抵当額）で勝者を決める。無制限では最後まで破産せずに残ったプレイヤーが勝者となる。"
};

const EMBEDDED_PROPERTIES = [
  { "id": 0,  "type": "START",   "name": "出発！",       "group": null },
  { "id": 1,  "type": "LAND",    "name": "沖縄",         "group": "kyushu_okinawa", "price": 600,  "rent": [40,  200, 600,  1400, 1800, 2000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 2,  "type": "LAND",    "name": "鹿児島",       "group": "kyushu_okinawa", "price": 600,  "rent": [40,  200, 600,  1400, 1800, 2000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 3,  "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 4,  "type": "LAND",    "name": "宮崎",         "group": "kyushu_okinawa", "price": 800,  "rent": [60,  300, 900,  2700, 3600, 4500], "houseCost": 500,  "hotelCost": 500  },
  { "id": 5,  "type": "LAND",    "name": "熊本",         "group": "kyushu_okinawa", "price": 800,  "rent": [60,  300, 900,  2700, 3600, 4500], "houseCost": 500,  "hotelCost": 500  },
  { "id": 6,  "type": "LAND",    "name": "大分",         "group": "kyushu_okinawa", "price": 1000, "rent": [80,  400, 1000, 3000, 4500, 5000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 7,  "type": "TAX",     "name": "旅行税",       "group": null, "amount": 200 },
  { "id": 8,  "type": "LAND",    "name": "長崎",         "group": "kyushu_okinawa", "price": 1000, "rent": [80,  400, 1000, 3000, 4500, 5000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 9,  "type": "LAND",    "name": "佐賀",         "group": "kyushu_okinawa", "price": 1000, "rent": [80,  400, 1000, 3000, 4500, 5000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 10, "type": "TRANSIT", "name": "博多駅",       "group": "transit" },
  { "id": 11, "type": "LAND",    "name": "福岡",         "group": "kyushu_okinawa", "price": 1400, "rent": [100, 500, 1500, 4500, 6250, 7500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 12, "type": "LAND",    "name": "高知",         "group": "shikoku",        "price": 1400, "rent": [100, 500, 1500, 4500, 6250, 7500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 13, "type": "LAND",    "name": "愛媛",         "group": "shikoku",        "price": 1600, "rent": [120, 600, 1800, 5000, 7000, 9000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 14, "type": "SALARY",  "name": "地域振興給料日", "group": null, "amount": 800 },
  { "id": 15, "type": "LAND",    "name": "徳島",         "group": "shikoku",        "price": 1600, "rent": [120, 600, 1800, 5000, 7000, 9000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 16, "type": "LAND",    "name": "香川",         "group": "shikoku",        "price": 1800, "rent": [140, 700, 2000, 5500, 7500, 9500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 17, "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 18, "type": "LAND",    "name": "広島",         "group": "chugoku",        "price": 1800, "rent": [140, 700, 2000, 5500, 7500, 9500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 19, "type": "LAND",    "name": "山口",         "group": "chugoku",        "price": 1800, "rent": [140, 700, 2000, 5500, 7500, 9500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 20, "type": "LAND",    "name": "島根",         "group": "chugoku",        "price": 2000, "rent": [160, 800, 2200, 6000, 8000, 10000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 21, "type": "TAX",     "name": "固定資産税",   "group": null, "amount": 400 },
  { "id": 22, "type": "LAND",    "name": "鳥取",         "group": "chugoku",        "price": 2000, "rent": [160, 800, 2200, 6000, 8000, 10000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 23, "type": "LAND",    "name": "岡山",         "group": "chugoku",        "price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 24, "type": "TRANSIT", "name": "新大阪駅",     "group": "transit" },
  { "id": 25, "type": "LAND",    "name": "兵庫",         "group": "kinki",          "price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 26, "type": "LAND",    "name": "大阪",         "group": "kinki",          "price": 2400, "rent": [200, 1000, 3000, 9000, 12500, 15000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 27, "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 28, "type": "LAND",    "name": "京都",         "group": "kinki",          "price": 2600, "rent": [220, 1100, 3300, 8000, 9750, 11000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 29, "type": "LAND",    "name": "奈良",         "group": "kinki",          "price": 2600, "rent": [220, 1100, 3300, 8000, 9750, 11000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 30, "type": "LAND",    "name": "和歌山",       "group": "kinki",          "price": 2800, "rent": [240, 1200, 3600, 10000, 12000, 14000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 31, "type": "SALARY",  "name": "観光収益給料日", "group": null, "amount": 1000 },
  { "id": 32, "type": "LAND",    "name": "三重",         "group": "kinki",          "price": 2800, "rent": [240, 1200, 3600, 10000, 12000, 14000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 33, "type": "LAND",    "name": "滋賀",         "group": "kinki",          "price": 3000, "rent": [260, 1300, 3900, 11000, 12750, 15000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 34, "type": "LAND",    "name": "愛知",         "group": "chubu",          "price": 3000, "rent": [260, 1300, 3900, 11000, 12750, 15000], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 35, "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 36, "type": "LAND",    "name": "静岡",         "group": "chubu",          "price": 3200, "rent": [280, 1500, 4500, 12500, 14500, 18000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 37, "type": "LAND",    "name": "岐阜",         "group": "chubu",          "price": 3200, "rent": [280, 1500, 4500, 12500, 14500, 18000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 38, "type": "TRANSIT", "name": "名古屋駅",     "group": "transit" },
  { "id": 39, "type": "LAND",    "name": "長野",         "group": "chubu",          "price": 3400, "rent": [300, 1500, 4500, 12500, 15000, 18000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 40, "type": "LAND",    "name": "山梨",         "group": "chubu",          "price": 3400, "rent": [300, 1500, 4500, 12500, 15000, 18000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 41, "type": "TAX",     "name": "観光税",       "group": null, "amount": 600 },
  { "id": 42, "type": "LAND",    "name": "神奈川",       "group": "kanto",          "price": 3600, "rent": [350, 1750, 5000, 14000, 17500, 21000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 43, "type": "LAND",    "name": "千葉",         "group": "kanto",          "price": 3600, "rent": [350, 1750, 5000, 14000, 17500, 21000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 44, "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 45, "type": "LAND",    "name": "埼玉",         "group": "kanto",          "price": 3800, "rent": [400, 2000, 6000, 14000, 17500, 21000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 46, "type": "LAND",    "name": "東京",         "group": "kanto",          "price": 4000, "rent": [500, 2000, 6000, 14000, 17500, 21000], "houseCost": 2000, "hotelCost": 2000 },
  { "id": 47, "type": "TRANSIT", "name": "東京駅",       "group": "transit" },
  { "id": 48, "type": "LAND",    "name": "茨城",         "group": "kanto",          "price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 49, "type": "LAND",    "name": "栃木",         "group": "kanto",          "price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 50, "type": "LAND",    "name": "群馬",         "group": "kanto",          "price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1500, "hotelCost": 1500 },
  { "id": 51, "type": "SALARY",  "name": "ふるさと給料日", "group": null, "amount": 800 },
  { "id": 52, "type": "LAND",    "name": "新潟",         "group": "tohoku_hokuriku","price": 2000, "rent": [160, 800, 2200, 6000, 8000, 10000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 53, "type": "LAND",    "name": "福島",         "group": "tohoku_hokuriku","price": 2000, "rent": [160, 800, 2200, 6000, 8000, 10000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 54, "type": "CARD",    "name": "旅カード",     "group": null },
  { "id": 55, "type": "LAND",    "name": "宮城",         "group": "tohoku_hokuriku","price": 2200, "rent": [180, 900, 2500, 7000, 8750, 10500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 56, "type": "LAND",    "name": "岩手",         "group": "tohoku_hokuriku","price": 1800, "rent": [140, 700, 2000, 5500, 7500, 9500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 57, "type": "LAND",    "name": "秋田",         "group": "tohoku_hokuriku","price": 1800, "rent": [140, 700, 2000, 5500, 7500, 9500], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 58, "type": "TRANSIT", "name": "仙台駅",       "group": "transit" },
  { "id": 59, "type": "LAND",    "name": "山形",         "group": "tohoku_hokuriku","price": 1600, "rent": [120, 600, 1800, 5000, 7000, 9000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 60, "type": "LAND",    "name": "青森",         "group": "tohoku_hokuriku","price": 1600, "rent": [120, 600, 1800, 5000, 7000, 9000], "houseCost": 1000, "hotelCost": 1000 },
  { "id": 61, "type": "LAND",    "name": "北海道（函館）","group": "hokkaido",      "price": 1400, "rent": [100, 500, 1500, 4500, 6250, 7500], "houseCost": 500,  "hotelCost": 500  },
  { "id": 62, "type": "LAND",    "name": "北海道（札幌）","group": "hokkaido",      "price": 1600, "rent": [120, 600, 1800, 5000, 7000, 9000], "houseCost": 500,  "hotelCost": 500  },
  { "id": 63, "type": "CARD",    "name": "旅カード",     "group": null }
];

const EMBEDDED_CARDS = [
  { "id": 1,  "title": "温泉地で大人気！",     "text": "温泉街で観光客が急増！臨時収入を得た。",                                                   "type": "money",    "amount": 500 },
  { "id": 2,  "title": "お祭り準備費",          "text": "地元のお祭りの準備費用を負担することになった。",                                           "type": "money",    "amount": -300 },
  { "id": 3,  "title": "新幹線で東京へ！",      "text": "新幹線の臨時便が出た。東京駅（マス47）へ移動する。",                                       "type": "move_to",  "target": 47 },
  { "id": 4,  "title": "大雨で足止め",          "text": "大雨の影響で交通機関が麻痺。1回休みになる。",                                             "type": "skip",     "turns": 1 },
  { "id": 5,  "title": "観光ガイドに感謝",      "text": "旅先で観光ガイドをして謝礼をもらった。",                                                   "type": "money",    "amount": 200 },
  { "id": 6,  "title": "地震保険の請求",        "text": "地震の影響で修繕費が必要になった。",                                                       "type": "money",    "amount": -500 },
  { "id": 7,  "title": "ふるさと納税ボーナス",  "text": "ふるさと納税の返礼品が届いた！臨時収入を得た。",                                           "type": "money",    "amount": 400 },
  { "id": 8,  "title": "台風で建物損傷",        "text": "台風で所有する建物が損傷。修繕費を支払う。",                                               "type": "money",    "amount": -400 },
  { "id": 9,  "title": "博多まで急行！",        "text": "格安航空券を入手。博多駅（マス10）へ移動する。",                                           "type": "move_to",  "target": 10 },
  { "id": 10, "title": "3マス前進",             "text": "旅の運気が上昇！3マス前に進む。",                                                         "type": "move",     "steps": 3 },
  { "id": 11, "title": "2マス後退",             "text": "道に迷ってしまった。2マス戻る。",                                                         "type": "move",     "steps": -2 },
  { "id": 12, "title": "次回通行料免除",        "text": "旅人パスポートを手に入れた！次に他人の土地に止まっても通行料が免除される。",               "type": "toll_free","turns": 1 },
  { "id": 13, "title": "地方創生ボーナス",      "text": "政府の地方創生支援金が入った！",                                                           "type": "money",    "amount": 600 },
  { "id": 14, "title": "インフラ整備費",        "text": "所有地のインフラ整備費を徴収された。",                                                     "type": "money",    "amount": -600 },
  { "id": 15, "title": "花火大会で大盛況",      "text": "地元の花火大会が大盛況！観光収入が入った。",                                               "type": "money",    "amount": 300 },
  { "id": 16, "title": "スタートへ戻る",        "text": "旅の出発点に戻ることになった。スタートへ移動する（通過ボーナスあり）。",                   "type": "move_to",  "target": 0 },
  { "id": 17, "title": "観光地で大渋滞",        "text": "観光地で大渋滞に巻き込まれた。1回休みになる。",                                           "type": "skip",     "turns": 1 },
  { "id": 18, "title": "旅行雑誌に掲載",        "text": "所有する土地が旅行雑誌に掲載された！全プレイヤーから50万円ずつ受け取る。",                 "type": "collect_all","amount": 50 },
  { "id": 19, "title": "道路工事費",            "text": "所有地の道路工事費を請求された。家1棟につき100万円、ホテル1棟につき400万円支払う。",       "type": "repair",   "houseCost": 100, "hotelCost": 400 },
  { "id": 20, "title": "地域活性化ファンド",    "text": "地域活性化ファンドから支援金が入った！",                                                   "type": "money",    "amount": 800 },
  { "id": 21, "title": "新大阪へワープ",        "text": "出張の依頼が来た。新大阪駅（マス24）へ移動する。",                                         "type": "move_to",  "target": 24 },
  { "id": 22, "title": "5マス前進",             "text": "旅の追い風が吹いた！5マス前に進む。",                                                     "type": "move",     "steps": 5 },
  { "id": 23, "title": "豪雨で交通遮断",        "text": "豪雨で交通が遮断された。3マス戻る。",                                                     "type": "move",     "steps": -3 },
  { "id": 24, "title": "世界遺産登録！",        "text": "所有地が世界遺産に登録された！臨時収入が入った。",                                         "type": "money",    "amount": 1000 },
  { "id": 25, "title": "名古屋へ出張",          "text": "名古屋で重要な商談がある。名古屋駅（マス38）へ移動する。",                                 "type": "move_to",  "target": 38 },
  { "id": 26, "title": "ご当地グルメフェス",    "text": "屋台を出して収益を得るか、旅程を優先するか選べる。",                                         "type": "choice", "choices": [
    { "label": "🍜 出店して400万円を得る", "detail": "ご当地グルメが大盛況。", "effect": { "type": "money", "amount": 400 } },
    { "label": "🧳 4マス前進する", "detail": "イベントを早めに切り上げて次の街へ。", "effect": { "type": "move", "steps": 4 } }
  ] },
  { "id": 27, "title": "旅程を変更",            "text": "臨時便が出た。行き先を選んで移動する。",                                                     "type": "choice", "choices": [
    { "label": "🚅 東京駅へ向かう", "detail": "東京駅（マス47）へ移動。", "effect": { "type": "move_to", "target": 47 } },
    { "label": "✈️ 博多駅へ向かう", "detail": "博多駅（マス10）へ移動。", "effect": { "type": "move_to", "target": 10 } }
  ] },
  { "id": 28, "title": "全国観光キャンペーン",  "text": "所有する土地1件につき100万円の観光支援金を受け取る。",                                         "type": "property_income", "amount": 100 },
  { "id": 29, "title": "地域の特産品が話題",    "text": "九州・沖縄の所有地1件につき250万円を受け取る。",                                             "type": "group_income", "group": "kyushu_okinawa", "amount": 250 },
  { "id": 30, "title": "メディアで紹介された",  "text": "次に他プレイヤーがあなたの土地に止まったとき、通行料が2倍になる。",                         "type": "toll_boost", "multiplier": 2, "uses": 1 },
  { "id": 31, "title": "地元へ里帰り",          "text": "所有する通常土地のうち、最も高額な土地へ移動する。所有地がなければ何も起こらない。",       "type": "travel_owned" },
  { "id": 32, "title": "宿泊施設補助金",        "text": "家・ホテル1件につき150万円の補助金を受け取る。",                                         "type": "building_subsidy", "amount": 150 },
  { "id": 33, "title": "地域振興ファンド",      "text": "中部の所有地1件につき200万円を受け取る。",                                               "type": "group_income", "group": "chubu", "amount": 200 },
  { "id": 34, "title": "旅の分岐点",            "text": "休んで収入を得るか、先へ進むか選択する。",                                               "type": "choice", "choices": [
    { "label": "☕ 休憩して300万円を得る", "detail": "旅番組の出演料を受け取る。", "effect": { "type": "money", "amount": 300 } },
    { "label": "🗺️ 3マス前進する", "detail": "休まず次の目的地へ向かう。", "effect": { "type": "move", "steps": 3 } }
  ] },
  { "id": 35, "title": "観光インフラ拡充",      "text": "所有する土地1件につき80万円の整備補助金を受け取る。",                                    "type": "property_income", "amount": 80 },
  { "id": 36, "title": "首都圏ビジネス需要",    "text": "関東の所有地1件につき180万円を受け取る。",                                               "type": "group_income", "group": "kanto", "amount": 180 },
  { "id": 37, "title": "旅人パスポート更新",    "text": "次の2回、他プレイヤーの土地の通行料が免除される。",                                     "type": "toll_free", "turns": 2 }
];

// ===== グローバル変数 =====
let CONFIG = null;
let PROPERTIES = null;
let CARDS = null;
let gameState = null;
let cardDeck = [];
const STATS_STORAGE_KEY = 'nihonDaichiGameStatsV1';
const CPU_TURN_DELAY = 480;
const AUDIO_SETTINGS_KEY = 'nihonDaichiGameAudioV1';

// ===== サウンドエンジン（Web Audio API・外部素材不要） =====
const soundState = {
  context: null,
  masterGain: null,
  bgmGain: null,
  muted: false,
  bgmEnabled: true,
  volume: 0.55,
  bgmTimer: null,
  bgmStarted: false,
};

function loadSoundSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUDIO_SETTINGS_KEY) || '{}');
    soundState.muted = Boolean(saved.muted);
    soundState.bgmEnabled = saved.bgmEnabled !== false;
    soundState.volume = typeof saved.volume === 'number' ? Math.max(0, Math.min(1, saved.volume)) : 0.55;
  } catch (error) {
    console.warn('サウンド設定を読み込めませんでした。', error);
  }
}

function saveSoundSettings() {
  try {
    localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify({
      muted: soundState.muted,
      bgmEnabled: soundState.bgmEnabled,
      volume: soundState.volume,
    }));
  } catch (error) {
    console.warn('サウンド設定を保存できませんでした。', error);
  }
}

function getAudioContext() {
  if (soundState.context) return soundState.context;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  const context = new AudioContextClass();
  const masterGain = context.createGain();
  const bgmGain = context.createGain();
  masterGain.gain.value = soundState.muted ? 0 : soundState.volume;
  bgmGain.gain.value = 0.12;
  bgmGain.connect(masterGain);
  masterGain.connect(context.destination);
  soundState.context = context;
  soundState.masterGain = masterGain;
  soundState.bgmGain = bgmGain;
  return context;
}

function activateAudio() {
  const context = getAudioContext();
  if (!context) return false;
  if (context.state === 'suspended') context.resume().catch(() => {});
  applySoundSettings();
  if (soundState.bgmEnabled && !soundState.muted) startBgm();
  return true;
}

function applySoundSettings() {
  const volumePercent = Math.round(soundState.volume * 100);
  if (soundState.masterGain && soundState.context) {
    soundState.masterGain.gain.setTargetAtTime(soundState.muted ? 0 : soundState.volume, soundState.context.currentTime, 0.03);
  }
  if (soundState.bgmGain && soundState.context) {
    soundState.bgmGain.gain.setTargetAtTime(soundState.bgmEnabled && !soundState.muted ? 0.12 : 0, soundState.context.currentTime, 0.05);
  }
  const soundButton = document.getElementById('btn-sound-toggle');
  const bgmButton = document.getElementById('btn-bgm-toggle');
  const volumeInput = document.getElementById('audio-volume');
  const volumeLabel = document.getElementById('audio-volume-label');
  if (soundButton) {
    soundButton.textContent = soundState.muted ? '🔇 ミュート中' : '🔊 音あり';
    soundButton.classList.toggle('is-muted', soundState.muted);
    soundButton.setAttribute('aria-pressed', String(!soundState.muted));
  }
  if (bgmButton) {
    bgmButton.textContent = soundState.bgmEnabled ? '🎵 BGM: ON' : '🎵 BGM: OFF';
    bgmButton.classList.toggle('is-off', !soundState.bgmEnabled);
    bgmButton.setAttribute('aria-pressed', String(soundState.bgmEnabled));
  }
  if (volumeInput) volumeInput.value = String(volumePercent);
  if (volumeLabel) volumeLabel.textContent = `${volumePercent}%`;
}

function setupSoundControls() {
  loadSoundSettings();
  applySoundSettings();
  document.getElementById('btn-sound-toggle').addEventListener('click', () => {
    soundState.muted = !soundState.muted;
    if (soundState.muted) stopBgm();
    else activateAudio();
    applySoundSettings();
    if (!soundState.muted) playSfx('confirm');
    saveSoundSettings();
  });
  document.getElementById('btn-bgm-toggle').addEventListener('click', () => {
    soundState.bgmEnabled = !soundState.bgmEnabled;
    if (soundState.bgmEnabled && !soundState.muted) activateAudio();
    else stopBgm();
    applySoundSettings();
    saveSoundSettings();
  });
  document.getElementById('audio-volume').addEventListener('input', (event) => {
    soundState.volume = Number(event.target.value) / 100;
    applySoundSettings();
    saveSoundSettings();
  });
}

function createTone(frequency, start, duration, options = {}) {
  const context = getAudioContext();
  if (!context || soundState.muted) return;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = options.type || 'sine';
  oscillator.frequency.setValueAtTime(frequency, start);
  if (options.slideTo) oscillator.frequency.exponentialRampToValueAtTime(Math.max(1, options.slideTo), start + duration);
  const peak = options.volume ?? 0.055;
  const attack = Math.min(options.attack ?? 0.015, duration * 0.35);
  const releaseStart = Math.max(start + attack, start + duration - (options.release ?? 0.08));
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), start + attack);
  gain.gain.setValueAtTime(Math.max(0.0002, peak), releaseStart);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(options.destination || soundState.masterGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playSfx(kind) {
  if (soundState.muted || !activateAudio()) return;
  const context = soundState.context;
  const now = context.currentTime + 0.015;
  const tone = (frequency, offset, duration, options = {}) => createTone(frequency, now + offset, duration, options);
  const notes = {
    confirm: () => { tone(660, 0, 0.07, { type: 'sine', volume: 0.035 }); tone(880, 0.075, 0.11, { type: 'sine', volume: 0.04 }); },
    roll: () => { tone(185, 0, 0.08, { type: 'triangle', slideTo: 150, volume: 0.05 }); tone(230, 0.085, 0.08, { type: 'triangle', slideTo: 185, volume: 0.05 }); tone(290, 0.17, 0.11, { type: 'triangle', slideTo: 230, volume: 0.055 }); },
    purchase: () => { tone(523.25, 0, 0.10, { type: 'triangle', volume: 0.055 }); tone(659.25, 0.09, 0.12, { type: 'triangle', volume: 0.055 }); tone(783.99, 0.18, 0.20, { type: 'sine', volume: 0.065 }); },
    rent: () => { tone(370, 0, 0.10, { type: 'sawtooth', slideTo: 300, volume: 0.045 }); tone(294, 0.10, 0.13, { type: 'sawtooth', slideTo: 235, volume: 0.05 }); },
    salary: () => { tone(523.25, 0, 0.10, { type: 'sine', volume: 0.05 }); tone(659.25, 0.09, 0.10, { type: 'sine', volume: 0.05 }); tone(783.99, 0.18, 0.23, { type: 'sine', volume: 0.06 }); },
    card: () => { tone(440, 0, 0.08, { type: 'square', volume: 0.028 }); tone(622.25, 0.08, 0.10, { type: 'square', volume: 0.03 }); tone(880, 0.18, 0.16, { type: 'sine', volume: 0.045 }); },
    tax: () => { tone(260, 0, 0.12, { type: 'triangle', slideTo: 180, volume: 0.055 }); tone(174, 0.13, 0.20, { type: 'sine', volume: 0.055 }); },
    passStart: () => { tone(587.33, 0, 0.10, { type: 'sine', volume: 0.05 }); tone(739.99, 0.10, 0.12, { type: 'sine', volume: 0.055 }); tone(987.77, 0.21, 0.24, { type: 'sine', volume: 0.06 }); },
    build: () => { tone(392, 0, 0.08, { type: 'square', volume: 0.03 }); tone(493.88, 0.09, 0.10, { type: 'square', volume: 0.03 }); },
    bankrupt: () => { tone(247, 0, 0.16, { type: 'sawtooth', slideTo: 160, volume: 0.05 }); tone(147, 0.15, 0.30, { type: 'sine', volume: 0.055 }); },
    victory: () => { tone(523.25, 0, 0.12, { type: 'triangle', volume: 0.06 }); tone(659.25, 0.12, 0.12, { type: 'triangle', volume: 0.06 }); tone(783.99, 0.24, 0.14, { type: 'triangle', volume: 0.065 }); tone(1046.5, 0.38, 0.45, { type: 'sine', volume: 0.075 }); },
  };
  (notes[kind] || notes.confirm)();
}

function scheduleBgmCycle() {
  const context = getAudioContext();
  if (!context || soundState.muted || !soundState.bgmEnabled) return;
  const beat = 60 / 108;
  const bar = beat * 4;
  const start = context.currentTime + 0.06;
  const chords = [
    [261.63, 329.63, 392.0],
    [293.66, 369.99, 440.0],
    [329.63, 392.0, 493.88],
    [246.94, 311.13, 392.0],
  ];
  const melody = [659.25, 783.99, 880, 783.99, 739.99, 659.25, 587.33, 659.25];
  chords.forEach((chord, barIndex) => {
    const barStart = start + barIndex * bar;
    chord.forEach((note, chordIndex) => createTone(note, barStart, bar * 0.92, {
      type: chordIndex === 0 ? 'triangle' : 'sine',
      volume: chordIndex === 0 ? 0.016 : 0.010,
      attack: 0.03,
      release: 0.22,
      destination: soundState.bgmGain,
    }));
    createTone(chord[0] / 2, barStart, bar * 0.55, { type: 'sine', volume: 0.020, attack: 0.015, release: 0.14, destination: soundState.bgmGain });
    createTone(melody[barIndex * 2], barStart + beat, beat * 0.38, { type: 'triangle', volume: 0.028, attack: 0.01, release: 0.06, destination: soundState.bgmGain });
    createTone(melody[barIndex * 2 + 1], barStart + beat * 2.5, beat * 0.42, { type: 'triangle', volume: 0.028, attack: 0.01, release: 0.07, destination: soundState.bgmGain });
  });
}

function startBgm() {
  if (soundState.bgmStarted || soundState.muted || !soundState.bgmEnabled) return;
  const context = getAudioContext();
  if (!context) return;
  soundState.bgmStarted = true;
  scheduleBgmCycle();
  const cycleMs = (60 / 108) * 4 * 4 * 1000;
  soundState.bgmTimer = window.setInterval(scheduleBgmCycle, cycleMs);
}

function stopBgm() {
  if (soundState.bgmTimer) window.clearInterval(soundState.bgmTimer);
  soundState.bgmTimer = null;
  soundState.bgmStarted = false;
}

// ===== 初期化（fetch不要・即時ロード） =====
document.addEventListener('DOMContentLoaded', () => {
  CONFIG = EMBEDDED_CONFIG;
  PROPERTIES = EMBEDDED_PROPERTIES;
  CARDS = EMBEDDED_CARDS;
  setupSoundControls();
  initTitleScreen();
});

function initTitleScreen() {
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const count = parseInt(btn.dataset.count);
      for (let i = 0; i < 4; i++) {
        const row = document.getElementById(`prow-${i}`);
        if (row) row.classList.toggle('hidden', i >= count);
      }
    });
  });

  document.querySelectorAll('.turn-limit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.turn-limit-btn').forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      const limit = Number(btn.dataset.limit);
      document.getElementById('turn-limit-help').textContent = limit > 0
        ? `${limit}ターン終了時に総資産が最も多いプレイヤーが勝者です。`
        : '無制限モードでは、最後まで破産せずに残ったプレイヤーが勝者です。';
    });
  });

  document.getElementById('btn-start').addEventListener('click', startGame);
  document.getElementById('btn-restart').addEventListener('click', () => showScreen('title'));
  document.getElementById('btn-open-ranking').addEventListener('click', openRankingModal);
  document.getElementById('btn-ranking-close').addEventListener('click', () => closeModal('modal-ranking'));
  document.getElementById('btn-ranking-clear').addEventListener('click', clearLocalStats);
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  if (name === 'title') {
    document.getElementById('screen-title').classList.add('active');
  } else if (name === 'game') {
    document.getElementById('screen-game').classList.add('active');
  } else if (name === 'result') {
    document.getElementById('screen-result').classList.add('active');
  }
}

// ===== ゲーム開始 =====
function startGame() {
  const countBtn = document.querySelector('.count-btn.active');
  const playerCount = parseInt(countBtn.dataset.count);
  const turnLimitBtn = document.querySelector('.turn-limit-btn.active');
  const turnLimit = Number(turnLimitBtn?.dataset.limit ?? 50);

  const players = [];
  for (let i = 0; i < playerCount; i++) {
    const nameInput = document.getElementById(`pname-${i}`);
    const isCPU = document.getElementById(`ptype-${i}`)?.value === 'cpu';
    const name = nameInput.value.trim() || (isCPU ? `CPU ${i + 1}` : `プレイヤー${i + 1}`);
    players.push({
      id: i,
      name,
      color: CONFIG.playerColors[i],
      emoji: CONFIG.playerEmojis[i],
      money: CONFIG.initialMoney,
      position: 0,
      properties: [],
      bankrupt: false,
      skipTurns: 0,
      tollFreeUses: 0,
      tollBoosts: 0,
      isCPU,
    });
  }

  gameState = {
    players,
    currentPlayerIndex: 0,
    turn: 1,
    turnLimit,
    endReason: null,
    phase: 'roll',
    landOwners: {},
    buildings: {},
    mortgagedProperties: {},
    assetManagement: null,
    lastDice: [0, 0],
    currentCellId: 0,
    cpuTimer: null,
    statsRecorded: false,
  };

  shuffleDeck();
  document.getElementById('game-log').innerHTML = '';
  buildBoard();
  renderPlayerList();
  updateTurnInfo();
  updatePropertyList();
  setupGameButtons();
  setPhaseUI();
  showScreen('game');
  activateAudio();
  playSfx('confirm');
  addLog('ゲーム開始！ 各プレイヤーの初期所持金：' + formatMoney(CONFIG.initialMoney), 'system');
  const cpuCount = players.filter(player => player.isCPU).length;
  addLog(`${players.length}人で対戦${cpuCount > 0 ? `（CPU ${cpuCount}人）` : ''}`, 'system');
  addLog(turnLimit > 0
    ? `勝利条件：第${turnLimit}ラウンド終了時に総資産で判定`
    : '勝利条件：無制限・最後まで残ったプレイヤーが勝者', 'system');
}

// ===== カードデッキ =====
function shuffleDeck() {
  cardDeck = [...CARDS].sort(() => Math.random() - 0.5);
}
function drawCard() {
  if (cardDeck.length === 0) shuffleDeck();
  return cardDeck.pop();
}

// ===== ボード構築 =====
function getCellGridPos(index) {
  const side = Math.floor(index / 16);
  const pos = index % 16;
  const maxRow = 15;

  if (side === 0) {
    return { row: maxRow, col: pos };
  } else if (side === 1) {
    return { row: maxRow - pos, col: maxRow };
  } else if (side === 2) {
    return { row: 0, col: maxRow - pos };
  } else {
    return { row: pos, col: 0 };
  }
}

function buildBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  const center = document.createElement('div');
  center.className = 'board-center';
  center.style.gridColumn = '4 / 14';
  center.style.gridRow = '4 / 14';
  center.innerHTML = `
    <div class="board-center-logo">🗾</div>
    <div class="board-center-title">日本列島大地主ゲーム</div>
    <div class="board-center-sub">47都道府県 地名争奪バトル</div>
    <div class="board-center-turn" id="board-turn-display"></div>
  `;
  board.appendChild(center);

  PROPERTIES.forEach((prop, index) => {
    const { row, col } = getCellGridPos(index);
    const cell = createCellElement(prop, index, row, col);
    cell.style.gridColumn = `${col + 1}`;
    cell.style.gridRow = `${row + 1}`;
    board.appendChild(cell);
  });
}

function createCellElement(prop, index, row, col) {
  const cell = document.createElement('div');
  cell.className = `cell type-${prop.type}`;
  cell.id = `cell-${index}`;
  cell.dataset.index = index;

  const isCorner = (row === 0 || row === 15) && (col === 0 || col === 15);
  if (isCorner) cell.classList.add('corner');

  if (col === 15 && !isCorner) cell.classList.add('side-right');
  if (col === 0 && !isCorner) cell.classList.add('side-left');

  if (prop.group && prop.group !== 'transit') {
    const bar = document.createElement('div');
    bar.className = `cell-group-bar group-${prop.group}`;
    cell.appendChild(bar);
  }

  const overlay = document.createElement('div');
  overlay.className = 'cell-owner-overlay';
  overlay.id = `overlay-${index}`;
  cell.appendChild(overlay);

  const emoji = document.createElement('div');
  emoji.className = 'cell-emoji';
  emoji.textContent = getCellEmoji(prop.type);
  cell.appendChild(emoji);

  const name = document.createElement('div');
  name.className = 'cell-name';
  name.textContent = prop.name;
  cell.appendChild(name);

  if (prop.type === 'LAND') {
    const price = document.createElement('div');
    price.className = 'cell-price';
    price.textContent = `¥${prop.price}`;
    cell.appendChild(price);
  } else if (prop.type === 'TAX' || prop.type === 'SALARY') {
    const amount = document.createElement('div');
    amount.className = `cell-rent-info ${prop.type === 'SALARY' ? 'salary-amount' : ''}`;
    amount.textContent = `${prop.type === 'SALARY' ? '+' : '-'}¥${prop.amount}`;
    cell.appendChild(amount);
  }

  const buildings = document.createElement('div');
  buildings.className = 'cell-buildings';
  buildings.id = `buildings-${index}`;
  cell.appendChild(buildings);

  const tokens = document.createElement('div');
  tokens.className = 'cell-tokens';
  tokens.id = `tokens-${index}`;
  cell.appendChild(tokens);

  cell.addEventListener('click', () => showCellInfo(index));

  return cell;
}

function getCellEmoji(type) {
  const map = { START: '🟢', LAND: '🏙️', CARD: '🎴', TAX: '🧾', SALARY: '💴', REST: '😌', TRANSIT: '🚅' };
  return map[type] || '❓';
}

// ===== コマ描画 =====
function renderTokens() {
  document.querySelectorAll('.cell-tokens').forEach(t => t.innerHTML = '');
  document.querySelectorAll('.current-location-tag').forEach(tag => tag.remove());
  gameState.players.forEach((player, playerIndex) => {
    if (player.bankrupt) return;
    const tokensEl = document.getElementById(`tokens-${player.position}`);
    if (!tokensEl) return;
    const isCurrent = playerIndex === gameState.currentPlayerIndex;
    const token = document.createElement('div');
    token.className = `token${isCurrent ? ' current-token' : ''}`;
    token.style.background = player.color;
    token.textContent = player.emoji;
    token.title = `${player.name}${isCurrent ? '（現在の手番）' : ''}`;
    tokensEl.appendChild(token);

    if (isCurrent) {
      const tag = document.createElement('div');
      tag.className = 'current-location-tag';
      tag.textContent = '▼ 現在地';
      tokensEl.parentElement.appendChild(tag);
    }
  });
}

// ===== 建物描画 =====
function renderBuildings(propIndex) {
  const el = document.getElementById(`buildings-${propIndex}`);
  if (!el) return;
  el.innerHTML = '';
  const b = gameState.buildings[propIndex];
  if (!b) return;
  if (b.hotel) {
    const h = document.createElement('span');
    h.className = 'hotel-icon';
    h.textContent = '🏨';
    el.appendChild(h);
  } else {
    for (let i = 0; i < b.houses; i++) {
      const h = document.createElement('span');
      h.className = 'house-icon';
      h.textContent = '🏠';
      el.appendChild(h);
    }
  }
}

// ===== 所有者オーバーレイ更新 =====
function updateCellOwner(propIndex) {
  const overlay = document.getElementById(`overlay-${propIndex}`);
  if (!overlay) return;
  const ownerIdx = gameState.landOwners[propIndex];
  if (ownerIdx !== undefined) {
    overlay.style.background = gameState.players[ownerIdx].color;
  } else {
    overlay.style.background = 'transparent';
  }
  const cell = document.getElementById(`cell-${propIndex}`);
  if (cell) cell.classList.toggle('is-mortgaged', isMortgaged(propIndex));
}

// ===== プレイヤーリスト描画 =====
function renderPlayerList() {
  const list = document.getElementById('player-list');
  list.innerHTML = '';
  gameState.players.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = `player-card${p.bankrupt ? ' bankrupt' : ''}${i === gameState.currentPlayerIndex ? ' active' : ''}`;
    card.id = `player-card-${i}`;
    const totalAssets = calcTotalAssets(i);
    card.innerHTML = `
      <div class="player-card-header">
        <div class="player-dot" style="background:${p.color}"></div>
        <div class="player-name">${p.name}${p.isCPU ? '<span class="cpu-badge">CPU</span>' : ''}${p.bankrupt ? ' 💀' : ''}</div>
      </div>
      <div class="player-money">💰 ${formatMoney(p.money)}</div>
      <div class="player-assets">総資産: ${formatMoney(totalAssets)}</div>
    `;
    list.appendChild(card);
  });
  renderTokens();
}

function updateTurnInfo() {
  const p = getCurrentPlayer();
  const roundLabel = gameState.turnLimit > 0
    ? `第${gameState.turn}ラウンド / ${gameState.turnLimit}ラウンド`
    : `第${gameState.turn}ラウンド / 無制限`;
  document.getElementById('turn-player-name').textContent = `${p.name}${p.isCPU ? '（CPU）' : ''}のターン`;
  document.getElementById('turn-player-money').textContent = `所持金：${formatMoney(p.money)}`;
  document.getElementById('turn-counter').textContent = roundLabel;

  const boardTurn = document.getElementById('board-turn-display');
  if (boardTurn) boardTurn.textContent = `${p.emoji} ${p.name}${p.isCPU ? '（CPU）' : ''}のターン | ${roundLabel}`;

  document.querySelectorAll('.player-card').forEach((c, i) => {
    c.classList.toggle('active', i === gameState.currentPlayerIndex);
  });
  renderTokens();
}

// ===== ゲームボタン設定 =====
function setupGameButtons() {
  // 再スタート時にイベントが重複しないよう、プロパティ代入で設定する。
  document.getElementById('btn-roll').onclick = onRoll;
  document.getElementById('btn-buy').onclick = onBuy;
  document.getElementById('btn-skip-buy').onclick = onSkipBuy;
  document.getElementById('btn-build').onclick = onBuildOpen;
  document.getElementById('btn-assets').onclick = onAssetsOpen;
  document.getElementById('btn-next').onclick = onNextTurn;
  document.getElementById('btn-card-ok').onclick = onCardOk;
  document.getElementById('btn-modal-buy').onclick = onModalBuy;
  document.getElementById('btn-modal-skip').onclick = onModalSkip;
  document.getElementById('btn-auction-bid').onclick = onAuctionBid;
  document.getElementById('btn-auction-pass').onclick = onAuctionPass;
  document.getElementById('btn-build-close').onclick = () => closeModal('modal-build');
  document.getElementById('btn-assets-close').onclick = onAssetsClose;
  document.getElementById('btn-assets-bankrupt').onclick = onAssetBankrupt;
  document.getElementById('btn-notify-ok').onclick = onNotifyOk;
  document.getElementById('auction-bid-input').onkeydown = (event) => {
    if (event.key === 'Enter') onAuctionBid();
  };
}

// ===== サイコロ =====
function onRoll() {
  if (gameState.phase !== 'roll') return;
  const p = getCurrentPlayer();

  if (p.skipTurns > 0) {
    p.skipTurns--;
    addLog(`${p.name} は1回休みです。`, 'system');
    showNotify('1回休み', `${p.name} は足止めされています。次のターンへ進みます。`, '😴');
    gameState.phase = 'next';
    setPhaseUI();
    return;
  }

  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  gameState.lastDice = [d1, d2];

  const die1 = document.getElementById('die1');
  const die2 = document.getElementById('die2');
  die1.classList.add('rolling');
  die2.classList.add('rolling');
  setTimeout(() => { die1.classList.remove('rolling'); die2.classList.remove('rolling'); }, 300);

  die1.textContent = getDiceFace(d1);
  die2.textContent = getDiceFace(d2);
  document.getElementById('dice-total').textContent = `${d1} + ${d2} = ${d1 + d2}`;

  addLog(`${p.name} がサイコロを振った → ${d1}+${d2}=${d1+d2}`, 'system');
  playSfx('roll');
  movePlayer(gameState.currentPlayerIndex, d1 + d2);
}

function getDiceFace(n) {
  return ['⚀','⚁','⚂','⚃','⚄','⚅'][n - 1];
}

// ===== CPU対戦 =====
function scheduleCPUAction() {
  if (!gameState) return;
  if (gameState.cpuTimer) clearTimeout(gameState.cpuTimer);
  const actingIndex = gameState.phase === 'auction'
    ? gameState.auction?.currentBidderIndex
    : gameState.currentPlayerIndex;
  const player = gameState.players[actingIndex];
  if (!player?.isCPU || player.bankrupt) return;

  gameState.cpuTimer = setTimeout(() => {
    gameState.cpuTimer = null;
    runCPUAction();
  }, CPU_TURN_DELAY);
}

function shouldCPUBuy(player, prop) {
  const reserve = Math.max(1500, Math.ceil(prop.price * 0.45));
  const groupMembers = PROPERTIES.filter(item => item.type === 'LAND' && item.group === prop.group);
  const groupProgress = groupMembers.filter(item => player.properties.includes(PROPERTIES.indexOf(item))).length;
  const nearMonopoly = groupMembers.length > 0 && groupProgress >= groupMembers.length - 1;
  return player.money >= prop.price && (player.money - prop.price >= reserve || nearMonopoly);
}

function getCPUMaxBid(player, prop) {
  const reserve = Math.max(1200, Math.ceil(prop.price * 0.35));
  const budget = Math.max(0, player.money - reserve);
  const valueCap = Math.ceil((prop.price * 0.72) / 100) * 100;
  return Math.min(budget - (budget % 100), valueCap);
}

function chooseCPUCardChoice(card, playerIndex) {
  const player = gameState.players[playerIndex];
  const scored = card.choices.map((choice, index) => {
    const effect = choice.effect || {};
    let score = 0;
    if (effect.type === 'money') score = effect.amount;
    if (effect.type === 'move') score = 260 + Math.max(0, effect.steps || 0) * 45;
    if (effect.type === 'move_to') score = 340;
    if (player.money < 1500 && effect.type === 'money') score += 500;
    return { index, score };
  });
  return scored.sort((a, b) => b.score - a.score)[0]?.index ?? 0;
}

function cpuBuildOne() {
  const player = getCurrentPlayer();
  const candidates = getBuildableProperties()
    .filter(propIndex => {
      const prop = PROPERTIES[propIndex];
      const building = gameState.buildings[propIndex] || { houses: 0, hotel: false };
      const cost = building.houses >= 4 ? prop.hotelCost : prop.houseCost;
      return player.money - cost >= Math.max(1800, Math.ceil(prop.price * 0.4));
    })
    .sort((a, b) => PROPERTIES[a].price - PROPERTIES[b].price);
  const propIndex = candidates[0];
  if (propIndex === undefined) return false;

  const prop = PROPERTIES[propIndex];
  const building = gameState.buildings[propIndex] || { houses: 0, hotel: false };
  if (building.houses >= 4) {
    player.money -= prop.hotelCost;
    building.houses = 0;
    building.hotel = true;
    playSfx('build');
    addLog(`${player.name}（CPU）が ${prop.name} にホテルを建設。`, 'build');
  } else {
    player.money -= prop.houseCost;
    building.houses++;
    playSfx('build');
    addLog(`${player.name}（CPU）が ${prop.name} に家を建設（${building.houses}棟目）。`, 'build');
  }
  gameState.buildings[propIndex] = building;
  renderBuildings(propIndex);
  renderPlayerList();
  updatePropertyList();
  return true;
}

function runCPUAssetAction() {
  const management = gameState.assetManagement;
  const player = management ? gameState.players[management.playerIndex] : null;
  if (!management || !player?.isCPU) return;

  if (player.money >= CONFIG.bankruptcyThreshold) {
    onAssetsClose();
    return;
  }

  const withBuildings = player.properties.find(propIndex => {
    const building = gameState.buildings[propIndex];
    return building?.hotel || building?.houses > 0;
  });
  if (withBuildings !== undefined) {
    sellBuilding(withBuildings);
    scheduleCPUAction();
    return;
  }

  const mortgageCandidate = player.properties
    .filter(propIndex => !isMortgaged(propIndex))
    .sort((a, b) => getMortgageValue(PROPERTIES[b]) - getMortgageValue(PROPERTIES[a]))[0];
  if (mortgageCandidate !== undefined) {
    mortgageProperty(mortgageCandidate);
    scheduleCPUAction();
    return;
  }

  const saleCandidate = player.properties
    .sort((a, b) => getSaleValue(PROPERTIES[b], b) - getSaleValue(PROPERTIES[a], a))[0];
  if (saleCandidate !== undefined) {
    sellProperty(saleCandidate);
    scheduleCPUAction();
    return;
  }

  onAssetBankrupt();
}

function runCPUAction() {
  if (!gameState) return;
  const actingIndex = gameState.phase === 'auction'
    ? gameState.auction?.currentBidderIndex
    : gameState.currentPlayerIndex;
  const player = gameState.players[actingIndex];
  if (!player?.isCPU || player.bankrupt) return;
  closeModal('modal-notify');

  switch (gameState.phase) {
    case 'roll':
      onRoll();
      break;
    case 'buy': {
      const prop = PROPERTIES[player.position];
      closeModal('modal-buy');
      if (shouldCPUBuy(player, prop)) onBuy();
      else onSkipBuy();
      break;
    }
    case 'card': {
      const card = gameState.pendingCard;
      closeModal('modal-card');
      if (card?.type === 'choice') onCardChoice(chooseCPUCardChoice(card, gameState.pendingCardPlayer));
      else onCardOk();
      break;
    }
    case 'auction': {
      const auction = gameState.auction;
      if (!auction || auction.currentBidderIndex !== gameState.currentPlayerIndex) return;
      const prop = PROPERTIES[auction.propertyIndex];
      const minimum = getMinimumAuctionBid(auction);
      const maxBid = getCPUMaxBid(player, prop);
      if (minimum <= maxBid) {
        document.getElementById('auction-bid-input').value = minimum;
        onAuctionBid();
      } else {
        onAuctionPass();
      }
      break;
    }
    case 'assets':
      runCPUAssetAction();
      break;
    case 'next':
    case 'build':
      cpuBuildOne();
      onNextTurn();
      break;
    default:
      break;
  }
}

// ===== 移動 =====
function movePlayer(playerIndex, steps) {
  const p = gameState.players[playerIndex];
  const oldPos = p.position;
  const total = PROPERTIES.length;
  const newPos = (oldPos + steps) % total;

  if (newPos < oldPos || (oldPos + steps) >= total) {
    p.money += CONFIG.startBonus;
    addLog(`${p.name} がスタートを通過！ +${formatMoney(CONFIG.startBonus)}`, 'system');
    playSfx('passStart');
  }

  p.position = newPos;
  gameState.currentCellId = newPos;

  renderTokens();
  updateTurnInfo();
  highlightCell(newPos);
  processCell(playerIndex, newPos);
}

function highlightCell(index) {
  document.querySelectorAll('.cell.current-cell').forEach(c => c.classList.remove('current-cell'));
  const cell = document.getElementById(`cell-${index}`);
  if (cell) {
    cell.classList.add('current-cell');
    cell.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ===== マス効果 =====
function processCell(playerIndex, cellIndex) {
  const p = gameState.players[playerIndex];
  const prop = PROPERTIES[cellIndex];
  showCellInfo(cellIndex);

  document.getElementById('turn-status').textContent = `${prop.name} に止まりました`;

  switch (prop.type) {
    case 'START':
      addLog(`${p.name} がスタートマスに止まった。`, 'system');
      gameState.phase = 'next';
      setPhaseUI();
      break;
    case 'LAND':
      processLand(playerIndex, cellIndex);
      break;
    case 'CARD':
      processCard(playerIndex);
      break;
    case 'TAX':
      processTax(playerIndex, prop);
      break;
    case 'SALARY':
      processSalary(playerIndex, prop);
      break;
    case 'REST':
      addLog(`${p.name} が${prop.name}で休憩。`, 'system');
      showNotify('休憩', `${prop.name}でひと休み。何も起こりません。`, '😌');
      gameState.phase = 'next';
      setPhaseUI();
      break;
    case 'TRANSIT':
      addLog(`${p.name} が${prop.name}を通過。`, 'system');
      showNotify('交通拠点', `${prop.name}を通過しました。`, '🚅');
      gameState.phase = 'next';
      setPhaseUI();
      break;
    default:
      gameState.phase = 'next';
      setPhaseUI();
  }
}

function processLand(playerIndex, cellIndex) {
  const p = gameState.players[playerIndex];
  const prop = PROPERTIES[cellIndex];
  const ownerIdx = gameState.landOwners[cellIndex];

  if (ownerIdx === undefined) {
    gameState.phase = 'buy';
    setPhaseUI();
    showBuyModal(cellIndex);
  } else if (ownerIdx === playerIndex) {
    addLog(`${p.name} は自分の土地（${prop.name}）に止まった。`, 'system');
    gameState.phase = 'next';
    setPhaseUI();
  } else {
    if (p.tollFreeUses > 0) {
      p.tollFreeUses--;
      addLog(`${p.name} は旅人パスポートで通行料免除！ 残り${p.tollFreeUses}回`, 'system');
      showNotify('通行料免除', `旅人パスポートを使用！通行料が免除されました。\n残り${p.tollFreeUses}回使用できます。`, '🎫');
      gameState.phase = 'next';
      setPhaseUI();
      return;
    }
    const owner = gameState.players[ownerIdx];
    if (isMortgaged(cellIndex)) {
      addLog(`${p.name} は抵当中の${prop.name}に止まった。通行料は発生しない。`, 'asset');
      showNotify('抵当中の土地', `${prop.name}は抵当中のため、通行料は発生しません。`, '🏦');
      gameState.phase = 'next';
      setPhaseUI();
      return;
    }
    const baseRent = calcRent(cellIndex);
    const boosted = owner.tollBoosts > 0;
    const rent = boosted ? baseRent * 2 : baseRent;
    p.money -= rent;
    owner.money += rent;
    playSfx('rent');
    if (boosted) owner.tollBoosts--;
    addLog(`${p.name} が${owner.name}の${prop.name}に止まり、通行料 ${formatMoney(rent)} を支払った。${boosted ? ' メディア紹介効果で2倍！' : ''}`, 'rent');
    renderPlayerList();
    if (checkBankruptcy(playerIndex)) return;
    showNotify(boosted ? '通行料2倍！' : '通行料', `${owner.name}の${prop.name}に止まりました。\n通行料 ${formatMoney(rent)} を支払います。${boosted ? '\nメディア紹介効果が適用されました。' : ''}`, boosted ? '📣' : '💸');
    gameState.phase = 'next';
    setPhaseUI();
  }
}

function processCard(playerIndex) {
  const card = drawCard();
  gameState.pendingCard = card;
  gameState.pendingCardPlayer = playerIndex;
  gameState.phase = 'card';
  setPhaseUI();
  renderCardModal(card);
  openModal('modal-card');
  playSfx('card');
  addLog(`${gameState.players[playerIndex].name} が旅カードを引いた：「${card.title}」`, 'card');
}

function renderCardModal(card) {
  const choiceButtons = document.getElementById('card-choice-buttons');
  const okButton = document.getElementById('btn-card-ok');
  document.getElementById('card-title').textContent = card.title;
  document.getElementById('card-text').textContent = card.text;
  choiceButtons.innerHTML = '';

  if (card.type !== 'choice') {
    choiceButtons.classList.add('hidden');
    okButton.classList.remove('hidden');
    return;
  }

  okButton.classList.add('hidden');
  choiceButtons.classList.remove('hidden');
  card.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'card-choice-btn';
    button.innerHTML = `${choice.label}<small>${choice.detail}</small>`;
    button.onclick = () => onCardChoice(index);
    choiceButtons.appendChild(button);
  });
}

function onCardChoice(choiceIndex) {
  const card = gameState.pendingCard;
  const playerIndex = gameState.pendingCardPlayer;
  const choice = card?.choices?.[choiceIndex];
  if (!choice || playerIndex === undefined) return;

  closeModal('modal-card');
  addLog(`${gameState.players[playerIndex].name} は「${choice.label}」を選択。`, 'card');
  resolveCardEffect(choice.effect, playerIndex);
}

function finishCardTurn() {
  renderPlayerList();
  updateTurnInfo();
  gameState.phase = 'next';
  setPhaseUI();
}

function moveByCard(playerIndex, targetIndex) {
  const player = gameState.players[playerIndex];
  if (targetIndex < player.position) {
    player.money += CONFIG.startBonus;
    addLog(`${player.name} がスタートを通過！ +${formatMoney(CONFIG.startBonus)}`, 'system');
    playSfx('passStart');
  }
  player.position = targetIndex;
  renderTokens();
  highlightCell(targetIndex);
  processCell(playerIndex, targetIndex);
}

function resolveCardEffect(effect, playerIndex) {
  const player = gameState.players[playerIndex];
  if (!effect || !player || player.bankrupt) return;

  switch (effect.type) {
    case 'money':
      player.money += effect.amount;
      addLog(effect.amount >= 0
        ? `${player.name} が ${formatMoney(effect.amount)} を受け取った。`
        : `${player.name} が ${formatMoney(-effect.amount)} を支払った。`, 'card');
      renderPlayerList();
      if (checkBankruptcy(playerIndex)) return;
      break;

    case 'move_to':
      moveByCard(playerIndex, effect.target);
      return;

    case 'move': {
      const nextPosition = ((player.position + effect.steps) % PROPERTIES.length + PROPERTIES.length) % PROPERTIES.length;
      if (effect.steps > 0 && nextPosition < player.position) {
        player.money += CONFIG.startBonus;
        addLog(`${player.name} がスタートを通過！ +${formatMoney(CONFIG.startBonus)}`, 'system');
      }
      player.position = nextPosition;
      renderTokens();
      highlightCell(nextPosition);
      processCell(playerIndex, nextPosition);
      return;
    }

    case 'skip':
      player.skipTurns += effect.turns;
      addLog(`${player.name} が ${effect.turns}回休みになった。`, 'card');
      break;

    case 'toll_free': {
      const uses = effect.turns || 1;
      player.tollFreeUses += uses;
      addLog(`${player.name} が通行料免除を${uses}回分獲得。`, 'card');
      break;
    }

    case 'toll_boost': {
      const uses = effect.uses || 1;
      player.tollBoosts += uses;
      addLog(`${player.name} の次の${uses}回の通行料が${effect.multiplier || 2}倍になる。`, 'card');
      break;
    }

    case 'collect_all':
      gameState.players.forEach((other, index) => {
        if (index !== playerIndex && !other.bankrupt) {
          other.money -= effect.amount;
          player.money += effect.amount;
        }
      });
      addLog(`${player.name} が全プレイヤーから ${formatMoney(effect.amount)} ずつ受け取った。`, 'card');
      renderPlayerList();
      gameState.players.forEach((_, index) => {
        if (index !== playerIndex) checkBankruptcy(index);
      });
      break;

    case 'repair': {
      let total = 0;
      player.properties.forEach(propIndex => {
        const building = gameState.buildings[propIndex];
        if (!building) return;
        total += building.hotel ? effect.hotelCost : building.houses * effect.houseCost;
      });
      player.money -= total;
      addLog(`${player.name} が修繕費 ${formatMoney(total)} を支払った。`, 'card');
      renderPlayerList();
      if (checkBankruptcy(playerIndex)) return;
      break;
    }

    case 'property_income': {
      const income = player.properties.length * effect.amount;
      player.money += income;
      addLog(`${player.name} が所有地${player.properties.length}件分の観光支援金 ${formatMoney(income)} を受け取った。`, 'card');
      break;
    }

    case 'group_income': {
      const groupProperties = player.properties.filter(propIndex => PROPERTIES[propIndex].group === effect.group);
      const income = groupProperties.length * effect.amount;
      const groupName = CONFIG.groups[effect.group]?.name || '対象地域';
      player.money += income;
      addLog(`${player.name} が${groupName}の所有地${groupProperties.length}件分、${formatMoney(income)} を受け取った。`, 'card');
      break;
    }

    case 'building_subsidy': {
      const facilityCount = player.properties.reduce((count, propIndex) => {
        const building = gameState.buildings[propIndex];
        if (!building) return count;
        return count + (building.hotel ? 1 : building.houses);
      }, 0);
      const income = facilityCount * effect.amount;
      player.money += income;
      addLog(`${player.name} が建物${facilityCount}件分の補助金 ${formatMoney(income)} を受け取った。`, 'card');
      break;
    }

    case 'travel_owned': {
      const candidates = player.properties
        .filter(propIndex => !isMortgaged(propIndex))
        .sort((a, b) => PROPERTIES[b].price - PROPERTIES[a].price);
      if (candidates.length === 0) {
        addLog(`${player.name} は移動先となる通常の所有地がないため、その場にとどまった。`, 'card');
        break;
      }
      const target = candidates[0];
      addLog(`${player.name} は最も高額な所有地 ${PROPERTIES[target].name} へ移動。`, 'card');
      moveByCard(playerIndex, target);
      return;
    }

    default:
      addLog(`${player.name} のカード効果を処理できませんでした。`, 'card');
  }

  finishCardTurn();
}

function onCardOk() {
  const card = gameState.pendingCard;
  const playerIndex = gameState.pendingCardPlayer;
  if (!card || playerIndex === undefined) return;
  closeModal('modal-card');
  resolveCardEffect(card, playerIndex);
}

function processSalary(playerIndex, prop) {
  const p = gameState.players[playerIndex];
  p.money += prop.amount;
  playSfx('salary');
  addLog(`${p.name} が${prop.name}で ${formatMoney(prop.amount)} を受け取った！`, 'salary');
  renderPlayerList();
  updateTurnInfo();
  showNotify('給料日！', `${prop.name}に止まりました。\n${formatMoney(prop.amount)} を受け取ります。`, '💴');
  gameState.phase = 'next';
  setPhaseUI();
}

function processTax(playerIndex, prop) {
  const p = gameState.players[playerIndex];
  p.money -= prop.amount;
  playSfx('tax');
  addLog(`${p.name} が${prop.name}マスで ${formatMoney(prop.amount)} を支払った。`, 'tax');
  renderPlayerList();
  if (checkBankruptcy(playerIndex)) return;
  showNotify(prop.name, `${prop.name}マスに止まりました。\n${formatMoney(prop.amount)} を支払います。`, '🧾');
  gameState.phase = 'next';
  setPhaseUI();
}

// ===== 通行料計算 =====
function isMortgaged(propIndex) {
  return Boolean(gameState?.mortgagedProperties?.[propIndex]);
}

function getMortgageValue(prop) {
  return Math.floor(prop.price * 0.5);
}

function getRedeemCost(prop) {
  return Math.ceil((getMortgageValue(prop) * 1.1) / 10) * 10;
}

function getSaleValue(prop, propIndex) {
  const building = gameState.buildings[propIndex];
  const buildingRefund = building
    ? (building.hotel ? Math.floor(prop.hotelCost * 0.5) : building.houses * Math.floor(prop.houseCost * 0.5))
    : 0;
  const landValue = isMortgaged(propIndex) ? 0 : getMortgageValue(prop);
  return landValue + buildingRefund;
}

function calcRent(cellIndex) {
  const prop = PROPERTIES[cellIndex];
  if (!prop.rent || isMortgaged(cellIndex)) return 0;
  const b = gameState.buildings[cellIndex];
  if (!b) return prop.rent[0];
  if (b.hotel) return prop.rent[5];
  return prop.rent[b.houses] || prop.rent[0];
}

// ===== 購入モーダル =====
function showBuyModal(cellIndex) {
  const prop = PROPERTIES[cellIndex];
  const p = getCurrentPlayer();
  document.getElementById('modal-buy-title').textContent = `${prop.name} を購入しますか？`;
  document.getElementById('modal-buy-info').innerHTML = `
    <strong>購入価格：${formatMoney(prop.price)}</strong><br>
    基本通行料：${formatMoney(prop.rent[0])}<br>
    家1棟：${formatMoney(prop.rent[1])} / 家2棟：${formatMoney(prop.rent[2])}<br>
    家3棟：${formatMoney(prop.rent[3])} / 家4棟：${formatMoney(prop.rent[4])}<br>
    ホテル：${formatMoney(prop.rent[5])}<br>
    <br>現在の所持金：${formatMoney(p.money)}
  `;
  const canBuy = p.money >= prop.price;
  document.getElementById('btn-modal-buy').disabled = !canBuy;
  document.getElementById('btn-modal-buy').textContent = canBuy ? '購入する' : '資金不足';
  document.getElementById('btn-modal-skip').textContent = '購入せず競売へ';
  openModal('modal-buy');
}

function onModalBuy() {
  closeModal('modal-buy');
  onBuy();
}
function onModalSkip() {
  closeModal('modal-buy');
  onSkipBuy();
}

function onBuy() {
  const p = getCurrentPlayer();
  const cellIndex = p.position;
  const prop = PROPERTIES[cellIndex];
  if (p.money < prop.price) {
    showNotify('資金不足', `${prop.name}を購入するには ${formatMoney(prop.price)} 必要ですが、所持金が不足しています。`, '💸');
    return;
  }

  p.money -= prop.price;
  playSfx('purchase');
  assignLandToPlayer(gameState.currentPlayerIndex, cellIndex);
  addLog(`${p.name} が ${prop.name} を ${formatMoney(prop.price)} で購入！`, 'buy');
  renderPlayerList();
  updatePropertyList();
  gameState.phase = 'next';
  setPhaseUI();
}

function assignLandToPlayer(playerIndex, cellIndex) {
  const player = gameState.players[playerIndex];
  if (!player.properties.includes(cellIndex)) player.properties.push(cellIndex);
  gameState.landOwners[cellIndex] = playerIndex;
  delete gameState.mortgagedProperties[cellIndex];
  gameState.buildings[cellIndex] = { houses: 0, hotel: false };
  updateCellOwner(cellIndex);
}

function onSkipBuy() {
  const p = getCurrentPlayer();
  const cellIndex = p.position;
  const prop = PROPERTIES[cellIndex];
  addLog(`${p.name} が ${prop.name} の購入を見送った。競売を開始します。`, 'auction');
  startAuction(cellIndex);
}

// ===== 土地競売 =====
function startAuction(cellIndex) {
  const prop = PROPERTIES[cellIndex];
  const activePlayerIndexes = gameState.players
    .map((player, index) => (!player.bankrupt ? index : null))
    .filter(index => index !== null);

  const minBid = Math.ceil((prop.price * 0.25) / 100) * 100;
  gameState.auction = {
    propertyIndex: cellIndex,
    activePlayerIndexes,
    currentBidderIndex: gameState.currentPlayerIndex,
    highestBid: 0,
    highestBidderIndex: null,
    minBid,
    consecutivePasses: 0,
  };
  gameState.phase = 'auction';
  setPhaseUI();
  openModal('modal-auction');
  renderAuction();
}

function getMinimumAuctionBid(auction) {
  return auction.highestBid > 0 ? auction.highestBid + 100 : auction.minBid;
}

function getNextAuctionBidder(currentIndex, skipIndex = null) {
  const active = gameState.auction.activePlayerIndexes;
  if (active.length <= 1) return active[0];
  const startPos = active.indexOf(currentIndex);
  for (let offset = 1; offset <= active.length; offset++) {
    const candidate = active[(startPos + offset) % active.length];
    if (candidate !== skipIndex) return candidate;
  }
  return currentIndex;
}

function renderAuction(message = '') {
  const auction = gameState.auction;
  if (!auction) return;

  const prop = PROPERTIES[auction.propertyIndex];
  const bidder = gameState.players[auction.currentBidderIndex];
  const highestBidder = auction.highestBidderIndex === null ? null : gameState.players[auction.highestBidderIndex];
  const minimum = getMinimumAuctionBid(auction);
  const canBid = bidder.money >= minimum;
  const input = document.getElementById('auction-bid-input');
  const bidButton = document.getElementById('btn-auction-bid');
  const messageEl = document.getElementById('auction-message');

  document.getElementById('auction-property').textContent = `${prop.name}（通常価格：${formatMoney(prop.price)}）`;
  document.getElementById('auction-current-bid').textContent = auction.highestBid > 0 ? formatMoney(auction.highestBid) : `最低 ${formatMoney(auction.minBid)}`;
  document.getElementById('auction-highest-bidder').textContent = highestBidder ? highestBidder.name : '—';
  document.getElementById('auction-current-player').textContent = `${bidder.emoji} ${bidder.name}`;
  document.getElementById('auction-player-money').textContent = `所持金：${formatMoney(bidder.money)}`;

  input.value = '';
  input.min = minimum;
  input.max = bidder.money;
  input.placeholder = canBid ? `最低 ${formatMoney(minimum)}` : '入札可能額が不足しています';
  input.disabled = !canBid;
  bidButton.disabled = !canBid;

  const defaultMessage = canBid
    ? `最低入札額は ${formatMoney(minimum)} です。100万円単位で入力してください。`
    : `所持金が不足しているため入札できません。今回はパスしてください。`;
  messageEl.textContent = message || defaultMessage;
  messageEl.classList.toggle('is-info', !message);
  scheduleCPUAction();
}

function onAuctionBid() {
  const auction = gameState.auction;
  if (!auction) return;

  const bidder = gameState.players[auction.currentBidderIndex];
  const bid = Number(document.getElementById('auction-bid-input').value);
  const minimum = getMinimumAuctionBid(auction);

  if (!Number.isInteger(bid) || bid <= 0 || bid % 100 !== 0) {
    renderAuction('入札額は100万円単位の整数で入力してください。');
    return;
  }
  if (bid < minimum) {
    renderAuction(`現在の入札額より高い、${formatMoney(minimum)} 以上を入力してください。`);
    return;
  }
  if (bid > bidder.money) {
    renderAuction(`所持金を超える金額は入札できません。`);
    return;
  }

  auction.highestBid = bid;
  auction.highestBidderIndex = auction.currentBidderIndex;
  auction.consecutivePasses = 0;
  addLog(`${bidder.name} が ${PROPERTIES[auction.propertyIndex].name} に ${formatMoney(bid)} で入札。`, 'auction');

  if (auction.activePlayerIndexes.length <= 1) {
    finishAuction();
    return;
  }

  auction.currentBidderIndex = getNextAuctionBidder(auction.currentBidderIndex, auction.highestBidderIndex);
  renderAuction();
}

function onAuctionPass() {
  const auction = gameState.auction;
  if (!auction) return;

  const bidder = gameState.players[auction.currentBidderIndex];
  auction.consecutivePasses++;
  addLog(`${bidder.name} が ${PROPERTIES[auction.propertyIndex].name} の競売をパス。`, 'auction');

  const requiredPasses = auction.highestBidderIndex === null
    ? auction.activePlayerIndexes.length
    : auction.activePlayerIndexes.length - 1;

  if (auction.consecutivePasses >= requiredPasses) {
    finishAuction();
    return;
  }

  auction.currentBidderIndex = getNextAuctionBidder(auction.currentBidderIndex, auction.highestBidderIndex);
  renderAuction();
}

function finishAuction() {
  const auction = gameState.auction;
  if (!auction) return;

  const prop = PROPERTIES[auction.propertyIndex];
  const winnerIndex = auction.highestBidderIndex;
  const winningBid = auction.highestBid;
  gameState.auction = null;
  closeModal('modal-auction');

  if (winnerIndex !== null) {
    const winner = gameState.players[winnerIndex];
    winner.money -= winningBid;
    assignLandToPlayer(winnerIndex, auction.propertyIndex);
    addLog(`競売成立！ ${winner.name} が ${prop.name} を ${formatMoney(winningBid)} で落札。`, 'auction');
    renderPlayerList();
    updatePropertyList();
    showCellInfo(auction.propertyIndex);
    showNotify('競売成立', `${winner.name} が ${prop.name} を ${formatMoney(winningBid)} で落札しました。`, '🔔');
  } else {
    addLog(`${prop.name} は入札者がいなかったため、未所有のままです。`, 'auction');
    showNotify('競売終了', `${prop.name} は入札者がいなかったため、未所有のままです。`, '🔔');
  }

  gameState.phase = 'next';
  setPhaseUI();
}


// ===== 建設モーダル =====
function onBuildOpen() {
  const p = getCurrentPlayer();
  const buildList = document.getElementById('build-list');
  buildList.innerHTML = '';

  const buildable = getBuildableProperties();
  if (buildable.length === 0) {
    buildList.innerHTML = '<p style="color:#888;text-align:center;padding:20px">建設可能な土地がありません。<br>同じ地域グループを揃えると建設できます。</p>';
  } else {
    buildable.forEach(propIdx => {
      const prop = PROPERTIES[propIdx];
      const b = gameState.buildings[propIdx] || { houses: 0, hotel: false };
      const item = document.createElement('div');
      item.className = 'build-item';

      const canHouse = !b.hotel && b.houses < 4 && p.money >= prop.houseCost;
      const canHotel = !b.hotel && b.houses >= 4 && p.money >= prop.hotelCost;

      item.innerHTML = `
        <div class="build-item-info">
          <div class="build-item-name">${prop.name}</div>
          <div class="build-item-sub">
            現在: ${b.hotel ? '🏨ホテル' : `🏠×${b.houses}`} |
            家コスト: ${formatMoney(prop.houseCost)} |
            ホテルコスト: ${formatMoney(prop.hotelCost)}
          </div>
        </div>
        <div class="build-item-btns">
          <button class="btn-build-house" data-idx="${propIdx}" ${canHouse ? '' : 'disabled'}>🏠家</button>
          <button class="btn-build-hotel" data-idx="${propIdx}" ${canHotel ? '' : 'disabled'}>🏨ホテル</button>
        </div>
      `;
      buildList.appendChild(item);
    });

    buildList.querySelectorAll('.btn-build-house').forEach(btn => {
      btn.addEventListener('click', () => buildHouse(parseInt(btn.dataset.idx)));
    });
    buildList.querySelectorAll('.btn-build-hotel').forEach(btn => {
      btn.addEventListener('click', () => buildHotel(parseInt(btn.dataset.idx)));
    });
  }

  openModal('modal-build');
}

function getBuildableProperties() {
  const p = getCurrentPlayer();
  const result = [];

  const groupProps = {};
  PROPERTIES.forEach((prop, idx) => {
    if (prop.type === 'LAND' && prop.group) {
      if (!groupProps[prop.group]) groupProps[prop.group] = [];
      groupProps[prop.group].push(idx);
    }
  });

  p.properties.forEach(propIdx => {
    const prop = PROPERTIES[propIdx];
    if (!prop.group || prop.group === 'transit') return;
    const groupMembers = groupProps[prop.group] || [];
    const ownsAll = groupMembers.every(idx => gameState.landOwners[idx] === gameState.currentPlayerIndex && !isMortgaged(idx));
    if (ownsAll) {
      const b = gameState.buildings[propIdx] || { houses: 0, hotel: false };
      if (!b.hotel) result.push(propIdx);
    }
  });

  return result;
}

function buildHouse(propIdx) {
  const p = getCurrentPlayer();
  const prop = PROPERTIES[propIdx];
  if (!gameState.buildings[propIdx]) gameState.buildings[propIdx] = { houses: 0, hotel: false };
  const b = gameState.buildings[propIdx];

  if (isMortgaged(propIdx) || b.hotel || b.houses >= 4 || p.money < prop.houseCost) return;

  p.money -= prop.houseCost;
  b.houses++;
  playSfx('build');
  addLog(`${p.name} が ${prop.name} に家を建設（${b.houses}棟目）。コスト: ${formatMoney(prop.houseCost)}`, 'build');
  renderBuildings(propIdx);
  renderPlayerList();
  updatePropertyList();
  onBuildOpen();
}

function buildHotel(propIdx) {
  const p = getCurrentPlayer();
  const prop = PROPERTIES[propIdx];
  if (!gameState.buildings[propIdx]) gameState.buildings[propIdx] = { houses: 0, hotel: false };
  const b = gameState.buildings[propIdx];

  if (isMortgaged(propIdx) || b.hotel || b.houses < 4 || p.money < prop.hotelCost) return;

  p.money -= prop.hotelCost;
  b.houses = 0;
  b.hotel = true;
  playSfx('build');
  addLog(`${p.name} が ${prop.name} にホテルを建設！コスト: ${formatMoney(prop.hotelCost)}`, 'build');
  renderBuildings(propIdx);
  renderPlayerList();
  updatePropertyList();
  onBuildOpen();
}

// ===== 資産整理（売却・抵当） =====
function getBuildingRefund(prop, propIndex) {
  const building = gameState.buildings[propIndex];
  if (!building) return 0;
  return building.hotel
    ? Math.floor(prop.hotelCost * 0.5)
    : building.houses * Math.floor(prop.houseCost * 0.5);
}

function getManagedPlayerIndex() {
  return gameState.assetManagement?.playerIndex ?? gameState.currentPlayerIndex;
}

function onAssetsOpen() {
  openAssetManager(gameState.currentPlayerIndex, false);
}

function openAssetManager(playerIndex, critical) {
  const player = gameState.players[playerIndex];
  if (!player || player.bankrupt) return;
  gameState.assetManagement = { playerIndex, critical };
  gameState.phase = 'assets';
  setPhaseUI();
  updateTurnInfo();
  renderAssetManager();
  openModal('modal-assets');
}

function onAssetsClose() {
  const management = gameState.assetManagement;
  if (management?.critical) {
    const player = gameState.players[management.playerIndex];
    if (player.money < CONFIG.bankruptcyThreshold) {
      showNotify('支払い不能', '所持金がマイナスです。資産を整理するか、破産を選択してください。', '⚠️');
      return;
    }
  }
  closeModal('modal-assets');
  gameState.assetManagement = null;
  gameState.phase = 'next';
  setPhaseUI();
  updateTurnInfo();
}

function renderAssetManager() {
  const management = gameState.assetManagement;
  if (!management) return;

  const player = gameState.players[management.playerIndex];
  const list = document.getElementById('assets-list');
  const summary = document.getElementById('assets-summary');
  const bankruptBtn = document.getElementById('btn-assets-bankrupt');
  const shortfall = Math.max(0, CONFIG.bankruptcyThreshold - player.money);

  summary.textContent = management.critical
    ? (shortfall > 0
      ? `${player.name}の不足額：${formatMoney(shortfall)}。資産整理で所持金を0万円以上に戻してください。`
      : `${player.name}は支払い可能な状態に回復しました。閉じてターンを続けてください。`)
    : `${player.name}の所持金：${formatMoney(player.money)}。ターン終了前なら任意に資産を整理できます。`;
  bankruptBtn.classList.toggle('hidden', !management.critical || shortfall === 0);
  list.innerHTML = '';

  if (player.properties.length === 0) {
    list.innerHTML = '<p class="assets-empty">整理できる所有地がありません。</p>';
    return;
  }

  player.properties.forEach(propIndex => {
    const prop = PROPERTIES[propIndex];
    const building = gameState.buildings[propIndex] || { houses: 0, hotel: false };
    const mortgaged = isMortgaged(propIndex);
    const mortgageValue = getMortgageValue(prop);
    const redeemCost = getRedeemCost(prop);
    const saleValue = getSaleValue(prop, propIndex);
    const buildingRefund = getBuildingRefund(prop, propIndex);
    const hasBuildings = building.hotel || building.houses > 0;
    const oneBuildingRefund = building.hotel ? Math.floor(prop.hotelCost * 0.5) : Math.floor(prop.houseCost * 0.5);
    const buildingLabel = building.hotel ? 'ホテル×1' : building.houses > 0 ? `家×${building.houses}` : '建物なし';

    const item = document.createElement('div');
    item.className = `asset-item${mortgaged ? ' is-mortgaged' : ''}`;
    item.innerHTML = `
      <div>
        <div class="asset-name-row">
          <span class="asset-name">${prop.name}</span>
          <span class="asset-status${mortgaged ? ' is-mortgaged' : ''}">${mortgaged ? '抵当中' : '通常'}</span>
        </div>
        <div class="asset-detail">
          ${buildingLabel} | ${mortgaged ? `抵当解除：${formatMoney(redeemCost)}` : `抵当：+${formatMoney(mortgageValue)}`}<br>
          土地を売却：+${formatMoney(saleValue)}${hasBuildings ? `（建物返金 ${formatMoney(buildingRefund)} を含む）` : ''}
        </div>
      </div>
      <div class="asset-actions">
        ${hasBuildings ? `<button class="btn-asset-sell-building" data-idx="${propIndex}">${building.hotel ? '🏨 ホテル売却' : '🏠 家を1棟売却'} +${formatMoney(oneBuildingRefund)}</button>` : ''}
        ${mortgaged
          ? `<button class="btn-asset-redeem" data-idx="${propIndex}" ${player.money >= redeemCost ? '' : 'disabled'}>🔓 抵当解除 -${formatMoney(redeemCost)}</button>`
          : `<button class="btn-asset-mortgage" data-idx="${propIndex}" ${hasBuildings ? 'disabled' : ''}>🏦 抵当 +${formatMoney(mortgageValue)}</button>`}
        <button class="btn-asset-sell" data-idx="${propIndex}">🧾 土地売却 +${formatMoney(saleValue)}</button>
      </div>
    `;
    list.appendChild(item);
  });

  list.querySelectorAll('.btn-asset-sell-building').forEach(button => {
    button.onclick = () => sellBuilding(parseInt(button.dataset.idx));
  });
  list.querySelectorAll('.btn-asset-mortgage').forEach(button => {
    button.onclick = () => mortgageProperty(parseInt(button.dataset.idx));
  });
  list.querySelectorAll('.btn-asset-redeem').forEach(button => {
    button.onclick = () => redeemProperty(parseInt(button.dataset.idx));
  });
  list.querySelectorAll('.btn-asset-sell').forEach(button => {
    button.onclick = () => sellProperty(parseInt(button.dataset.idx));
  });
}

function refreshAfterAssetChange(propIndex) {
  if (propIndex !== undefined) {
    updateCellOwner(propIndex);
    renderBuildings(propIndex);
    showCellInfo(propIndex);
  }
  renderPlayerList();
  updatePropertyList();
  updateTurnInfo();
  renderAssetManager();
}

function sellBuilding(propIndex) {
  const playerIndex = getManagedPlayerIndex();
  const player = gameState.players[playerIndex];
  const prop = PROPERTIES[propIndex];
  const building = gameState.buildings[propIndex];
  if (!player.properties.includes(propIndex) || !building || (!building.hotel && building.houses <= 0)) return;

  let refund = 0;
  if (building.hotel) {
    refund = Math.floor(prop.hotelCost * 0.5);
    building.hotel = false;
  } else {
    refund = Math.floor(prop.houseCost * 0.5);
    building.houses--;
  }
  player.money += refund;
  addLog(`${player.name} が ${prop.name} の建物を売却。+${formatMoney(refund)}`, 'asset');
  refreshAfterAssetChange(propIndex);
}

function mortgageProperty(propIndex) {
  const playerIndex = getManagedPlayerIndex();
  const player = gameState.players[playerIndex];
  const prop = PROPERTIES[propIndex];
  const building = gameState.buildings[propIndex];
  const hasBuildings = building?.hotel || building?.houses > 0;
  if (!player.properties.includes(propIndex) || isMortgaged(propIndex) || hasBuildings) return;

  const value = getMortgageValue(prop);
  gameState.mortgagedProperties[propIndex] = true;
  player.money += value;
  addLog(`${player.name} が ${prop.name} を抵当に入れた。+${formatMoney(value)}`, 'asset');
  refreshAfterAssetChange(propIndex);
}

function redeemProperty(propIndex) {
  const playerIndex = getManagedPlayerIndex();
  const player = gameState.players[playerIndex];
  const prop = PROPERTIES[propIndex];
  const cost = getRedeemCost(prop);
  if (!player.properties.includes(propIndex) || !isMortgaged(propIndex) || player.money < cost) return;

  player.money -= cost;
  delete gameState.mortgagedProperties[propIndex];
  addLog(`${player.name} が ${prop.name} の抵当を解除。-${formatMoney(cost)}`, 'asset');
  refreshAfterAssetChange(propIndex);
}

function sellProperty(propIndex) {
  const playerIndex = getManagedPlayerIndex();
  const player = gameState.players[playerIndex];
  const prop = PROPERTIES[propIndex];
  if (!player.properties.includes(propIndex)) return;

  const value = getSaleValue(prop, propIndex);
  player.money += value;
  player.properties = player.properties.filter(index => index !== propIndex);
  delete gameState.landOwners[propIndex];
  delete gameState.mortgagedProperties[propIndex];
  gameState.buildings[propIndex] = { houses: 0, hotel: false };
  addLog(`${player.name} が ${prop.name} を銀行へ売却。+${formatMoney(value)}`, 'asset');
  refreshAfterAssetChange(propIndex);
}

function onAssetBankrupt() {
  const management = gameState.assetManagement;
  const player = management ? gameState.players[management.playerIndex] : null;
  if (!management?.critical || !player || player.money >= CONFIG.bankruptcyThreshold) return;
  closeModal('modal-assets');
  declareBankruptcy(management.playerIndex);
}

// ===== 次のターン =====
function onNextTurn() {
  if (gameState.phase !== 'next' && gameState.phase !== 'build') return;
  advanceTurn();
}

function advanceTurn() {
  let nextIdx = (gameState.currentPlayerIndex + 1) % gameState.players.length;
  let loopCount = 0;
  while (gameState.players[nextIdx].bankrupt) {
    nextIdx = (nextIdx + 1) % gameState.players.length;
    loopCount++;
    if (loopCount >= gameState.players.length) {
      endGame();
      return;
    }
  }

  if (nextIdx === 0 || nextIdx < gameState.currentPlayerIndex) {
    gameState.turn++;
    if (gameState.turnLimit > 0 && gameState.turn > gameState.turnLimit) {
      gameState.endReason = 'turn_limit';
      addLog(`第${gameState.turnLimit}ラウンドが終了。総資産評価で勝敗を決定します。`, 'system');
      endGame('turn_limit');
      return;
    }
  }

  gameState.currentPlayerIndex = nextIdx;
  gameState.phase = 'roll';
  setPhaseUI();
  updateTurnInfo();
  addLog(`--- ${gameState.players[nextIdx].name}${gameState.players[nextIdx].isCPU ? '（CPU）' : ''}のターン ---`, 'system');
}

// ===== フェーズUI =====
function setPhaseUI() {
  const phase = gameState.phase;
  const rollBtn = document.getElementById('btn-roll');
  const buyBtn = document.getElementById('btn-buy');
  const skipBtn = document.getElementById('btn-skip-buy');
  const buildBtn = document.getElementById('btn-build');
  const assetsBtn = document.getElementById('btn-assets');
  const nextBtn = document.getElementById('btn-next');

  rollBtn.disabled = (phase !== 'roll');
  buyBtn.classList.add('hidden');
  skipBtn.classList.add('hidden');
  buildBtn.classList.add('hidden');
  assetsBtn.classList.add('hidden');
  nextBtn.classList.add('hidden');

  const isCPU = getCurrentPlayer()?.isCPU;
  rollBtn.disabled = (phase !== 'roll') || isCPU;

  if (phase === 'next') {
    const player = getCurrentPlayer();
    const buildable = getBuildableProperties();
    if (player.properties.length > 0) assetsBtn.classList.remove('hidden');
    if (buildable.length > 0) {
      buildBtn.classList.remove('hidden');
      nextBtn.textContent = '建設をスキップして次へ →';
    } else {
      nextBtn.textContent = '次のターンへ →';
    }
    nextBtn.classList.remove('hidden');
  } else if (phase === 'build') {
    buildBtn.classList.remove('hidden');
    nextBtn.textContent = '建設をスキップして次へ →';
    nextBtn.classList.remove('hidden');
  }

  if (isCPU) {
    buyBtn.classList.add('hidden');
    skipBtn.classList.add('hidden');
    buildBtn.classList.add('hidden');
    assetsBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
  }

  const statusMap = {
    roll: isCPU ? 'CPUがサイコロを準備しています…' : 'サイコロを振ってください',
    buy: '購入確認中...',
    card: 'カードを確認してください',
    auction: '土地の競売中です',
    assets: '資産整理中です',
    next: 'ターン終了。次へ進んでください',
    build: '建設できます（任意）',
  };
  document.getElementById('turn-status').textContent = statusMap[phase] || '';
  scheduleCPUAction();
}

// ===== 通知モーダル =====
let notifyCallback = null;
function showNotify(title, text, icon = 'ℹ️', callback = null) {
  document.getElementById('notify-icon').textContent = icon;
  document.getElementById('notify-text').innerHTML = text.replace(/\n/g, '<br>');
  notifyCallback = callback;
  openModal('modal-notify');
}
function onNotifyOk() {
  closeModal('modal-notify');
  if (notifyCallback) {
    const cb = notifyCallback;
    notifyCallback = null;
    cb();
  }
}

// ===== モーダル開閉 =====
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// ===== 破産チェック =====
function checkBankruptcy(playerIndex) {
  const player = gameState.players[playerIndex];
  if (!player || player.bankrupt || player.money >= CONFIG.bankruptcyThreshold) return false;

  // 現在手番のプレイヤーには、直ちに破産させず資産整理の機会を与える。
  if (playerIndex === gameState.currentPlayerIndex) {
    openAssetManager(playerIndex, true);
    return true;
  }

  // 手番外プレイヤーの支払い不能は、ゲーム進行を止めないため即時破産とする。
  declareBankruptcy(playerIndex);
  return true;
}

function declareBankruptcy(playerIndex) {
  const player = gameState.players[playerIndex];
  if (!player || player.bankrupt) return;

  player.bankrupt = true;
  playSfx('bankrupt');
  addLog(`${player.name} が破産しました。所有地は銀行へ返却されます。`, 'bankrupt');
  player.properties.forEach(propIndex => {
    delete gameState.landOwners[propIndex];
    delete gameState.mortgagedProperties[propIndex];
    gameState.buildings[propIndex] = { houses: 0, hotel: false };
    updateCellOwner(propIndex);
    renderBuildings(propIndex);
  });
  player.properties = [];
  gameState.assetManagement = null;
  closeModal('modal-assets');

  renderPlayerList();
  updatePropertyList();
  const survivors = gameState.players.filter(candidate => !candidate.bankrupt);
  if (survivors.length <= 1) {
    setTimeout(() => endGame(), 500);
    return;
  }
  gameState.phase = 'next';
  setPhaseUI();
  updateTurnInfo();
}

// ===== 総資産計算 =====
function getAssetBreakdown(playerIndex) {
  const player = gameState.players[playerIndex];
  const breakdown = { cash: player.money, landValue: 0, buildingValue: 0, mortgageDebt: 0, total: player.money };

  player.properties.forEach(propIndex => {
    const prop = PROPERTIES[propIndex];
    breakdown.landValue += prop.price;
    if (isMortgaged(propIndex)) breakdown.mortgageDebt += getMortgageValue(prop);

    const building = gameState.buildings[propIndex];
    if (!building) return;
    breakdown.buildingValue += building.houses * (prop.houseCost || 0);
    if (building.hotel) breakdown.buildingValue += prop.hotelCost || 0;
  });

  breakdown.total = breakdown.cash + breakdown.landValue + breakdown.buildingValue - breakdown.mortgageDebt;
  return breakdown;
}

function calcTotalAssets(playerIndex) {
  return getAssetBreakdown(playerIndex).total;
}

// ===== ローカル戦績・ランキング =====
function getLocalStats() {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === 'object') {
      return { players: parsed.players || {}, matches: Array.isArray(parsed.matches) ? parsed.matches : [] };
    }
  } catch (error) {
    console.warn('戦績データを読み込めませんでした。', error);
  }
  return { players: {}, matches: [] };
}

function saveLocalStats(stats) {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    return true;
  } catch (error) {
    console.warn('戦績データを保存できませんでした。', error);
    return false;
  }
}

function getStatsPlayerKey(player) {
  return `${player.isCPU ? 'cpu' : 'human'}:${player.name}`;
}

function getModeLabel() {
  return gameState.turnLimit > 0 ? `${gameState.turnLimit}ターン` : '無制限';
}

function recordGameStats(ranking, coWinners) {
  if (!gameState || gameState.statsRecorded) return false;
  const stats = getLocalStats();
  const winningKeys = new Set(coWinners.map(getStatsPlayerKey));
  const recordedAt = Date.now();

  ranking.forEach((player, index) => {
    const key = getStatsPlayerKey(player);
    const current = stats.players[key] || {
      name: player.name,
      isCPU: Boolean(player.isCPU),
      games: 0,
      wins: 0,
      totalAssets: 0,
      bestAssets: Number.NEGATIVE_INFINITY,
      lastPlayedAt: recordedAt,
    };
    current.games++;
    if (winningKeys.has(key)) current.wins++;
    current.totalAssets += player.totalAssets;
    current.bestAssets = Math.max(current.bestAssets, player.totalAssets);
    current.lastPlayedAt = recordedAt;
    stats.players[key] = current;
  });

  stats.matches.unshift({
    id: `${recordedAt}-${Math.random().toString(36).slice(2, 8)}`,
    recordedAt,
    mode: getModeLabel(),
    rounds: Math.min(gameState.turn, gameState.turnLimit || gameState.turn),
    winnerNames: coWinners.map(player => player.name),
    participantCount: ranking.length,
  });
  stats.matches = stats.matches.slice(0, 20);
  gameState.statsRecorded = saveLocalStats(stats);
  return gameState.statsRecorded;
}

function openRankingModal() {
  const stats = getLocalStats();
  const entries = Object.values(stats.players)
    .map(entry => ({ ...entry, averageAssets: entry.games > 0 ? Math.round(entry.totalAssets / entry.games) : 0 }))
    .sort((a, b) => (b.wins - a.wins) || (b.averageAssets - a.averageAssets) || (b.games - a.games));
  const totalMatches = stats.matches.length;
  const totalParticipants = entries.length;
  const overview = document.getElementById('stats-overview');
  const ranking = document.getElementById('stats-ranking');
  const recent = document.getElementById('stats-recent');

  overview.innerHTML = `
    <div class="stats-overview-item"><span>対戦記録</span><strong>${totalMatches}戦</strong></div>
    <div class="stats-overview-item"><span>登録プレイヤー</span><strong>${totalParticipants}人</strong></div>
    <div class="stats-overview-item"><span>保存先</span><strong>この端末</strong></div>
  `;

  if (entries.length === 0) {
    ranking.innerHTML = '<p class="stats-empty">まだ戦績がありません。ゲームを最後までプレイすると、ここに記録されます。</p>';
  } else {
    ranking.innerHTML = '<div class="stats-section-title">総合ランキング</div><div class="stats-row is-header"><span>#</span><span>プレイヤー</span><span>勝数</span><span>勝率</span><span>平均資産</span></div>';
    entries.forEach((entry, index) => {
      const winRate = entry.games > 0 ? Math.round((entry.wins / entry.games) * 100) : 0;
      const row = document.createElement('div');
      row.className = 'stats-row';
      row.innerHTML = `<span>${index + 1}</span><span class="stats-name">${entry.name}${entry.isCPU ? '<span class="cpu-badge">CPU</span>' : ''}</span><span>${entry.wins}/${entry.games}</span><span>${winRate}%</span><span>${formatMoney(entry.averageAssets)}</span>`;
      ranking.appendChild(row);
    });
  }

  if (stats.matches.length === 0) {
    recent.innerHTML = '';
  } else {
    recent.innerHTML = '<div class="stats-section-title">最近の対戦</div>';
    stats.matches.slice(0, 5).forEach(match => {
      const item = document.createElement('div');
      item.className = 'stats-recent-item';
      const date = new Date(match.recordedAt).toLocaleDateString('ja-JP');
      item.textContent = `${date} ｜ ${match.mode} ｜ 勝者：${match.winnerNames.join(' / ')} ｜ ${match.participantCount}人対戦`;
      recent.appendChild(item);
    });
  }
  openModal('modal-ranking');
}

function clearLocalStats() {
  if (!window.confirm('このブラウザに保存された戦績をすべて削除しますか？')) return;
  try {
    localStorage.removeItem(STATS_STORAGE_KEY);
  } catch (error) {
    console.warn('戦績データを削除できませんでした。', error);
  }
  openRankingModal();
}

// ===== ゲーム終了 =====
function endGame(reason = gameState.endReason || 'last_standing') {
  if (gameState.cpuTimer) clearTimeout(gameState.cpuTimer);
  gameState.endReason = reason;
  const ranking = gameState.players
    .map((player, index) => ({ ...player, assets: getAssetBreakdown(index), totalAssets: calcTotalAssets(index) }))
    .sort((a, b) => {
      if (a.bankrupt && !b.bankrupt) return 1;
      if (!a.bankrupt && b.bankrupt) return -1;
      return (b.totalAssets - a.totalAssets)
        || (b.assets.cash - a.assets.cash)
        || (b.properties.length - a.properties.length);
    });

  const winner = ranking[0];
  const coWinners = ranking.filter(player => !player.bankrupt
    && player.totalAssets === winner.totalAssets
    && player.assets.cash === winner.assets.cash
    && player.properties.length === winner.properties.length);
  document.getElementById('result-winner').textContent = coWinners.length > 1
    ? `🤝 ${coWinners.map(player => player.name).join(' / ')} の同率優勝！`
    : `🏆 ${winner.name} の勝利！`;

  const statsSaved = recordGameStats(ranking, coWinners);
  document.getElementById('result-stats-note').textContent = statsSaved
    ? 'この対戦結果を、このブラウザのローカル戦績へ保存しました。'
    : '戦績はこのブラウザのローカル保存に対応しています。';

  const isTurnLimit = reason === 'turn_limit';
  document.getElementById('result-sub').textContent = isTurnLimit
    ? `第${gameState.turnLimit}ラウンド終了時点の総資産評価`
    : '最後まで残ったプレイヤーが勝者です。';
  document.getElementById('result-summary').textContent = isTurnLimit
    ? '総資産 = 所持金 + 土地評価額 + 建物評価額 − 抵当額。総資産が同額の場合は、所持金、所有地数の順で順位を決定します。'
    : '破産していないプレイヤーを最優先にし、総資産で最終順位を表示しています。';

  const rankEl = document.getElementById('result-ranking');
  rankEl.innerHTML = '';
  const medals = ['🥇', '🥈', '🥉', '4️⃣'];
  ranking.forEach((player, index) => {
    const item = document.createElement('div');
    item.className = 'result-rank-item';
    const details = player.assets;
    item.innerHTML = `
      <div class="result-rank-num">${medals[index] || (index + 1)}</div>
      <div class="player-dot" style="background:${player.color};width:12px;height:12px;border-radius:50%;flex-shrink:0"></div>
      <div>
        <div class="result-rank-name">${player.name}${player.isCPU ? '<span class="cpu-badge">CPU</span>' : ''}${player.bankrupt ? ' 💀' : ''}</div>
        <div class="result-rank-details">現金 ${formatMoney(details.cash)} / 土地 ${formatMoney(details.landValue)} / 建物 ${formatMoney(details.buildingValue)}${details.mortgageDebt > 0 ? ` / 抵当 -${formatMoney(details.mortgageDebt)}` : ''}</div>
      </div>
      <div class="result-rank-asset-block"><div class="result-rank-money">総資産: ${formatMoney(player.totalAssets)}</div></div>
    `;
    rankEl.appendChild(item);
  });

  showScreen('result');
  playSfx('victory');
}

// ===== 所有地一覧更新 =====
function updatePropertyList() {
  const list = document.getElementById('property-list');
  list.innerHTML = '';

  const hasAny = gameState.players.some(p => p.properties.length > 0);
  if (!hasAny) {
    list.innerHTML = '<p class="placeholder-text">まだ誰も土地を所有していません</p>';
    return;
  }

  gameState.players.forEach(p => {
    if (p.properties.length === 0) return;
    p.properties.forEach(propIdx => {
      const prop = PROPERTIES[propIdx];
      const b = gameState.buildings[propIdx];
      const item = document.createElement('div');
      item.className = 'property-item';
      item.style.borderLeftColor = p.color;
      const bldStr = b ? (b.hotel ? '🏨' : '🏠'.repeat(b.houses)) : '';
      const mortgageStr = isMortgaged(propIdx) ? '<span class="mortgage-badge">🏦抵当中</span>' : '';
      item.innerHTML = `
        <div class="property-item-name">${prop.name} ${bldStr} ${mortgageStr}</div>
        <div class="property-item-sub">${p.name} | ¥${prop.price}</div>
      `;
      list.appendChild(item);
    });
  });
}

// ===== マス情報表示 =====
function showCellInfo(index) {
  const prop = PROPERTIES[index];
  const el = document.getElementById('cell-info');
  const ownerIdx = gameState.landOwners[index];
  const owner = ownerIdx !== undefined ? gameState.players[ownerIdx] : null;
  const b = gameState.buildings[index];

  const typeNames = { START: 'スタート', LAND: '土地', CARD: '旅カード', TAX: '税金', SALARY: '給料日', REST: '休憩', TRANSIT: '交通拠点' };

  if (prop.type === 'SALARY') {
    el.innerHTML = `
      <div class="cell-info-name">${prop.name}</div>
      <div class="cell-info-type">${typeNames[prop.type]}</div>
      <div class="salary-info-box">💴 停止すると <strong>${formatMoney(prop.amount)}</strong> を受け取ります。</div>
    `;
  } else if (prop.type === 'LAND') {
    const rent = calcRent(index);
    const mortgaged = isMortgaged(index);
    const bldStr = b ? (b.hotel ? '🏨ホテル' : b.houses > 0 ? `🏠×${b.houses}` : 'なし') : 'なし';
    el.innerHTML = `
      <div class="cell-info-name">${prop.name}</div>
      <div class="cell-info-type">${typeNames[prop.type]} | ${CONFIG.groups[prop.group]?.name || ''}</div>
      <table class="cell-info-table">
        <tr><td>購入価格</td><td>${formatMoney(prop.price)}</td></tr>
        <tr><td>基本通行料</td><td>${formatMoney(prop.rent[0])}</td></tr>
        <tr><td>家1棟</td><td>${formatMoney(prop.rent[1])}</td></tr>
        <tr><td>家2棟</td><td>${formatMoney(prop.rent[2])}</td></tr>
        <tr><td>家3棟</td><td>${formatMoney(prop.rent[3])}</td></tr>
        <tr><td>家4棟</td><td>${formatMoney(prop.rent[4])}</td></tr>
        <tr><td>ホテル</td><td>${formatMoney(prop.rent[5])}</td></tr>
        <tr><td>家コスト</td><td>${formatMoney(prop.houseCost)}</td></tr>
        <tr><td>ホテルコスト</td><td>${formatMoney(prop.hotelCost)}</td></tr>
      </table>
      <div class="cell-info-owner" style="color:${owner ? owner.color : '#888'}">
        所有者: ${owner ? owner.name : '未所有'}
      </div>
      <div class="cell-info-buildings">建物: ${bldStr}</div>
      <div class="cell-info-buildings">状態: ${mortgaged ? '🏦 抵当中（通行料なし）' : '通常'}</div>
      <div class="cell-info-buildings">現在通行料: ${formatMoney(rent)}</div>
    `;
  } else {
    el.innerHTML = `
      <div class="cell-info-name">${prop.name}</div>
      <div class="cell-info-type">${typeNames[prop.type] || prop.type}</div>
      ${prop.amount ? `<div style="color:#e74c3c;margin-top:8px">税額: ${formatMoney(prop.amount)}</div>` : ''}
    `;
  }
}

// ===== ユーティリティ =====
function getCurrentPlayer() {
  return gameState.players[gameState.currentPlayerIndex];
}

function formatMoney(amount) {
  if (amount === undefined || amount === null) return '0万円';
  return `${amount.toLocaleString()}万円`;
}

function addLog(text, type = 'system') {
  const log = document.getElementById('game-log');
  const entry = document.createElement('div');
  entry.className = `log-entry log-${type}`;
  entry.textContent = text;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}
