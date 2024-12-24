import React from 'react'
import CustomAccordion from '../customaccordion/CustomAccordion'


const Faq = () => {

    let A2 = `Nebojte se, jsem tu pro vás! Jako zkušený grafický designer mám zkušenosti s tvorbou webových designů od základů a rád vám pomůžu vytvořit vizuální identitu, která bude odpovídat vašim potřebám a cílům.

Nejdříve bych se rád dozvěděl více o vašem podnikání, cílové skupině a záměrech vašeho webu. Na základě těchto informací můžu vytvořit různé návrhy designu, které budou reflektovat vaši značku.

Pokud máte jakékoli specifické požadavky nebo představy, neváhejte mi je sdělit. Jsem tu, abych vám pomohl převést vaše myšlenky do skvělého webu!`

    let A3 = `Pokud máte již vytvořený design, rád vám ho nakóduji a převedu na plně funkční web.

Jako zkušený webdeveloper mám znalosti a dovednosti potřebné k tomu, abych převedl váš grafický návrh do kódu tak, aby výsledný web byl elegantní, funkční a responzivní.  Při převodu designu do kódu budeme průběžně spolupracovat a komunikovat, abychom se ujistili, že výsledný web bude splňovat všechny vaše požadavky.

Pokud máte již hotový návrh webu nebo další specifické požadavky ohledně jeho kódování, neváhejte se na mě obrátit. Rád vám poskytnu další informace a společně najdeme nejlepší řešení pro váš projekt.`

    let A4 = `Samozřejmě! Používám platformu WordPress, která vám umožňuje snadno a intuitivně upravovat obsah vašeho webu bez nutnosti znalosti programování nebo složitých technických dovedností. WordPress je jednoduchý a uživatelsky přívětivý správce obsahu, který vám umožní aktualizovat texty, obrázky, přidávat nové články nebo měnit jakoukoli část webu podle vašich potřeb.

Při dokončení vašeho webu vás rád provedu krátkým školením, které vás seznámí s funkcemi WordPressu a naučí vás, jak spravovat obsah vašeho webu. Budete mít plnou kontrolu nad svým webem a můžete ho aktualizovat kdykoli budete potřebovat.

Pokud budete potřebovat další podporu nebo poradenství ohledně úprav vašeho webu, neváhejte mě kontaktovat.`

let A5 = `Není problém. Postarám se o všechny technické detaily, včetně registrace domény a poskytnutí místa na internetu (hostingu) pro váš web.

Budete mít plnou kontrolu nad doménou i hostingem.`
let A6 = `Vím že finanční prostředky mohou být v neziskovém sektoru často omezené. Pokud je vaše organizace charitativního nebo dobročinného charakteru a má za cíl podporu nebo prosazování dobra ve společnosti, mohu vám nabídnout mé služby bezplatně, pouze za cenu hostingových služeb.

Rád se s vámi setkám, abychom probrali  vaše potřeby a možnosti spolupráce. Můžeme společně najít způsob, jak vytvořit webové řešení, které bude odpovídat vašim potřebám a současně bude respektovat vaše finanční omezení.`


    return (
        <div id='Faq' className='w-full flex flex-col md:flex-row '>
            <div className='sm:w-[100%] md:w-[30%] sm:text-center md:text-left md:ml-[75px]'>
                <h1 className='font-extrabold'>Časté dotazy</h1>
                <p>Máte nějaké otázky ohledně tvorby vašeho webu? Zde naleznete odpovědi na nejčastější dotazy našich klientů.</p>
            </div>
            <div className='sm:w-[100%]  md:w-[70%]'>
                <div className='flex flex-wrap sm:flex-col md:flex-row sm:items-center'>
                    <CustomAccordion faq={{
                        Q: 'Na kolik mě vyjde nový web?', A: `'Každý web je jedinečný a cena se může lišit v závislosti na konkrétních potřebách a požadavcích vašeho projektu. Abych vám mohl poskytnout přesný odhad nákladů, je nezbytné provést podrobnou analýzu vašich požadavků. Zahrnuje to například design stránek, požadované funkce, počet stránek, integrace s dalšími systémy atd.

Po analýze Vám mohu vytvořit individuální nabídku, která bude odpovídat vašim potřebám a rozpočtu.

Pokud máte konkrétní požadavky nebo otázky ohledně cenového rozpětí, neváhejte mě kontaktovat. Rád Vám poskytnu další informace a společně najdeme optimální řešení pro váš projekt.'` }} />
                    <CustomAccordion faq={{ Q: 'Nemám představu jak by měl web vypadat.', A: A2 }} />
                    <CustomAccordion faq={{ Q: 'Mám design webu, ale nevím, jak ho převést do kódu.', A: A3 }} />
                    <CustomAccordion faq={{ Q: 'Budu si moci sám měnit obsah webu?', A: A4 }} />
                    <CustomAccordion faq={{ Q: 'Nerozumím technickým termínům jako je doména nebo hosting.', A: A5 }} />
                    <CustomAccordion faq={{ Q: 'Chtěl/a bych web pro neziskovou organizaci, ale náš rozpočet to nedovoluje.', A: A6 }} />
                </div>
            </div>

        </div>
    )
}

export default Faq
