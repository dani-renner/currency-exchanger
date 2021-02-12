import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
let countries = ["AFGHANISTAN","ÅLAND ISLANDS","ALBANIA","ALGERIA","AMERICAN SAMOA","ANDORRA","ANGOLA","ANGUILLA","ANTARCTICA","ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS (THE)","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERMUDA","BHUTAN","BHUTAN","BOLIVIA (PLURINATIONAL STATE OF)","BOLIVIA (PLURINATIONAL STATE OF)","BONAIRE, SINT EUSTATIUS AND SABA","BOSNIA AND HERZEGOVINA","BOTSWANA","BOUVET ISLAND","BRAZIL","BRITISH INDIAN OCEAN TERRITORY (THE)","BRUNEI DARUSSALAM","BULGARIA","BURKINA FASO","BURUNDI","CABO VERDE","CAMBODIA","CAMEROON","CANADA","CAYMAN ISLANDS (THE)","CENTRAL AFRICAN REPUBLIC (THE)","CHAD","CHILE","CHILE","CHINA","CHRISTMAS ISLAND","COCOS (KEELING) ISLANDS (THE)","COLOMBIA","COMOROS (THE)","CONGO (THE DEMOCRATIC REPUBLIC OF THE)","CONGO (THE)","COOK ISLANDS (THE)","COSTA RICA","CÔTE D'IVOIRE","CROATIA","CUBA","CURAÇAO","CYPRUS","CZECHIA","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC (THE)","ECUADOR","EGYPT","EL SALVADOR","EQUATORIAL GUINEA","ERITREA","ESTONIA","ESWATINI","ETHIOPIA","EUROPEAN UNION","FALKLAND ISLANDS (THE) [MALVINAS]","FAROE ISLANDS (THE)","FIJI","FINLAND","FRANCE","FRENCH GUIANA","FRENCH POLYNESIA","FRENCH SOUTHERN TERRITORIES (THE)","GABON","GAMBIA (THE)","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUADELOUPE","GUAM","GUATEMALA","GUERNSEY","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HEARD ISLAND AND McDONALD ISLANDS","HOLY SEE (THE)","HONDURAS","HONG KONG","HUNGARY","ICELAND","INDIA","INDONESIA","INTERNATIONAL MONETARY FUND (IMF)","IRAN (ISLAMIC REPUBLIC OF)","IRAQ","IRELAND","ISLE OF MAN","ISRAEL","ITALY","JAMAICA","JAPAN","JERSEY","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)","KOREA (THE REPUBLIC OF)","KUWAIT","KYRGYZSTAN","LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MACAO","NORTH MACEDONIA","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MARSHALL ISLANDS (THE)","MARTINIQUE","MAURITANIA","MAURITIUS","MAYOTTE","MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP","MEXICO","MEXICO","MICRONESIA (FEDERATED STATES OF)","MOLDOVA (THE REPUBLIC OF)","MONACO","MONGOLIA","MONTENEGRO","MONTSERRAT","MOROCCO","MOZAMBIQUE","MYANMAR","NAMIBIA","NAURU","NEPAL","NETHERLANDS (THE)","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NIGER (THE)","NIGERIA","NIUE","NORFOLK ISLAND","NORTHERN MARIANA ISLANDS (THE)","NORWAY","OMAN","PAKISTAN","PALAU","PALESTINE, STATE OF","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES (THE)","PITCAIRN","POLAND","PORTUGAL","PUERTO RICO","QATAR","RÉUNION","ROMANIA","RUSSIAN FEDERATION (THE)","RWANDA","SAINT BARTHÉLEMY","SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA","SAINT KITTS AND NEVIS","SAINT LUCIA","SAINT MARTIN (FRENCH PART)","SAINT PIERRE AND MIQUELON","SAINT VINCENT AND THE GRENADINES","SAMOA","SAN MARINO","SAO TOME AND PRINCIPE","SAUDI ARABIA","SENEGAL","SERBIA","SEYCHELLES","SIERRA LEONE","SINGAPORE","SINT MAARTEN (DUTCH PART)","SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS 'SUCRE'","SLOVAKIA","SLOVENIA","SOLOMON ISLANDS","SOMALIA","SOUTH AFRICA","SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","SOUTH SUDAN","SPAIN","SRI LANKA","SUDAN (THE)","SURINAME","SVALBARD AND JAN MAYEN","SWEDEN","SWITZERLAND","SYRIAN ARAB REPUBLIC","TAIWAN (PROVINCE OF CHINA)","TAJIKISTAN","TANZANIA, UNITED REPUBLIC OF","THAILAND","TIMOR-LESTE","TOGO","TOKELAU","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN","TURKS AND CAICOS ISLANDS (THE)","TUVALU","UGANDA","UKRAINE","UNITED ARAB EMIRATES (THE)","UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)","UNITED STATES MINOR OUTLYING ISLANDS (THE)","UNITED STATES OF AMERICA (THE)","URUGUAY","URUGUAY","URUGUAY","UZBEKISTAN","VANUATU","VENEZUELA (BOLIVARIAN REPUBLIC OF)","VIETNAM","VIRGIN ISLANDS (BRITISH)","VIRGIN ISLANDS (U.S.)","WALLIS AND FUTUNA","WESTERN SAHARA","YEMEN","ZAMBIA","ZIMBABWE"];
for (let i=0;i<countries.length;i++){
  $('#country').append(`<option value="${countries[i]}"> ${countries[i]}</option>`);
}
