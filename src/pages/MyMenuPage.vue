<template>
 <main class=main1>
    <!-- <TheWelcome /> -->
    <div class="menu1"> 
      콜드 브루 커피 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50">
      <span class="menu2"> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
    </div>

    <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005378]_20240701133238491.jpg" 
          @click="$router.push('/black')" 
          class="clickable"></img>
       <div class="mtext1" > 흑임자 크림 콜드 브루
       </div>
      </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
        @click="$router.push('/NitroVanillaCream')" 
       class="clickable"></img>
       <div class="mtext1"> 나이트로 바닐라 크림 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
       @click="$router.push('/NitroColdBrew')"
       class="clickable"></img>
       <div class="mtext1"> 나이트로 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
       @click="$router.push('/DolceColdBrew')"
       class="clickable"></img>
       <div class="mtext1"> 돌체 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000002407]_20210225095106743.jpg"
       @click="$router.push('/ReserveNitro')"
       class="clickable"></img>
       <div class="mtext1"> 리저브 나이트로 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000002093]_20240318144604476.jpg"
       @click="$router.push('/ReserveColdBrew')"
       class="clickable"></img>
       <div class="mtext1"> 리저브 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/05/[9200000005282]_20240509131200017.jpg"
       @click="$router.push('/RiceCreamColdBrew')"
       class="clickable"
       ></img>
       <div class="mtext1"> 막걸리향 크림 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004312]_20221005145029134.jpg"
       @click="$router.push('/MintColdBrew')"
       class="clickable"
       ></img>
       <div class="mtext1"> 민트 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
       @click="$router.push('/VanillaCreamColdBrew')"
       class="clickable"
       ></img>
       <div class="mtext1"> 바닐라 크림 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000003661]_20230721170207026.jpg"></img>
       <div class="mtext1"> 시그니처 더 블랙 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/08/[9200000004750]_20230801101408624.jpg"></img>
       <div class="mtext1"> 여수 윤슬 헤이즐넛 콜드브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"></img>
       <div class="mtext1"> 오트 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002672]_20220311105511600.jpg"></img>
       <div class="mtext1"> 제주 비자림 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"></img>
       <div class="mtext1"> 콜드 브루 </div>
     </div>

     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004770]_20230720103902092.jpg"></img>
       <div class="mtext1"> 콜드 브루 </div>
     </div>
     
     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"></img>
       <div class="mtext1"> 콜드 브루 몰트 </div>
     </div>
     
     <div class="box">
       <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg"></img>
       <div class="mtext1"> 콜드 브루 플로트 </div>
     </div>

     <div class="menu1"> 
      브루드 커피 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50">
      <span class="menu2"> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
    </div>
  

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"></img>
    <div class="mtext1"> 아이스 커피 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"></img>
    <div class="mtext1"> 오늘의 커피 </div>
    </div>     

     <div class="menu1"> 
      에스프레소 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50">
      <span class="menu2"> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
    </div>


    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/06/[9200000005292]_20240627153259634.jpg"></img>
    <div class="mtext1"> 프렌치 바닐라 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg"></img>
    <div class="mtext1"> 에스프레소 콘 파나 </div>
    </div>     
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[25]_20210415144211211.jpg"></img>
    <div class="mtext1"> 에스프레소 마키아또 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg"></img>
    <div class="mtext1"> 아이스 카페 아메리카노 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[94]_20210430103337006.jpg"></img>
    <div class="mtext1"> 카페 아메리카노 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110582]_20210415142706078.jpg"></img>
    <div class="mtext1"> 아이스 카라멜 마키아또 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154609863.jpg"></img>
    <div class="mtext1"> 카라멜 마키아또 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110601]_20210415143400773.jpg"></img>
    <div class="mtext1"> 아이스 카푸치노 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[38]_20210415154821846.jpg"></img>
    <div class="mtext1"> 카푸치노 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/04/[9200000004119]_20220412083025862.png"></img>
    <div class="mtext1"> 라벤더 카페 브레베 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001939]_20210225094313315.jpg"></img>
    <div class="mtext1"> 바닐라 빈 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000002095]_20240318144701881.jpg"></img>
    <div class="mtext1"> 사케라또 비안코 오버 아이스 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004732]_20230705095514946.jpg"></img>
    <div class="mtext1"> 스타벅스 1호점 바닐라 빈 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004728]_20230705095319596.jpg"></img>
    <div class="mtext1"> 스타벅스 1호점 카페 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128692]_20210426091933665.jpg"></img>
    <div class="mtext1"> 스타벅스 돌체 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/04/[9200000004120]_20220412082952150.png"></img>
    <div class="mtext1"> 아이스 라벤더 카페 브레베 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001941]_20210225094346653.jpg"></img>
    <div class="mtext1"> 아이스 바닐라 빈 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004734]_20230705095557184.jpg"></img>
    <div class="mtext1"> 아이스 스타벅스 1호점 바닐라 빈 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004730]_20230705095423060.jpg"></img>
    <div class="mtext1"> 아이스 스타벅스 1호점 카페 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128695]_20210426092031969.jpg"></img>
    <div class="mtext1"> 아이스 스타벅스 돌체 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/05/[9200000005285]_20240509131125335.jpg"></img>
    <div class="mtext1"> 아이스 인절미 크림 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110569]_20210415143035989.jpg"></img>
    <div class="mtext1"> 아이스 카페 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/05/[9200000005284]_20240509131037171.jpg"></img>
    <div class="mtext1"> 인절미 크림 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg"></img>
    <div class="mtext1"> 카페 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110566]_20210415134334280.jpg"></img>
    <div class="mtext1"> 아이스 카페 모카 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110572]_20210415155545375.jpg"></img>
    <div class="mtext1"> 아이스 화이트 초콜릿 모카 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[46]_20210415134438165.jpg"></img>
    <div class="mtext1"> 카페 모카 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004313]_20221005145156959.jpg"></img>
    <div class="mtext1"> 클래식 민트 모카 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128192]_20210415155639126.jpg"></img>
    <div class="mtext1"> 화이트 초콜릿 모카 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000005181]_20240326103832835.jpg"></img>
    <div class="mtext1"> 아이스 플랫 화이트 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000005178]_20240326103727795.jpg"></img>
    <div class="mtext1"> 플랫 화이트 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110612]_20210415133425373.jpg"></img>
    <div class="mtext1"> 바닐라 스타벅스 더블 샷 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002950]_20210426150654756.jpg"></img>
    <div class="mtext1"> 블론드 바닐라 더블 샷 마키아또 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003505]_20210322093241535.jpg"></img>
    <div class="mtext1"> 사케라또 아포가토 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003506]_20210322093317854.jpg"></img>
    <div class="mtext1"> 스파클링 시트러스 에스프레소 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002953]_20210427132718157.jpg"></img>
    <div class="mtext1"> 아이스 블론드 바닐라 더블 샷 마키아또 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[20]_20210415144112678.jpg"></img>
    <div class="mtext1"> 에스프레소 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110611]_20210415132507539.jpg"></img>
    <div class="mtext1"> 커피 스타벅스 더블 샷 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001631]_20210225090916684.jpg"></img>
    <div class="mtext1"> 클래식 아포가토 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110614]_20210415132333109.jpg"></img>
    <div class="mtext1"> 헤이즐넛 스타벅스 더블 샷 </div>
    </div>

     <div class="menu1"> 
      프라푸치노 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50">
      <span class="menu2"> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
    </div>
     
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/06/[9200000005295]_20240627153404971.jpg"></img>
    <div class="mtext1"> 더 멜론 오브 멜론 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/06/[9200000005367]_20240612090850191.jpg"></img>
    <div class="mtext1"> 송당 자몽 망고 코코 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168007]_20210415144337428.jpg"></img>
    <div class="mtext1"> 에스프레소 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002090]_20220329144732789.jpg"></img>
    <div class="mtext1"> 제주 쑥떡 크림 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168066]_20210415154429750.jpg"></img>
    <div class="mtext1"> 카라멜 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168013]_20210415155746379.jpg"></img>
    <div class="mtext1"> 화이트 초콜릿 모카 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002088]_20200921171733532.jpg"></img>
    <div class="mtext1"> 제주 까망 크림 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002502]_20210426100408048.jpg"></img>
    <div class="mtext1"> 제주 말차 크림 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002090]_20220329144732789.jpg"></img>
    <div class="mtext1"> 제주 쑥떡 크림 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[168066]_20210415154429750.jpg"></img>
    <div class="mtext1"> 초콜릿 크림 칩 프라푸치노</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002403]_20210419131548656.jpg"></img>
    <div class="mtext1"> 화이트 타이거 프라푸치노 </div>
    </div>

    <div class="menu1"> 
      블렌디드 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
      <span style="font-size:50%;" > 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
     </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/06/[9200000005298]_20240627154148523.jpg"></img>
    <div class="mtext1"> 제주 팔삭 자몽 허니 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/02/[9200000004512]_20230207150514347.jpg"></img>
    <div class="mtext1"> 망고 패션 티 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004716]_20231115093249233.jpg"></img>
    <div class="mtext1"> 북한산 레몬 얼 그레이 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/12/[9200000004945]_20231205083518102.jpg"></img>
    <div class="mtext1"> 스타벅스 클래식 밀크티 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004870]_20230905110300360.jpg"></img>
    <div class="mtext1"> 여수 바다 유자 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg"></img>
    <div class="mtext1"> 딸기 딜라이트 요거트 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[169001]_20210419130701792.jpg"></img>
    <div class="mtext1"> 망고 바나나 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005379]_20240709130615114.jpg"></img>
    <div class="mtext1"> 스타벅스 판다 쿠키 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004871]_20230922091835355.jpg"></img>
    <div class="mtext1"> 코튼 스카이 요거트 블렌디드 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/05/[9200000004780]_20240527130611426.jpg"></img>
    <div class="mtext1"> 피치 망고 블렌디드 </div>
    </div>

    <div class="menu1"> 
      스타벅스 리프레셔 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
      <span style="font-size:50%;" > 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
     </div>

     <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004753]_20230720103623021.jpg"></img>
    <div class="mtext1"> 딸기 아사이 레모네이드 스타벅스 리프레 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9200000003763]_20220803131322551.jpg"></img>
    <div class="mtext1"> 딸기 아사이 레모네이드 스타벅스 리프레셔 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004439]_20230710134159744.jpg"></img>
    <div class="mtext1"> 망고 용과 레모네이드 스타벅스 리프레셔 </div>
    </div>

    <div class="menu1"> 
      스타벅스 피지오 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
      <span style="font-size:50%;" > 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
     </div>

     <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004949]_20231005084714271.jpg"></img>
    <div class="mtext1"> 레드 애플 피지오 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/05/[9200000005283]_20240509131233446.jpg"></img>
    <div class="mtext1"> 리버 피치 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/01/[9200000004948]_20240103144748363.jpg"></img>
    <div class="mtext1"> 아이스크림 레드 애플 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004751]_20230907153225204.jpg"></img>
    <div class="mtext1"> 여수 바다 자몽 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/05/[9200000004121]_20220517102911610.jpg"></img>
    <div class="mtext1"> 유자 패션 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/01/[9200000004946]_20240103144959834.jpg"></img>
    <div class="mtext1"> 제주팔삭 셔벗 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004947]_20231005084610514.jpg"></img>
    <div class="mtext1"> 제주팔삭 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[107051]_20210419112151972.jpg"></img>
    <div class="mtext1"> 쿨 라임 피지오 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/05/[9200000004567]_20230524144959475.jpg"></img>
    <div class="mtext1"> 피치 딸기 피지오 </div>
    </div>

    <div class="menu1"> 
      티(티바나) <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
      <span style="font-size:50%;" > 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
     </div>

     <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005286]_20240704085652726.jpg">
      <div class="mtext1"> 런던 포그 티 라떼</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005289]_20240704090111428.jpg">
      <div class ="mtext1"> 아이스 런던 포그 티 라떼</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000056]_20210415135215632.jpg">
      <div class="mtext1"> 민트 블렌드 티</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000059]_20210415141656038.jpg">
      <div class="mtext1"> 아이스 민트 블렌드 티</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000039]_20210415142055860.jpg">
      <div class="mtext1"> 아이스 얼 그레이 티</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000229]_20210415142219481.jpg">
      <div class="mtext1"> 아이스 유스베리 티</div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/04/[9200000002959]_20220411155904911.jpg">
      <div class="mtext1"> 아이스 유자 민트 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000019]_20210415142323353.jpg">
      <div class="mtext1"> 아이스 잉글리쉬 브렉퍼스트 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[400400000094]_20210415230316469.jpg">
      <div class="mtext1"> 아이스 제주 유기농 녹차로 만든 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004944]_20231005084446254.jpg">
      <div class="mtext1"> 아이스 제주팔삭 & 자몽 허니 블랙 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000079]_20210415143641139.jpg">
      <div class="mtext1"> 아이스 캐모마일 블렌드 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000069]_20210415143811231.jpg">
      <div class="mtext1"> 아이스 히비스커스 블렌드 티 </div>
    </div>


    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000226]_20210415144434521.jpg">
      <div class="mtext1"> 얼 그레이 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000036]_20210415143933425.jpg">
      <div class="mtext1"> 유스베리 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/04/[9200000002956]_20220411155551915.jpg">
      <div class="mtext1"> 유자 민트 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000016]_20210415153648533.jpg">
      <div class="mtext1"> 잉글리쉬 브렉퍼스트 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000187]_20210419131229539.jpg">
      <div class="mtext1"> 자몽 허니 블랙 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[400400000091]_20210415132229904.jpg">
      <div class="mtext1"> 제주 유기농 녹차로 만든 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004943]_20231005084424843.jpg">
      <div class="mtext1"> 제주팔삭 & 자몽 허니 블랙 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000076]_20210415154920731.jpg">
      <div class="mtext1"> 캐모마일 블렌드 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[4004000000066]_20210415155836395.jpg">
      <div class="mtext1"> 히비스커스 블렌드 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/04/[9200000004566]_20230407153247174.jpg">
      <div class="mtext1"> 레드 파워 패션 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005310]_20240717132942737.jpg">
      <div class="mtext1"> 레몬 캐모마일 블렌드 티 </div>
    </div>
    
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/12/[9200000004990]_20231212110704134.jpg">
      <div class="mtext1"> 복숭아 아이스 티 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005307]_20240717132740902.jpg">
      <div class="mtext1"> 복숭아 아이스 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005304]_20240717132620949.jpg">
      <div class="mtext1"> 복숭아 핫 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/12/[9200000004991]_20231212110749533.jpg">
      <div class="mtext1"> 아이스 레몬 캐모마일 블렌드 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000190]_20210419131723532.jpg">
      <div class="mtext1"> 아이스 자몽 허니 블랙 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/07/[9200000004769]_20230720103743478.jpg">
      <div class="mtext1"> 아이스 자몽 허니 블랙 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004954]_20231127093740735.jpg">
      <div class="mtext1"> 말차 티라미수 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004933]_20230914141717984.jpg">
      <div class="mtext1"> 스타벅스 클래식 밀크 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004942]_20231005093131816.jpg">
      <div class="mtext1"> 스타벅스 클래식 밀크 티 보틀 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004955]_20231127093837610.jpg">
      <div class="mtext1"> 아이스 말차 티라미수 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004936]_20230914141811407.jpg">
      <div class="mtext1"> 아이스 스타벅스 클래식 밀크 티 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/01/[9200000004288]_20230118085139616.jpg">
      <div class="mtext1"> 아이스 얼 그레이 바닐라 티 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002499]_20210419130902541.jpg">
      <div class="mtext1"> 아이스 제주 말차 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[135612]_20210415142512793.jpg">
      <div class="mtext1"> 아이스 차이 티 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/01/[9200000004285]_20230118084943128.jpg">
      <div class="mtext1"> 얼 그레이 바닐라 티 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002496]_20210419131039350.jpg">
      <div class="mtext1"> 제주 말차 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[135608]_20210415154244810.jpg">
      <div class="mtext1"> 차이 티 라떼 </div>
    </div>


    <div class="menu1"> 
      기타 제조 음료 <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
      <span style="font-size:50%;" > 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외) </span>
     </div>

     <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/12/[9200000004950]_20231204090636952.jpg">
      <div class="mtext1"> 딸기 콜드폼 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[72]_20210415140949967.jpg">
      <div class="mtext1"> 시그니처 핫 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110621]_20210415140901611.jpg">
      <div class="mtext1"> 아이스 시그니처 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004953]_20231127094019543.jpg">
      <div class="mtext1"> 아이스 티라미수 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004952]_20231127093937845.jpg">
      <div class="mtext1"> 티라미수 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003658]_20210422080248176.jpg">
      <div class="mtext1"> 플러피 판다 아이스 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002594]_20210422080327783.jpg">
      <div class="mtext1"> 플러피 판다 핫 초콜릿 </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/11/[9200000004951]_20231102101647442.jpg">
      <div class="mtext1"> 딸기 콜드폼 딸기 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003659]_20210428134252131.jpg">
      <div class="mtext1"> 스타벅스 슬래머 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[17]_20210426095334934.jpg">
      <div class="mtext1"> 스팀 우유</div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000001302]_20200921171804529.jpg">
      <div class="mtext1"> 아이스 제주 까망 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[18]_20210426095514018.jpg">
      <div class="mtext1"> 우유 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000001301]_20200921171639781.jpg">
      <div class="mtext1"> 제주 까망 라떼 </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/10/[9200000004957]_20231005084829402.jpg">
      <div class="mtext1"> 제주팔삭 셔벗 </div>
    </div>

    <div class="menu1"> 
      스타벅스 주스(병음료) <img src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png" width="50" >
     </div>

     <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004346]_20240328133443928.jpg">
      <div class="mtext1"> ABC 클렌즈 190ML </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004347]_20240328133658258.jpg">
      <div class="mtext1"> 레몬 진저 클렌즈 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004348]_20240328133830383.jpg">
      <div class="mtext1"> 케일 클렌즈 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[5210008070]_20210426095034991.jpg">
      <div class="mtext1"> 딸기주스 190ML </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[5210008061]_20210426095229362.jpg">
      <div class="mtext1"> 망고주스 190ML </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9300000003773]_20211020094026246.jpg">
      <div class="mtext1"> 스타 루비 자몽 스위트 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9300000003771]_20211020093812909.jpg">
      <div class="mtext1"> 유기농 오렌지 100% 주스 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9300000003772]_20211020095105008.jpg">
      <div class="mtext1"> 유기농 오렌지 100% 주스 591ML </div>
    </div>

    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[5210008072]_20210426100712780.jpg">
      <div class="mtext1"> 케일&사과주스 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9300000003776]_20211020094321785.jpg">
      <div class="mtext1"> 핑크 용과 레모네이드 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2023/03/[5210008055]_20230331142558998.jpg">
      <div class="mtext1"> 한라봉주스 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000002565]_20210426102753285.jpg">
      <div class="mtext1"> 햇사과 주스 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9300000004407]_20221027102828231.jpg">
      <div class="mtext1"> 햇사과 주스 591ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/10/[9300000003775]_20211020094208342.jpg">
      <div class="mtext1"> 딸기 가득 요거트 190ML </div>
    </div>
    <div class="box">
      <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[5210008063]_20210419104847612.jpg">
      <div class="mtext1"> 블루베리 요거트 190ML </div>
    </div>

  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>