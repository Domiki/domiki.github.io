var store = [{
        "title": "좋은 알고리즘이란?",
        "excerpt":"알고리즘이란? 컴퓨터 알고리즘: 컴퓨터가 어떤 문제를 해결하기 위해서 컴퓨터가 이해할 수 있는 방식으로 정리되어 있는 해결 방법 하나의 문제, 여러 가지 알고리즘 탐색 저장된 정보들 중에서 원하는 값을 찾는 것 선형 탐색 알고리즘(linear search algorithm) def linear_search(element, some_list): for i in range(len(some_list)): if some_list[i] == element: return i return None...","categories": ["Coding","Computer Science","Algorithm"],
        "tags": [],
        "url": "/coding/computer%20science/algorithm/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%981/",
        "teaser": null
      },{
        "title": "재귀함수",
        "excerpt":"재귀 함수 재귀(Recursion) 재귀 함수(Recursive Function): 자기 자신을 호출하는 함수 재귀적으로 문제를 푼다는 것 같은 형태의 더 작은 문제(부분 문제(Subproblem))를 풀고 부분 문제의 답을 이용해서 기존 문제를 푸는 것 e.g. $n!$       $n=0$인 경우 $n!=1$ base case $n&gt;0$인 경우 $n!=(n-1)!\\times n$ recursive case def factorial(n): if n ==...","categories": ["Coding","Computer Science","Algorithm"],
        "tags": [],
        "url": "/coding/computer%20science/algorithm/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%982/",
        "teaser": null
      },{
        "title": "알고리즘 패러다임",
        "excerpt":"Brute Force Brute-Force Attack: 무차별 대입 공격 Brute Force의 장점 직관적이고 명확하다. 답을 확실하게 찾을 수 있다. Brute Force 알고리즘은 비효율적 Input이 엄청 클 경우? ⇒ 효율적인 알고리즘의 첫 시작은 Brute Force Divide and Conquer Divide and Conquer(분할 정복) Divide Conquer → Divide, Conquer, Combine … Combine Merge Sort(합병 정렬)...","categories": ["Coding","Computer Science","Algorithm"],
        "tags": [],
        "url": "/coding/computer%20science/algorithm/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%983/",
        "teaser": null
      },{
        "title": "문제 해결 능력 기르기",
        "excerpt":"투자 귀재 규식이 II 규식이는 친구들 사이에서 투자의 귀재로 알려져 있습니다. 페이수북과 인수타그램에 자신의 성과를 과시하기 때문인데요. 사실 규식이가 그 정도의 실력자는 아닙니다. 성과가 좋을 때에만 SNS에 공유해서 그렇게 비춰질 뿐이죠. 계속해서 멋진 모습을 보여주기 위해, 특정 기간 중 수익이 가장 큰 구간을 찾아내는 함수 sublist_max를 작성해 보려고 합니다. Divide...","categories": ["Coding","Computer Science","Algorithm"],
        "tags": [],
        "url": "/coding/computer%20science/algorithm/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%984/",
        "teaser": null
      },{
        "title": "기본 자료 구조들",
        "excerpt":"자료 구조란? 자료 구조: 데이터의 효율적인 접근 및 조작을 가능하게 하는 저장 및 관리 방식 컴퓨터가 데이터를 저장하는 방법 데이터가 저장하는 곳 스토리지(Storage): 데이터가 영구적으로 저장되는 곳 데이터를 저장하는 데 오래 걸린다. 데이터를 받아오는 데 오래 걸린다. 메모리(Memory): 데이터가 임시로 저장되는 곳 ⇒ 메모리 데이터를 저장하는 데 빠르다. 데이터를 받아오는...","categories": ["Coding","Computer Science","Data Structure"],
        "tags": [],
        "url": "/coding/computer%20science/data%20structure/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B01/",
        "teaser": null
      },{
        "title": "트리",
        "excerpt":"트리란? 트리: 데이터 상-하 관계를 저장하는 자료 구조 계층적 관계 e.g. 컴퓨터 폴더 구조, 클래스 상속 관계 트리 용어 뿌리 노드(root node): 트리의 시작 노드 부모 노드: 특정 노드의 직속 상위 노드 자식 노드: 특정 노드의 직속 하위 노드 형제 노드: 같은 부모를 같는 노드 leaf 노드(잎/말단 노드): 자식 노드를...","categories": ["Coding","Computer Science","Data Structure"],
        "tags": [],
        "url": "/coding/computer%20science/data%20structure/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B02/",
        "teaser": null
      },{
        "title": "그래프",
        "excerpt":"그래프란? 그래프: 연결 데이터를 저장할 수 있는 자료 구조 연결 관계를 표현 e.g. 위치 데이터, 사회 연결망, 통신, 생물(유전자와 단백질 상호 관계) … c.f. 선형적 자료구조(배열, 링크드 리스트), 계층적 자료구조(트리) 그래프 기본 그래프 노드: 하나의 데이터 단위를 나타내는 객체 그래프 엣지: 두 노드의 직접적인 연결 관계 데이터. (노드1, 노드2) 또는...","categories": ["Coding","Computer Science","Data Structure"],
        "tags": [],
        "url": "/coding/computer%20science/data%20structure/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B03/",
        "teaser": null
      },{
        "title": "JavaScript 기초",
        "excerpt":"자바스크립트 기초 HTML 파일의 body 부분에 &lt;script src=\"index.js\"&gt;&lt;/script&gt;를 추가함으로써 자바스크립트 파일을 사용할 수 있다. 코멘트: 여러 줄 /* */, 한 줄 // 1. 숫자형(Number) 선언 let i = 1; let j = 1.5; let k = -3; 연산 console.log(1 + 8); // 9 console.log(6 - 7); // -1 console.log(2 *...","categories": ["Coding","Language","JavaScript"],
        "tags": [],
        "url": "/coding/language/javascript/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EC%B4%88/",
        "teaser": null
      },{
        "title": "데이터 사이언스 기본",
        "excerpt":"데이터 사이언스란? 데이터 사이언스: 데이터를 다루는 일 데이터가 많다 → 할 수 있는 일이 많다 데이터 사이언스 프로세스 문제 정의하기: 해결하고자 하는 문제를 정의 목표 설정: 기간 설정, 평가 방법 설정, 필요한 데이터 설정 데이터 모으기: 필요한 데이터를 모을 수 있는 방법 찾기 웹 크롤링, 자료 모으기, 파일 읽고 쓰기...","categories": ["Coding","Computer Science","Data Science"],
        "tags": [],
        "url": "/coding/computer%20science/data%20science/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A41/",
        "teaser": null
      },{
        "title": "DataFrame 다루기",
        "excerpt":"DataFrame 인덱싱 인덱싱 결과 한 줄인 경우의 type ⇒ pandas.Series 인덱싱 결과 여러 줄인 경우의 type ⇒ pandas.DataFrame 한 값만 가져오기 df.loc[\"row\", \"col\"] 이름으로 인덱싱하기   기본 형태 단축 형태 하나의 row 이름 df.loc[\"row\"] df.loc[\"row\", :]   row 이름의 리스트 df.loc[[\"row1\", \"row2\", \"row3\"]] df.loc[[\"row1\", \"row2\", \"row3\"], :]   row 이름의...","categories": ["Coding","Computer Science","Data Science"],
        "tags": [],
        "url": "/coding/computer%20science/data%20science/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A42/",
        "teaser": null
      },{
        "title": "데이터 분석과 시각화",
        "excerpt":"시각화와 그래프 df.plot(): 그래프 그리기 y='col, y=['col1', 'col2']: 원하는 column만 그래프로 보기 df['col1'].plot(), df[['col1', 'col2']].plot()과 동일 pandas Series에도 plot 함수 사용 가능 그래프 종류 설정 ⇒ kind 옵션 활용 선 그래프(기본값): kind='line' 막대 그래프: kind='bar' 가로 막대 그래프: kind='barh' 쌓아올리기: stacked=True x축: x='col' 파이 그래프: kind='pie' 히스토그램: kind='hist' y축: y='col'...","categories": ["Coding","Computer Science","Data Science"],
        "tags": [],
        "url": "/coding/computer%20science/data%20science/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A43/",
        "teaser": null
      },{
        "title": "데이터 퀄리티 높이기",
        "excerpt":"좋은 데이터의 기준 완결성(Completeness): 필수적인 데이터는 모두 기록되어 있어야 함 결측값(채워져야 하는데 비어 있는 값, NaN(Not a Number))이 없어야 함 유일성(Uniqueness): 동일한 데이터가 불필요하게 중복되어 있으면 안 됨 예&gt; 가입기록 ⇒ 이메일 인증, 휴대폰 번호 본인 확인, 주민등록번호 본인 확인 통일성(Conformity): 데이터가 동일한 형식으로 저장되어 있어야 함 표기법, 포멧 등...","categories": ["Coding","Computer Science","Data Science"],
        "tags": [],
        "url": "/coding/computer%20science/data%20science/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A44/",
        "teaser": null
      },{
        "title": "데이터 만들기",
        "excerpt":"데이터를 만드는 방법 데이터 다운로드 받기 서울열린데이터광장 공공데이터포털 e-나라지표 국가통계포털 서울특별시 빅데이터 캠퍼스 통계청 구글 데이터 검색 캐글 Awesome Public Datasets Github Data and Story Library 데이터허브 센서 사용하기: 아두이노, 라즈베리파이 등 웹에서 모으기 웹 스크레이핑(Web Scraping): 하나의 특정 웹페이지에서 원하는 정보를 얻어오기 웹 크롤링(Web Crawling): 여러 페이지에서 원하는 정보를...","categories": ["Coding","Computer Science","Data Science"],
        "tags": [],
        "url": "/coding/computer%20science/data%20science/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A45/",
        "teaser": null
      }]
