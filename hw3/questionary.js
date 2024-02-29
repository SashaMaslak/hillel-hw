const capitals = {
  токіо: "Японії",
  ньюделі: "Індії",
  мехіко: "Мексики",
  каїр: "Єгипту",
  париж: "Франції",
  бангкок: "Таїланду",
  лондон: "Великої Британії",
  берлін: "Німеччини",
  вашингтон: "Сполучених Штатів Америки",
  рим: "Італії",
  мадрид: "Іспанії",
  сеул: "Південної Кореї",
  джакарта: "Індонезії",
  анкара: "Туреччини",
  берн: "Швейцарії",
  брюссель: "Бельгії",
  будапешт: "Угорщини",
  бухарест: "Румунії",
  дакар: "Сенегалу",
  кишинів: "Молдови",
  мінськ: "Білорусі",
  оттава: "Канади",
  найробі: "Кенії",
  осло: "Норвегії",
  пекін: "Китаю",
  амстердам: "Нідерландів",
  варшава: "Польщі",
  вена: "Австрії",
  вільнюс: "Литви",
  браззавіль: "Конго",
  афіни: "Греції",
  белград: "Сербії",
  братислава: "Словаччини",
  дублін: "Ірландії",
  київ: "України",
  копенгаген: "Данії",
  лісабон: "Португалії",
  прага: "Чехії",
  скопє: "Північної Македонії",
  софія: "Болгарії",
  стокгольм: "Швеції",
  таллінн: "Естонії",
  тбілісі: "Грузії",
  тірана: "Албанії",
  асунсьйон: "Парагваю",
  богота: "Колумбії",
  буеносайрес: "Аргентини",
  каракас: "Венесуели",
  лапас: "Болівії",
  ліма: "Перу",
  монтевідео: "Уругваю",
  сантьяго: "Чилі",
  сукурі: "Гайани",
  тегусігальпа: "Гондурасу",
  бразиліа: "Бразилії",
  уланбатор: "Монголії",
  абудабі: "Об'єднаних Арабських Еміратів",
  ашхабад: "Туркменістану",
  багдад: "Іраку",
  баку: "Азербайджану",
  бейрут: "Лівану",
  дакка: "Бангладешу",
  дамаск: "Сирії",
  доха: "Катару",
  ісламабад: "Пакистану",
  кабул: "Афганістану",
  катманду: "Непалу",
  куалалумпур: "Малайзії",
  кувейт: "Кувейту",
  мале: "Мальдів",
  манама: "Бахрейну",
  москва: "Росії",
  ріяд: "Саудівської Аравії",
  сінгапур: "Сінгапуру",
  ташкент: "Узбекистану",
  тегеран: "Ірану",
  канберра: "Австралії",
}

function getMessageAge(cancelMsg) {
  let yearBirthValue = null
  let yearBirth = ""
  const tempMesForCancel = "Шкода, що Ви не захотіли ввести"
  yearBirthValue = prompt(
    "Вкажіть свій рік народження в діапазоні від 1900 до 2023"
  )

  yearBirth = Number(yearBirthValue)

  if (!yearBirthValue) {
    alert(`${cancelMsg} свою дату народження`)
    return "НАЖАЛЬ ваш рік народження не вказано."
  }

  if (isNaN(yearBirth)) {
    alert(
      `Ваше введене значення (${yearBirthValue}), що не є числовим значенням року. Вкажіть свій рік народження в діапазоні від 1900 до 2023`
    )
    return getMessageAge(tempMesForCancel)
  }

  if (yearBirth > 2023 || yearBirth < 1900) {
    if (yearBirth === 0) {
      alert(`${cancelMsg} свою дату народження`)
      return "НАЖАЛЬ ваш рік народження не вказано."
    }
    {
      alert(
        "Ви ввели не реалістичне значення року народження. Введіть свій рік народження в діапазоні від 1900 до 2023"
      )
      return getMessageAge(tempMesForCancel)
    }
  }

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const age = currentYear - yearBirth

  let yearStr
  if (age >= 11 && age <= 14) {
    yearStr = "років"
  } else {
    const lastNumYearBirth = Number(String(age).charAt(age.length - 1))

    switch (lastNumYearBirth) {
      case 1:
        yearStr = "рік"
        break
      case 2:
      case 3:
      case 4:
        yearStr = "роки"
        break
      default:
        yearStr = "років"
    }
  }

  return age
    ? `Вітаю. В цьому році вам виповнюється ${age} ${yearStr}.`
    : "НАЖАЛЬ ваш рік народження не вказано."
}

function getCityName(cancelMsg) {
  let cityValue = null
  let city = ""
  cityValue = prompt("Вкажи місто в якому ти живеш на українській мові.")

  if (cityValue) {
    city = cityValue.toLowerCase().replace(/[^а-яєіїґ]/g, "")
  }

  if (!city) {
    alert(`${cancelMsg} своє місто проживання`)
    return "НАЖАЛЬ ваше місто проживанн не вказано."
  }

  const newStrCity = city.charAt(0).toUpperCase() + city.slice(1)

  return city in capitals
    ? `Ти живеш у столиці ${capitals[city]}.`
    : `Ти живеш у місті ${newStrCity}.`
}

function getFavSport(cancelMsg) {
  let tempMess = null
  let favSport = ""
  tempMess = "Круто! Невже ти хочеш стати"
  const listSports = ["Футбол", "Шахи", "Бокс"]

  const valueFavSport = prompt(
    `Який твій улюблений вид спорту серед перелічених: ${listSports.join(", ")}`
  )

  if (valueFavSport) {
    favSport = valueFavSport.toLowerCase().replace(/[^а-яєіїґ]/g, "")
  }

  if (!favSport) {
    alert(`${cancelMsg} свій улюблений вид спорту на українській мові.`)
    return "НАЖАЛЬ ваш улюбленний вид спорту не вказано."
  }

  if (favSport !== "футбол" && favSport !== "шахи" && favSport !== "бокс") {
    alert(
      `Такого виду спорту не вказано в переліку, але ми поважаємо вашу думку.`
    )
  }

  let champion
  switch (favSport) {
    case "футбол":
      champion = "як Артем Мілевський"
      break
    case "шахи":
      champion = "як Гарі Каспаров"
      break
    case "бокс":
      champion = "як Майк Тайсон"
      break
    default:
      champion = "професійним спортсменом"
  }

  return `${tempMess} ${champion}?`
}

;(function main() {
  const tempMesForCancel = "Шкода, що Ви не захотіли ввести"
  const messageYearBirth = getMessageAge(tempMesForCancel)
  const messageCity = getCityName(tempMesForCancel)
  const favSportMessage = getFavSport(tempMesForCancel)
  return alert(`${messageYearBirth} ${messageCity} ${favSportMessage}`)
})()
