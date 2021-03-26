import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  var data = [
    {
        type: "Woobi",
        value: 16391438
    },
    {
        type: "Crazy4Media Spain",
        value: 12655149
    },
    {
        type: "Playbuzz",
        value: 11812315
    },
    {
        type: "DSNRMG",
        value: 10963610
    },
    {
        type: "Adtention",
        value: 10405694
    },
    {
        type: "Barons\\' Media",
        value: 2732230
    },
    {
        type: "Integral Marketing",
        value: 2365320
    },
    {
        type: "Mars Video",
        value: 1665216
    },
    {
        type: "Media 122",
        value: 1541334
    },
    {
        type: "Division D",
        value: 907670
    },
    {
        type: "Cheetah Mobile",
        value: 544261
    },
    {
        type: "Appodeal",
        value: 218591
    },
    {
        type: "RF2 Mobile",
        value: 143507
    },
    {
        type: "Crazy4Media SEA",
        value: 86222
    },
    {
        type: "Revolution Mobile",
        value: 71431
    },
    {
        type: "MORRUM CONSULTING CORP DOO",
        value: 70808
    },
    {
        type: "Bluewaterads",
        value: 54509
    },
    {
        type: "Cheetah Mobile- Orion",
        value: 34908
    },
    {
        type: "Oak Lane Media",
        value: 27271
    },
    {
        type: "clickky media",
        value: 23942
    },
    {
        type: "BitTorent",
        value: "22515"
    },
    {
        type: "5mina.com",
        value: "20532"
    },
    {
        type: "Vidgyor Media Technologies Pvt. Ltd.",
        value: "13084"
    },
    {
        type: "New IT Solutions Ltd",
        value: "11740"
    },
    {
        type: "Pairade",
        value: "11700"
    },
    {
        type: "Yashi:10350",
        value: "5007"
    },
    {
        type: "Photobucket",
        value: "4732"
    },
    {
        type: "Tersertude",
        value: "3471"
    },
    {
        type: "JunGroup",
        value: "2827"
    },
    {
        type: "dingit.tv",
        value: "2492"
    },
    {
        type: "Taptica INC",
        value: "1992"
    },
    {
        type: "Lead2Class Pvt. Ltd.",
        value: "1200"
    },
    {
        type: "Vungle",
        value: "1080"
    },
    {
        type: "Mobpipe",
        value: "682"
    },
    {
        type: "Solve Media:10766",
        value: "651"
    },
    {
        type: "Dashbid",
        value: "496"
    },
    {
        type: "AirG",
        value: "467"
    },
    {
        type: "Telegraph Media",
        value: "440"
    },
    {
        type: "Jagran Prakashan Ltd.",
        value: "420"
    },
    {
        type: "TVZONE",
        value: "398"
    },
    {
        type: "M&M Media, Inc.:9300",
        value: "220"
    },
    {
        type: "Outfit7",
        value: "170"
    },
    {
        type: "Gramedia Group",
        value: "150"
    },
    {
        type: "Infospesial.net",
        value: "150"
    },
    {
        type: "Guchill",
        value: "130"
    },
    {
        type: "vdopia",
        value: "98"
    },
    {
        type: "SoftGames",
        value: "40"
    },
    {
        type: "WomensForum.com Inc.",
        value: "31"
    },
    {
        type: "Asianet News Network Pvt Ltd",
        value: "30"
    },
    {
        type: "Funkey",
        value: "10"
    }
]
  var config = {
    appendPadding: 5,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;