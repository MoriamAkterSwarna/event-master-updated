const MySVGComponent = () => {
  return (
    <svg
      width="100%"
      height="50%"
      id="svg"
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150">
      <style>
        {`
    .path-0{
      animation:pathAnim-0 4s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes pathAnim-0{
      0%{
        d: path("M 0,500 C 0,500 0,166 0,166 C 103.4736842105263,203.11004784688996 206.9473684210526,240.2200956937799 290,227 C 373.0526315789474,213.7799043062201 435.6842105263157,150.22966507177034 522,126 C 608.3157894736843,101.77033492822966 718.3157894736842,116.86124401913875 834,144 C 949.6842105263158,171.13875598086125 1071.0526315789473,210.32535885167462 1173,216 C 1274.9473684210527,221.67464114832538 1357.4736842105262,193.83732057416267 1440,166 C 1440,166 1440,500 1440,500 Z");
      }
      25%{
        d: path("M 0,500 C 0,500 0,166 0,166 C 99.60765550239236,125.2535885167464 199.21531100478472,84.50717703349281 296,107 C 392.7846889952153,129.4928229665072 486.7464114832535,215.22488038277513 587,219 C 687.2535885167465,222.77511961722487 793.7990430622011,144.5933014354067 886,132 C 978.2009569377989,119.40669856459331 1056.0574162679425,172.40191387559807 1146,189 C 1235.9425837320575,205.59808612440193 1337.9712918660289,185.79904306220095 1440,166 C 1440,166 1440,500 1440,500 Z");
      }
      50%{
        d: path("M 0,500 C 0,500 0,166 0,166 C 99.73205741626793,192.14354066985646 199.46411483253587,218.2870813397129 283,226 C 366.53588516746413,233.7129186602871 433.87559808612446,222.99521531100478 543,198 C 652.1244019138755,173.00478468899522 803.0334928229664,133.73205741626793 909,122 C 1014.9665071770336,110.26794258373208 1075.9904306220096,126.07655502392345 1157,138 C 1238.0095693779904,149.92344497607655 1339.0047846889952,157.96172248803828 1440,166 C 1440,166 1440,500 1440,500 Z");
      }
      75%{
        d: path("M 0,500 C 0,500 0,166 0,166 C 105.57894736842107,176.5263157894737 211.15789473684214,187.05263157894737 310,181 C 408.84210526315786,174.94736842105263 500.9473684210526,152.31578947368422 580,153 C 659.0526315789474,153.68421052631578 725.0526315789474,177.68421052631578 834,181 C 942.9473684210526,184.31578947368422 1094.842105263158,166.94736842105263 1203,161 C 1311.157894736842,155.05263157894737 1375.578947368421,160.5263157894737 1440,166 C 1440,166 1440,500 1440,500 Z");
      }
      100%{
        d: path("M 0,500 C 0,500 0,166 0,166 C 103.4736842105263,203.11004784688996 206.9473684210526,240.2200956937799 290,227 C 373.0526315789474,213.7799043062201 435.6842105263157,150.22966507177034 522,126 C 608.3157894736843,101.77033492822966 718.3157894736842,116.86124401913875 834,144 C 949.6842105263158,171.13875598086125 1071.0526315789473,210.32535885167462 1173,216 C 1274.9473684210527,221.67464114832538 1357.4736842105262,193.83732057416267 1440,166 C 1440,166 1440,500 1440,500 Z");
      }
    }
`}
      </style>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#ff6900"></stop>
          <stop offset="95%" stop-color="#f78da7"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,166 0,166 C 103.4736842105263,203.11004784688996 206.9473684210526,240.2200956937799 290,227 C 373.0526315789474,213.7799043062201 435.6842105263157,150.22966507177034 522,126 C 608.3157894736843,101.77033492822966 718.3157894736842,116.86124401913875 834,144 C 949.6842105263158,171.13875598086125 1071.0526315789473,210.32535885167462 1173,216 C 1274.9473684210527,221.67464114832538 1357.4736842105262,193.83732057416267 1440,166 C 1440,166 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="0.53"
        class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
      <style>
        {`
    .path-1{
      animation:pathAnim-1 4s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes pathAnim-1{
      0%{
        d: path("M 0,500 C 0,500 0,333 0,333 C 118.62200956937798,343.0287081339713 237.24401913875596,353.0574162679426 338,357 C 438.75598086124404,360.9425837320574 521.6459330143541,358.799043062201 604,351 C 686.3540669856459,343.200956937799 768.1722488038276,329.74641148325355 861,323 C 953.8277511961724,316.25358851674645 1057.6650717703349,316.2153110047847 1156,319 C 1254.3349282296651,321.7846889952153 1347.1674641148325,327.3923444976076 1440,333 C 1440,333 1440,500 1440,500 Z");
      }
      25%{
        d: path("M 0,500 C 0,500 0,333 0,333 C 95.19617224880383,360.0526315789474 190.39234449760767,387.10526315789474 284,374 C 377.60765550239233,360.89473684210526 469.62679425837325,307.6315789473684 559,286 C 648.3732057416267,264.3684210526316 735.1004784688994,274.3684210526316 832,282 C 928.8995215311006,289.6315789473684 1035.9712918660289,294.89473684210526 1139,303 C 1242.0287081339711,311.10526315789474 1341.0143540669856,322.0526315789474 1440,333 C 1440,333 1440,500 1440,500 Z");
      }
      50%{
        d: path("M 0,500 C 0,500 0,333 0,333 C 89.70334928229664,358.12918660287085 179.40669856459328,383.25837320574163 278,391 C 376.5933014354067,398.74162679425837 484.07655502392345,389.09569377990425 577,371 C 669.9234449760766,352.90430622009575 748.2870813397129,326.3588516746412 830,321 C 911.7129186602871,315.6411483253588 996.7751196172248,331.46889952153106 1099,337 C 1201.2248803827752,342.53110047846894 1320.6124401913876,337.76555023923447 1440,333 C 1440,333 1440,500 1440,500 Z");
      }
      75%{
        d: path("M 0,500 C 0,500 0,333 0,333 C 94.85167464114832,323.1626794258373 189.70334928229664,313.32535885167465 292,312 C 394.29665071770336,310.67464114832535 504.0382775119617,317.8612440191388 602,312 C 699.9617224880383,306.1387559808612 786.1435406698564,287.22966507177034 881,291 C 975.8564593301436,294.77033492822966 1079.3875598086124,321.22009569377997 1174,332 C 1268.6124401913876,342.77990430622003 1354.3062200956938,337.88995215311 1440,333 C 1440,333 1440,500 1440,500 Z");
      }
      100%{
        d: path("M 0,500 C 0,500 0,333 0,333 C 118.62200956937798,343.0287081339713 237.24401913875596,353.0574162679426 338,357 C 438.75598086124404,360.9425837320574 521.6459330143541,358.799043062201 604,351 C 686.3540669856459,343.200956937799 768.1722488038276,329.74641148325355 861,323 C 953.8277511961724,316.25358851674645 1057.6650717703349,316.2153110047847 1156,319 C 1254.3349282296651,321.7846889952153 1347.1674641148325,327.3923444976076 1440,333 C 1440,333 1440,500 1440,500 Z");
      }
    }
`}
      </style>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="5%" stop-color="#ff6900"></stop>
          <stop offset="95%" stop-color="#f78da7"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,500 C 0,500 0,333 0,333 C 118.62200956937798,343.0287081339713 237.24401913875596,353.0574162679426 338,357 C 438.75598086124404,360.9425837320574 521.6459330143541,358.799043062201 604,351 C 686.3540669856459,343.200956937799 768.1722488038276,329.74641148325355 861,323 C 953.8277511961724,316.25358851674645 1057.6650717703349,316.2153110047847 1156,319 C 1254.3349282296651,321.7846889952153 1347.1674641148325,327.3923444976076 1440,333 C 1440,333 1440,500 1440,500 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
    </svg>
  );
};

export default MySVGComponent;
