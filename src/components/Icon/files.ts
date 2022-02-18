import { ICON_NAMES } from './constants'

import testIcon from './icons/old/test-icon.svg'
import companyLogo from './icons/old/companyLogo.svg'
import registerIllustration from './icons/old/registerIllustration.svg'
import registerCongratulationIllustration from './icons/old/registerCongratulationIllustration.svg'
import flagSh from './icons/old/flag_sh.svg'
import smallLogo from './icons/old/smallLogo.svg'
import resetPasswordLetter from './icons/old/resetPasswordLetter.svg'
import eyePassword from './icons/old/eyePassword.svg'
import eyePasswordHide from './icons/old/eyePasswordHide.svg'
import trackYourVitalIllustration1 from './icons/old/trackYourVitalIllustration1.svg'
import trackYourVitalIllustration2 from './icons/old/trackYourVitalIllustration2.svg'
import trackYourVitalIllustration3 from './icons/old/trackYourVitalIllustration3.svg'
import trackYourVitalIllustration4 from './icons/old/trackYourVitalIllustration4.svg'
import profileIllustration from './icons/old/profileIllustration.svg'
import iconCheck from './icons/old/icon_check.svg'
import iconDoc from './icons/old/icon_doc.svg'
import birthday_gender from './icons/old/birthday_gender.svg'
import mail from './icons/old/mail.svg'
import userId from './icons/old/user_id.svg'
import weightHeight from './icons/old/weight_height.svg'
import zip from './icons/old/zip.svg'
import triangleDown from './icons/old/triangle_down.svg'
import appleDownload from './icons/old/apple_download.svg'
import androidDownload from './icons/old/android_download.svg'
import hamburger from './icons/old/hamburger.svg'
import cross from './icons/old/cross.svg'
import google from './icons/new/google.svg'
import facebook from './icons/new/facebook.svg'
import masksLogo from './icons/new/masksLogo.svg'
import bookmark from './icons/new/bookmark.svg'
import shoppingCart from './icons/new/shoppingCart.svg'
import user from './icons/new/user.svg'

const nameToFile = {
	[ICON_NAMES.GOOGLE]: google,
	[ICON_NAMES.FACEBOOK]: facebook,
	[ICON_NAMES.MASKS_LOGO]: masksLogo,
	[ICON_NAMES.BOOKMARK]: bookmark,
	[ICON_NAMES.SHOPPING_CART]: shoppingCart,
	[ICON_NAMES.USER]: user,
}

const oldNameToFile = {
	[ICON_NAMES.TEST_ICON]: testIcon,
	[ICON_NAMES.COMPANY_LOGO_ICON]: companyLogo,
	[ICON_NAMES.REGISTER_ILLUSTRATION_ICON]: registerIllustration,
	[ICON_NAMES.REGISTER_CONFIGURATION_ILLUSTRATION]: registerCongratulationIllustration,
	[ICON_NAMES.FLAG_SH_ICON]: flagSh,
	[ICON_NAMES.SMALL_LOGO_ICON]: smallLogo,
	[ICON_NAMES.RESET_PASSWORD_LETTER_ICON]: resetPasswordLetter,
	[ICON_NAMES.EYE_PASSWORD_ICON]: eyePassword,
	[ICON_NAMES.EYE_PASSWORD_HIDE_ICON]: eyePasswordHide,
	[ICON_NAMES.TRACK_YOUR_VITAL_ILLUSTRATION_1]: trackYourVitalIllustration1,
	[ICON_NAMES.TRACK_YOUR_VITAL_ILLUSTRATION_2]: trackYourVitalIllustration2,
	[ICON_NAMES.TRACK_YOUR_VITAL_ILLUSTRATION_3]: trackYourVitalIllustration3,
	[ICON_NAMES.TRACK_YOUR_VITAL_ILLUSTRATION_4]: trackYourVitalIllustration4,
	[ICON_NAMES.PROFILE_ILLUSTRATION]: profileIllustration,
	[ICON_NAMES.ICON_CHECK]: iconCheck,
	[ICON_NAMES.ICON_DOC]: iconDoc,
	[ICON_NAMES.BIRTHDAY_GENDER]: birthday_gender,
	[ICON_NAMES.MAIL]: mail,
	[ICON_NAMES.USER_ID]: userId,
	[ICON_NAMES.WEIGHT_HEIGHT]: weightHeight,
	[ICON_NAMES.ZIP]: zip,
	[ICON_NAMES.TRIANGLE_DOWN]: triangleDown,
	[ICON_NAMES.APPLE_DOWNLOAD]: appleDownload,
	[ICON_NAMES.ANDROID_DOWNLOAD]: androidDownload,
	[ICON_NAMES.HAMBURGER]: hamburger,
	[ICON_NAMES.CROSS]: cross,
}

export default { ...nameToFile, ...oldNameToFile }
