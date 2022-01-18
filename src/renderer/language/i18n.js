import { createI18n } from "vue-i18n";

import zh from "../../../public/locales/zh";
import en from "../../../public/locales/en";

const i18n = createI18n({
    // legacy: false, // Composition API 模式
    globalInjection: true, // 全局注册 $t方法
    // locale: "zh",
    locale: process.env.VUE_APP_LOCALE,
    messages: {
        zh,
        en,
    },
});

export default i18n;
