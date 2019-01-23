exports.run = (client, message, args) => { 
    
    var a = Math.floor(Math.random() * 49);
    var b = Math.floor(Math.random() * 49);
    var c = Math.floor(Math.random() * 49);
    
    var col1 = ["bawdy","beslubbering","bootless","churlish","cockered","clouted","craven","currish","dankish","dissembling","droning","fawning","fobbing","froward","gleeking","goatish","gorbellied","jarring","loggerheaded","lumpish","mammering","mangled","mewling","paunchy","pribbling","puking","puny","qualling","rank","reeky","roguish","ruttish","saucy","spleeny","spongy","tottering","unmuzzled","vain","venomed","villainous","warped","wayward","weedy","yeasty","fusty","wimpled","misbegotten","caluminous"];
    var col2=["base-court","bat-fowling","beef-witted","beetle-headed","boil-brained","clapper-clawed","clay-brained","common-kissing","crook-pated","dismal-dreaming","dizzy-eyed","doghearted","earth-vexing","old","elf-skinned","fat-kidneyed","fen-sucked","flap-mouthed","fly-bitten","folly-fallen","fool-born","full-gorged","half-faced","pigeon-livered","hasty-witted","hedge-born","hell-hated","idle-headed","ill-breeding","ill-nurtured","knotty-pated","milk-livered","motley-minded","onion-eyed","plume-plucked","pottle-deep","pox-marked","reeling-ripe","rough-hewn","rude-growing","rump-fed","shard-borne","sheep-biting","spur-galled","swag-bellied","tardy-gaited","tickle-brained","toad-spotted","unchin-snouted","weather-bitten"];
    
    var col3=["apple-john","baggage","barnacle","bladder","bugbear","boar-pig","bum-bailey","canker-blossom","clack-dish","clotpole","coxcomb","codpiece","death-token","dewberry","flap-dragon","flax-wench","flirt-gill","foot-licker","fustilarian","giglet","gudgeon","haggard","harpy","hedge-pig","horn-beast","hugger-mugger","joithead","lewdster","lout","maggot","malt-worm","mammet","measle","minnow","miscreant","moldwarp","mumble-news","knave","scullion","pignut","puttock","pumpion","ratsbane","scut","skainsmate","strumpet","varlot","vassal","whey-face","wagtail"];
    

    

message.channel.send(args[0] + ", thou art a " + col1[a] + ", " + col2[b] + " " + col3[c] + "!");

}