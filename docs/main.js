import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import MoneyService from './money.js';

let countries = ["AFGHANISTAN","ÅLAND ISLANDS","ALBANIA","ALGERIA","AMERICAN SAMOA","ANDORRA","ANGOLA","ANGUILLA", "ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS (THE)","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERMUDA","BHUTAN","BOLIVIA","BONAIRE, SINT EUSTATIUS AND SABA","BOSNIA AND HERZEGOVINA","BOTSWANA","BOUVET ISLAND","BRAZIL","BRITISH INDIAN OCEAN TERRITORY (THE)","BRUNEI DARUSSALAM","BULGARIA","BURKINA FASO","BURUNDI","CABO VERDE","CAMBODIA","CAMEROON","CANADA","CAYMAN ISLANDS (THE)","CENTRAL AFRICAN REPUBLIC (THE)","CHAD","CHILE","CHINA","CHRISTMAS ISLAND","COCOS (KEELING) ISLANDS (THE)","COLOMBIA","COMOROS (THE)","CONGO (THE DEMOCRATIC REPUBLIC OF THE)","CONGO (THE)","COOK ISLANDS (THE)","COSTA RICA","CÔTE D'IVOIRE","CROATIA","CUBA","CURAÇAO","CYPRUS","CZECHIA","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC (THE)","ECUADOR","EGYPT","EL SALVADOR","EQUATORIAL GUINEA","ERITREA","ESTONIA","ESWATINI","ETHIOPIA","EUROPEAN UNION","FALKLAND ISLANDS (THE) [MALVINAS]","FAROE ISLANDS (THE)","FIJI","FINLAND","FRANCE","FRENCH GUIANA","FRENCH POLYNESIA","FRENCH SOUTHERN TERRITORIES (THE)","GABON","GAMBIA (THE)","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUADELOUPE","GUAM","GUATEMALA","GUERNSEY","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HEARD ISLAND AND McDONALD ISLANDS","HOLY SEE (THE)","HONDURAS","HONG KONG","HUNGARY","ICELAND","INDIA","INDONESIA","INTERNATIONAL MONETARY FUND (IMF)","IRAN (ISLAMIC REPUBLIC OF)","IRAQ","IRELAND","ISLE OF MAN","ISRAEL","ITALY","JAMAICA","JAPAN","JERSEY","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)","KOREA (THE REPUBLIC OF)","KUWAIT","KYRGYZSTAN","LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MACAO","NORTH MACEDONIA","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MARSHALL ISLANDS (THE)","MARTINIQUE","MAURITANIA","MAURITIUS","MAYOTTE","MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP","MEXICO","MICRONESIA (FEDERATED STATES OF)","MOLDOVA (THE REPUBLIC OF)","MONACO","MONGOLIA","MONTENEGRO","MONTSERRAT","MOROCCO","MOZAMBIQUE","MYANMAR","NAMIBIA","NAURU","NEPAL","NETHERLANDS (THE)","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NIGER (THE)","NIGERIA","NIUE","NORFOLK ISLAND","NORTHERN MARIANA ISLANDS (THE)","NORWAY","OMAN","PAKISTAN","PALAU","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES (THE)","PITCAIRN","POLAND","PORTUGAL","PUERTO RICO","QATAR","RÉUNION","ROMANIA","RUSSIAN FEDERATION (THE)","RWANDA","SAINT BARTHÉLEMY","SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA","SAINT KITTS AND NEVIS","SAINT LUCIA","SAINT MARTIN (FRENCH PART)","SAINT PIERRE AND MIQUELON","SAINT VINCENT AND THE GRENADINES","SAMOA","SAN MARINO","SAO TOME AND PRINCIPE","SAUDI ARABIA","SENEGAL","SERBIA","SEYCHELLES","SIERRA LEONE","SINGAPORE","SINT MAARTEN (DUTCH PART)","SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS 'SUCRE'","SLOVAKIA","SLOVENIA","SOLOMON ISLANDS","SOMALIA","SOUTH AFRICA","SOUTH SUDAN","SPAIN","SRI LANKA","SUDAN (THE)","SURINAME","SVALBARD AND JAN MAYEN","SWEDEN","SWITZERLAND","SYRIAN ARAB REPUBLIC","TAIWAN (PROVINCE OF CHINA)","TAJIKISTAN","TANZANIA, UNITED REPUBLIC OF","THAILAND","TIMOR-LESTE","TOGO","TOKELAU","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN","TURKS AND CAICOS ISLANDS (THE)","TUVALU","UGANDA","UKRAINE","UNITED ARAB EMIRATES (THE)","UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)","UNITED STATES OF AMERICA (THE)","URUGUAY","UZBEKISTAN","VANUATU","VENEZUELA (BOLIVARIAN REPUBLIC OF)","VIETNAM","VIRGIN ISLANDS","WALLIS AND FUTUNA","WESTERN SAHARA","YEMEN","ZAMBIA","ZIMBABWE"];
let countryCodes = ["AFN","EUR","ALL","DZD","USD","EUR","AOA","XCD","XCD","ARS","AMD","AWG","AUD","EUR","AZN","BSD","BHD","BDT","BBD","BYN","EUR","BZD","XOF","BMD","BTN","BOB","USD","BAM","BWP","NOK","BRL","USD","BND","BGN","XOF","BIF","CVE","KHR","XAF","CAD","KYD","XAF","XAF","CLP","CNY","AUD","AUD","COP","KMF","CDF","XAF","NZD","CRC","XOF","HRK","CUP","ANG","EUR","CZK","DKK","DJF","XCD","DOP","USD","EGP","SVC","XAF","ERN","EUR","SZL","ETB","EUR","FKP","DKK","FJD","EUR","EUR","EUR","XPF","EUR","XAF","GMD","GEL","EUR","GHS","GIP","EUR","DKK","XCD","EUR","USD","GTQ","GBP","GNF","XOF","GYD","HTG","AUD","EUR","HNL","HKD","HUF","ISK","INR","IDR","XDR","IRR","IQD","EUR","GBP","ILS","EUR","JMD","JPY","GBP","JOD","KZT","KES","AUD","KPW","KRW","KWD","KGS","LAK","EUR","LBP","LSL","LRD","LYD","CHF","EUR","EUR","MOP","MKD","MGA","MWK","MYR","MVR","XOF","EUR","USD","EUR","MRU","MUR","EUR","XUA","MXN","USD","MDL","EUR","MNT","EUR","XCD","MAD","MZN","MMK","NAD","AUD","NPR","EUR","XPF","NZD","NIO","XOF","NGN","NZD","AUD","USD","NOK","OMR","PKR","USD","PAB","PGK","PYG","PEN","PHP","NZD","PLN","EUR","USD","QAR","EUR","RON","RUB","RWF","EUR","SHP","XCD","XCD","EUR","EUR","XCD","WST","EUR","STN","SAR","XOF","RSD","SCR","SLL","SGD","ANG","XSU","EUR","EUR","SBD","SOS","ZAR","SSP","EUR","LKR","SDG","SRD","NOK","SEK","CHF","SYP","TWD","TJS","TZS","THB","USD","XOF","NZD","TOP","TTD","TND","TRY","TMT","USD","AUD","UGX","UAH","AED","GBP","USD","UYU","UZS","VUV","VES","VND","USD","XPF","MAD","YER","ZMW","ZWL"];
for (let i=0;i<countries.length;i++){
  $('#country').append(`<option value="${countryCodes[i]}"> ${countries[i]}</option>`);
}
function getConversion(response) {
  $('#output').append(`<p>`);
  return;
}
$(document).ready(function() {
  $('#button').click(function(event) {
    event.preventDefault();
    const countryCode = $("#country").val();
    let val = MoneyService.getRate(countryCode)
      .then(function(response){
        return response;
      });
    val.then(function(response){
      asyncFunc(response);
    });
    function asyncFunc(response) {
      try {
        const isMoney = getConversion(response);
        if (isMoney instanceof Error) {
          $('.output').append(`<p>"Error"</p>`);
          throw Error("call not working");
        }
      } catch(error) {
        console.error(`${error.message}`);
      }
    }
  });
});





