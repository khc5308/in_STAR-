const cardData = [
    { date: "24.06.07", link: 'https://x.com/WE_NMIXX/status/1798918065977213173',name: 'kyujin', image:'https://pbs.twimg.com/media/GPcKcO4bkAAhvye?format=jpg	'},
    { date: "24.06.06", link: 'https://x.com/WE_NMIXX/status/1798584754440478730',name: 'sullyoon', image:'https://pbs.twimg.com/media/GPXbTM5agAAG9WQ?format=jpg '},
    { date: "24.06.06", link: 'https://x.com/WE_NMIXX/status/1798553729836433707',name: 'kyujin', image:'https://pbs.twimg.com/media/GPW_FS3aEAAuUH5?format=jpg	'},
    { date: "24.06.06", link: 'https://x.com/WE_NMIXX/status/1798543628069204033',name: 'lily', image:'https://pbs.twimg.com/media/GPW15OcaQAAeW4j?format=jpg	'},
    { date: "24.06.04", link: 'https://x.com/WE_NMIXX/status/1797828785712373795',name: 'bae', image:'https://pbs.twimg.com/media/GPMrvvta4AE3s7o?format=jpg	'},
    { date: "24.06.03", link: 'https://x.com/WE_NMIXX/status/1797545121925456103',name: 'jiwoo', image:'https://pbs.twimg.com/media/GPIps5dbYAAkwze?format=jpg	'},
    { date: "24.06.03", link: 'https://x.com/WE_NMIXX/status/1797467524285768074',name: 'jiwoo', image:'https://pbs.twimg.com/media/GPHjLOfbkAEekoN?format=jpg	'},
    { date: "24.06.03", link: 'https://x.com/WE_NMIXX/status/1797457516391243833',name: 'haewon', image:'	'},
    { date: "24.06.02", link: 'https://x.com/WE_NMIXX/status/1797278434474987545',name: 'sullyoon', image:'https://pbs.twimg.com/media/GPE3M55aoAAuFnX?format=jpg	'},
    { date: "24.06.02", link: 'https://x.com/WE_NMIXX/status/1797181345120346405',name: 'kyujin', image:'https://pbs.twimg.com/media/GPDe5ydawAAccXg?format=jpg	'},
    { date: "24.05.01", link: 'https://x.com/WE_NMIXX/status/1796880338544922697',name: 'kyujin', image:'https://pbs.twimg.com/media/GO_NIynawAANiD9?format=jpg	'},
    { date: "24.05.31", link: 'https://x.com/WE_NMIXX/status/1796548118802235781',name: 'sullyoon', image:'https://pbs.twimg.com/media/GO6e_Usa0AALOOu?format=jpg	'},
    { date: "24.05.31", link: 'https://x.com/WE_NMIXX/status/1796544015711736193',name: 'bae', image:'https://pbs.twimg.com/media/GO6bQX5akAAqyZy?format=jpg	'},
    { date: "24.05.31", link: 'https://x.com/WE_NMIXX/status/1796466140593676289',name: 'jiwoo', image:'https://pbs.twimg.com/media/GO5UbjVbkAA_czJ?format=jpg	'},
    { date: "24.05.31", link: 'https://x.com/WE_NMIXX/status/1796460501926580677',name: 'lily', image:'https://pbs.twimg.com/media/GO5PTU1acAA6sZk?format=jpg	'},
    { date: "24.05.31", link: 'https://x.com/WE_NMIXX/status/1796329824547741930',name: 'sullyoon', image:'https://pbs.twimg.com/media/GO3YclWa0AA8wLi?format=jpg	'},
    { date: "24.05.30", link: 'https://x.com/WE_NMIXX/status/1796118433890791604',name: 'kyujin', image:'https://pbs.twimg.com/media/GO0YMWIbMAAIUFy?format=jpg	'},
    { date: "24.05.30", link: 'https://x.com/WE_NMIXX/status/1796065287474942326',name: 'kyujin', image:'https://pbs.twimg.com/media/GOzn2xYaYAAQlf6?format=jpg	'},
    { date: "24.05.29", link: 'https://x.com/WE_NMIXX/status/1795711208898908382',name: 'bae', image:'https://pbs.twimg.com/media/GOul010agAAyYlk?format=jpg	'},
    { date: "24.05.28", link: 'https://x.com/WE_NMIXX/status/1795360233340142005',name: 'kyujin', image:'https://pbs.twimg.com/media/GOpmm5oakAAbORp?format=jpg	'},
    { date: "24.05.28", link: 'https://x.com/WE_NMIXX/status/1795321131102277922',name: 'haewon', image:'https://pbs.twimg.com/media/GOpDDPLbMAAKrbn?format=jpg	'},
    { date: "24.05.28", link: 'https://x.com/WE_NMIXX/status/1795261432503959806',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOoMwTUbYAAacpp?format=jpg	'},
    { date: "24.05.28", link: 'https://x.com/WE_NMIXX/status/1795108830465966201',name: 'bae', image:'https://pbs.twimg.com/media/GOmB9oJaUAEogVz?format=jpg	'},
    { date: "24.05.26", link: 'https://x.com/WE_NMIXX/status/1795108458913546420',name: 'lily', image:'https://pbs.twimg.com/media/GOmBoGDboAAa4Hc?format=jpg	'},
    { date: "24.05.26", link: 'https://x.com/WE_NMIXX/status/1794724152127180967',name: 'jiwoo', image:'https://pbs.twimg.com/media/GOgkCZYa4AAcR-u?format=jpg	'},
    { date: "24.05.26", link: 'https://x.com/WE_NMIXX/status/1794562123038949526',name: 'bae', image:'https://pbs.twimg.com/media/GOeQvCTa8AAvmDt?format=jpg	'},
    { date: "24.05.26", link: 'https://x.com/WE_NMIXX/status/1794557829749342265',name: 'haewon', image:'https://pbs.twimg.com/media/GOeM1Tzb0AA8Vqs?format=jpg	'},
    { date: "24.05.26", link: 'https://x.com/WE_NMIXX/status/1794556729344061740',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOeL1KXaAAARHG4?format=jpg	'},
    { date: "24.05.25", link: 'https://x.com/WE_NMIXX/status/1794555698795229378',name: 'lily', image:'https://pbs.twimg.com/media/GOeK49QaQAAa0pm?format=jpg	'},
    { date: "24.05.25", link: 'https://x.com/WE_NMIXX/status/1794325072439849151',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOa5IVubkAENghU?format=jpg	'},
    { date: "24.05.25", link: 'https://x.com/WE_NMIXX/status/1794322542758666678',name: 'kyujin', image:'https://pbs.twimg.com/media/GOa21e9b0AAgfjl?format=jpg	'},
    { date: "24.05.25", link: 'https://x.com/WE_NMIXX/status/1794316125603520660',name: 'lily', image:'https://pbs.twimg.com/media/GOaxAK8asAAoH1E?format=jpg	'},
    { date: "24.05.25", link: 'https://x.com/WE_NMIXX/status/1794196412164710444',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOZEH0CboAEHHVw?format=jpg	'},
    { date: "24.05.24", link: 'https://x.com/WE_NMIXX/status/1794182692164268512',name: 'haewon', image:'https://pbs.twimg.com/media/GOY3pUcagAACTFb?format=jpg	'},
    { date: "24.05.24", link: 'https://x.com/WE_NMIXX/status/1793986161695965680',name: 'haewon', image:'https://pbs.twimg.com/media/GOWE5w8bUAAFomx?format=jpg	'},
    { date: "24.05.24", link: 'https://x.com/WE_NMIXX/status/1793862594387988985',name: 'lily', image:'https://pbs.twimg.com/media/GOUUg5TaYAAqOkH?format=jpg	'},
    { date: "24.05.24", link: 'https://x.com/WE_NMIXX/status/1793838738805809621',name: 'bae', image:'https://pbs.twimg.com/media/GOT-0jebsAAbqiG?format=jpg	'},
    { date: "24.05.23", link: 'https://x.com/WE_NMIXX/status/1793799173512573349',name: 'jiwoo', image:'https://pbs.twimg.com/media/GOTa0tJbgAAd-Qw?format=jpg	'},
    { date: "24.05.23", link: 'https://x.com/WE_NMIXX/status/1793644943640310247',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOROcCxbQAA6TCI?format=jpg	'},
    { date: "24.05.23", link: 'https://x.com/WE_NMIXX/status/1793599097657852065',name: 'kyujin', image:'https://pbs.twimg.com/media/GOQk3spbYAA8VoA?format=jpg	'},
    { date: "24.05.22", link: 'https://x.com/WE_NMIXX/status/1793297769433870431',name: 'haewon', image:'https://pbs.twimg.com/media/GOMS0DibUAAqnXN?format=jpg	'},
    { date: "24.05.21", link: 'https://x.com/WE_NMIXX/status/1793294388216705372',name: 'sullyoon', image:'https://pbs.twimg.com/media/GOMPvPuaQAA-o4p?format=jpg	'},
    { date: "24.05.20", link: 'https://x.com/WE_NMIXX/status/1792771096074461426',name: 'bae', image:'https://pbs.twimg.com/media/GOEzzpda8AEG-Px?format=jpg	'},
    { date: "24.05.20", link: 'https://x.com/WE_NMIXX/status/1792365889603707164',name: 'sullyoon', image:'https://pbs.twimg.com/media/GN_DQcGasAAGskO?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1792364248687075652',name: 'haewon', image:'https://pbs.twimg.com/media/GN_Bx_RasAAvCfC?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1791396333313761410',name: 'kyujin', image:'https://pbs.twimg.com/media/GNxRd0TaQAAvWCa?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1791282699346599961',name: 'sullyoon', image:'https://pbs.twimg.com/media/GNvqHTrakAALHYC?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1791130084906316190',name: 'sullyoon', image:'https://pbs.twimg.com/media/GNtfULyaYAATVft?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1791125516826898659',name: 'jiwoo', image:'https://pbs.twimg.com/media/GNtbKL0asAA1V-W?format=jpg	'},
    { date: "24.05.17", link: 'https://x.com/WE_NMIXX/status/1791125450032570679',name: 'jiwoo', image:'https://pbs.twimg.com/media/GNtbGNmasAAKkWt?format=jpg	'},
    { date: "24.05.13", link: 'https://x.com/WE_NMIXX/status/1791124188981518542',name: 'bae', image:'https://pbs.twimg.com/media/GNtZ9EyaMAAa2FI?format=jpg	'},
    { date: "24.05.12", link: 'https://x.com/WE_NMIXX/status/1789919878595424513',name: 'kyujin', image:'https://pbs.twimg.com/media/GNcSm1sbMAA-BaG?format=jpg	'},
    { date: "24.05.06", link: 'https://x.com/WE_NMIXX/status/1789514610372153514',name: 'sullyoon', image:'https://pbs.twimg.com/media/GNWiDP4aAAAxeAx?format=jpg	'},
    { date: "24.05.04", link: 'https://x.com/WE_NMIXX/status/1787477221063766079',name: 'bae', image:'https://pbs.twimg.com/media/GM5lDlvbAAErmiu?format=jpg	'},
    { date: "24.05.03", link: 'https://x.com/WE_NMIXX/status/1786612822945960436',name: 'jiwoo', image:'https://pbs.twimg.com/media/GMtS3isaMAAD1dB?format=jpg	'},
    { date: "24.05.02", link: 'https://x.com/WE_NMIXX/status/1786352733945291216',name: 'lily', image:'https://pbs.twimg.com/media/GMpmVnKagAAMeKU?format=jpg	'},
    { date: "24.05.02", link: 'https://x.com/WE_NMIXX/status/1786011733427187974',name: 'sullyoon', image:'https://pbs.twimg.com/media/GMkwM78aYAAoKBM?format=jpg	'},
    { date: "24.05.01", link: 'https://x.com/WE_NMIXX/status/1785970768385626511',name: 'kyujin', image:'https://pbs.twimg.com/media/GMkK8ctbEAAqkpe?format=jpg	'},
    { date: "24.04.29", link: 'https://x.com/WE_NMIXX/status/1785495091051946088',name: 'kyujin', image:'https://pbs.twimg.com/media/GMdaUQjacAAgutN?format=jpg	'},
    { date: "24.04.27", link: 'https://x.com/WE_NMIXX/status/1784817812873289953',name: 'lily', image:'https://pbs.twimg.com/media/GMTyVfCbUAAiJa-?format=jpg	'},
    { date: "24.04.21", link: 'https://x.com/WE_NMIXX/status/1784200783967449243',name: 'sullyoon', image:'https://pbs.twimg.com/media/GMLBJUJa8AAJpHl?format=jpg	'},
    { date: "24.04.19", link: 'https://x.com/WE_NMIXX/status/1782014016950579510',name: 'haewon', image:'https://pbs.twimg.com/media/GLr8TPXaIAADvUN?format=jpg	'},
    { date: "24.04.16", link: 'https://x.com/WE_NMIXX/status/1781138042205704523',name: 'kyujin', image:'https://pbs.twimg.com/media/GLffju1bwAAIFc8?format=jpg	'},
    { date: "24.04.15", link: 'https://x.com/WE_NMIXX/status/1780157878034374717',name: 'bae', image:'https://pbs.twimg.com/media/GLRkHmAb0AAVNjO?format=jpg	'},
    { date: "24.04.15", link: 'https://x.com/WE_NMIXX/status/1779848507291222500',name: 'kyujin', image:'https://pbs.twimg.com/media/GLNKvWJa0AAeXQi?format=jpg	'},
    { date: "24.04.14", link: 'https://x.com/WE_NMIXX/status/1779848452366848239',name: 'kyujin', image:'https://pbs.twimg.com/media/GLNKuuoa4AAaOmw?format=jpg	'},
    { date: "24.04.14", link: 'https://x.com/WE_NMIXX/status/1779315186417225865',name: 'haewon', image:'https://pbs.twimg.com/media/GLFlucqbYAAZDyW?format=jpg	'},
    { date: "24.04.14", link: 'https://x.com/WE_NMIXX/status/1779163286837342268',name: 'kyujin', image:'https://pbs.twimg.com/media/GLDbgWvXAAAABqB?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779163198303981945',name: 'kyujin', image:'https://pbs.twimg.com/media/GLDbfeQW0AA8tSs?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779159692725641489',name: 'sullyoon', image:'https://pbs.twimg.com/media/GLDYTnaa4AAVFMZ?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779063383213694989',name: 'haewon', image:'https://pbs.twimg.com/media/GLCAtpSa0AAh3VL?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779009034303185170',name: 'bae', image:'https://pbs.twimg.com/media/GLBPSBrbEAARZCa?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779009020969582640',name: 'bae', image:'https://pbs.twimg.com/media/GLBPRRzaYAAibVc?format=jpg	'},
    { date: "24.04.13", link: 'https://x.com/WE_NMIXX/status/1779006150287180220',name: 'lily', image:'https://pbs.twimg.com/media/GLBMne8bUAAn-WD?format=jpg	'},
    { date: "24.04.06", link: 'https://x.com/WE_NMIXX/status/1779006091004969153',name: 'lily', image:'https://pbs.twimg.com/media/GLBMmmUawAAUkqE?format=jpg	'},
    { date: "24.04.04", link: 'https://x.com/WE_NMIXX/status/1776558355206524977',name: 'kyujin', image:'https://pbs.twimg.com/media/GKeaZ6ybYAA5zKt?format=jpg	'},
    { date: "24.04.03", link: 'https://x.com/WE_NMIXX/status/1775786216237191276',name: 'lily', image:'https://pbs.twimg.com/media/GKTcJisa8AAfFWS?format=jpg	'},
    { date: "24.04.03", link: 'https://x.com/WE_NMIXX/status/1775455962130002189',name: 'bae', image:'https://pbs.twimg.com/media/GKOvyRbawAEIgd5?format=jpg	'},
    { date: "24.04.01", link: 'https://x.com/WE_NMIXX/status/1775455878617145773',name: 'bae', image:'https://pbs.twimg.com/media/GKOvtKJaIAEnM0q?format=jpg	'},
    { date: "24.03.31", link: 'https://x.com/WE_NMIXX/status/1774646328859226166',name: 'kyujin', image:'https://pbs.twimg.com/media/GKDPbNjbQAA_U8_?format=jpg	'},
    { date: "24.03.31", link: 'https://x.com/WE_NMIXX/status/1774379174016561344',name: 'jiwoo', image:'	'},
    { date: "24.03.30", link: 'https://x.com/WE_NMIXX/status/1774373894516044119',name: 'bae', image:'https://pbs.twimg.com/media/GJ_Xpnxa8AAV1yr?format=jpg	'},
    { date: "24.03.26", link: 'https://x.com/WE_NMIXX/status/1774373885817070073',name: 'bae', image:'https://pbs.twimg.com/media/GJ_XpBIagAAoB7T?format=jpg	'},
    { date: "24.03.14", link: 'https://x.com/WE_NMIXX/status/1773911852675957139',name: 'jiwoo', image:'https://pbs.twimg.com/media/GJ4zbUnasAAcHkU?format=jpg	'},
    { date: "24.03.14", link: 'https://x.com/WE_NMIXX/status/1773911844337631483',name: 'jiwoo', image:'	'},
    { date: "24.03.12", link: 'https://x.com/WE_NMIXX/status/1772411780737716523',name: 'kyujin', image:'https://pbs.twimg.com/media/GJjfHWzbgAAdh90?format=jpg	'},
    { date: "24.03.12", link: 'https://x.com/WE_NMIXX/status/1768268457597087809',name: 'lily', image:'https://pbs.twimg.com/media/GIomyJTaEAAugca?format=jpg	'},
    { date: "24.03.10", link: 'https://x.com/WE_NMIXX/status/1768165524515799178',name: 'haewon', image:'https://pbs.twimg.com/media/GInJK8WaYAAboTE?format=jpg	'},
    { date: "24.03.10", link: 'https://x.com/WE_NMIXX/status/1767539864592056548',name: 'jiwoo', image:'https://pbs.twimg.com/media/GIeQIvebIAAbOp2?format=jpg	'},
    { date: "24.03.09", link: 'https://x.com/WE_NMIXX/status/1767539856102801687',name: 'jiwoo', image:'https://pbs.twimg.com/media/GIeQISEbgAAuPoQ?format=jpg	'},
    { date: "24.03.09", link: 'https://x.com/WE_NMIXX/status/1767195709550501906',name: 'kyujin', image:'	'},
    { date: "24.03.09", link: 'https://x.com/WE_NMIXX/status/1766703930455802291',name: 'kyujin', image:'https://pbs.twimg.com/media/GISX2_MaoAAupWQ?format=jpg	'},
    { date: "24.03.08", link: 'https://x.com/WE_NMIXX/status/1766703923103244524',name: 'kyujin', image:'https://pbs.twimg.com/media/GISX2j8awAADCfL?format=jpg	'},
    { date: "24.03.08", link: 'https://x.com/WE_NMIXX/status/1766304242766414219',name: 'jiwoo', image:'https://pbs.twimg.com/media/GIMsV-8bwAAW8Eb?format=jpg	'},
    { date: "24.03.05", link: 'https://x.com/WE_NMIXX/status/1766302524091576588',name: 'kyujin', image:'https://pbs.twimg.com/media/GIMqx0cbIAA5Ksd?format=jpg	'},
    { date: "24.03.05", link: 'https://x.com/WE_NMIXX/status/1766302511256961384',name: 'kyujin', image:'https://pbs.twimg.com/media/GIMqw-xa4AAbtD6?format=jpg	'},
    { date: "24.03.04", link: 'https://x.com/WE_NMIXX/status/1766065469285666902',name: 'lily', image:'https://pbs.twimg.com/media/GIJTLmFbQAAcTls?format=jpg	'},
    { date: "24.03.04", link: 'https://x.com/WE_NMIXX/status/1766065458342776833',name: 'lily', image:'https://pbs.twimg.com/media/GIJTK0AbQAAT-4K?format=jpg	'},
    { date: "24.02.28", link: 'https://x.com/WE_NMIXX/status/1764878248494997878',name: 'kyujin', image:'https://pbs.twimg.com/media/GH4bZgLbsAAyDsz?format=jpg	'},
    { date: "24.02.28", link: 'https://x.com/WE_NMIXX/status/1764878225187184719',name: 'kyujin', image:'https://pbs.twimg.com/media/GH4bYJZbEAAngk_?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1764624968997106046',name: 'lily', image:'https://pbs.twimg.com/media/GH01CgUawAAq5R4?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1764490725134369002',name: 'haewon', image:'https://pbs.twimg.com/media/GHy6881b0AA-shf?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1762760434564870209',name: 'jiwoo', image:'https://pbs.twimg.com/media/GHaVRT3bsAAiGlq?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1762760426318971026',name: 'jiwoo', image:'https://pbs.twimg.com/media/GHaVNAYaUAAAFqE?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1761729955740918145',name: 'jiwoo', image:'https://pbs.twimg.com/media/GHLsDdBawAA4_5m?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1761728896926683476',name: 'sullyoon', image:'https://pbs.twimg.com/media/GHLrClhaIAA0mUr?format=jpg	'},
    { date: "24.02.25", link: 'https://x.com/WE_NMIXX/status/1761658687540863038',name: 'bae', image:'https://pbs.twimg.com/media/GHKrPDXaAAAI3VM?format=jpg	'},
    { date: "24.02.24", link: 'https://x.com/WE_NMIXX/status/1761658676979679425',name: 'bae', image:'https://pbs.twimg.com/media/GHKrOibbsAAXgSD?format=jpg	'},
    { date: "24.02.24", link: 'https://x.com/WE_NMIXX/status/1761657922126516397',name: 'lily', image:'https://pbs.twimg.com/media/GHKqiIzbYAA0cnU?format=jpg	'},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1761657215004639594',name: 'haewon', image:'https://pbs.twimg.com/media/GHKp5T3aEAAfFMd?format=jpg	'},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1761656974801031185',name: 'kyujin', image:'https://pbs.twimg.com/media/GHKpnu-bAAAzVQO?format=jpg	'},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1761381575965716901',name: 'kyujin', image:'https://pbs.twimg.com/media/GHFhiH0bAAAP5hx?format=jpg	'},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1761296176241115620',name: 'kyujin', image:'https://pbs.twimg.com/media/GHFhhf1bcAAmW3F?format=jpg '},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1761296164698423374',name: 'jiwoo', image:'https://pbs.twimg.com/media/GG8wPgzagAAjPHe?format=jpg '},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1760679028678443437',name: 'jiwoo', image:'https://pbs.twimg.com/media/GG8wO6tbYAA1TCi?format=jpg '},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1760679019606048883',name: 'jiwoo', image:'https://pbs.twimg.com/media/GG8v9kNaYAAcFYb?format=jpg '},
    { date: "24.02.22", link: 'https://x.com/WE_NMIXX/status/1760678720749363551',name: 'kyujin', image:'https://pbs.twimg.com/media/GG8aEQLawAAKsmU?format=jpg '},

];

const container = document.getElementById('card-container');

cardData.forEach((data, index) => {
    const card = document.createElement('div');
    card.classList.add(`card-${index + 1}`, 'CARD');

    const image = document.createElement('div');
    image.classList.add('image');
    image.style.backgroundImage = `url(${data.image})`; // Set background image dynamically

    const copy = document.createElement('div');
    copy.classList.add('copy');

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');
    textWrapper.textContent = data.date;

    const link = document.createElement('a');
    link.href = data.link;
    link.target = '_blank';

    const textWrapper2 = document.createElement('div');
    textWrapper2.classList.add('text-wrapper-2');
    textWrapper2.textContent = data.name;

    link.appendChild(textWrapper2);
    copy.appendChild(textWrapper);
    copy.appendChild(link);
    card.appendChild(image);
    card.appendChild(copy);
    container.appendChild(card);
});
