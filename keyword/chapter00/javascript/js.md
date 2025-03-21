### 원시 타입 (Primitive Type)

쉽게 정의하면 객체가 아닌 다른 모든 타입을 의미. 객체가 아니기에, 이러한 원시 타입은 메서드를 갖고 있지 않음.

- number 🍠

    - JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
        - 더하기
        ```javascript
        console.log(a+b);
        ```
        - 빼기
        ```javascript
        console.log(a-b);
        ```
        - 곱하기
        ```javascript
        console.log(a*b);
        ```
        - 나누기
        ```javascript
        console.log(a/b);
        ```
        - 나머지 구하기
        ```javascript
        console.log(a%b);
        ```
        - 거듭 제곱
        ```javascript
        console.log(a**b); //a^b
        ```

    - JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
        1. 기본 비교 연산자 (`==`,`===`,`!=`,`!==`)
            - `==`: 값이 같으면 `true` 반환
            - `===`: 값과 자료형이 모두 같아야 `true` 반환
            - `!=`: 값이 다르면 `true` 반환
            - `!==`: 값 또는 자료형이 다르면 `true` 반환

        ```javascript
        console.log(5 == "5");  // true  (자료형 무시)
        console.log(5 != "5");  // false (자료형 무시)
        console.log(5 === "5"); // false (자료형 다름)
        console.log(5 !== "5"); // true  (자료형 다름)
        ```
        
        2. 대소 비교 연산자 (`>`,`<`,`>=`,`<=`)
            - `>`: 왼쪽 값이 크면 `true`
            - `<`: 오른쪽 값이 크면 `true`
            - `>=`: 왼쪽 값이 크거나 같으면 `true`
            - `<=`: 오른쪽 값이 크거나 같으면 `true`

        ```javascript
        console.log(10 > 5);  // true
        console.log(10 < 5);  // false
        console.log(10 >= 10); // true
        console.log(10 <= 5);  // false
        ```

        3. 논리 연산자 (`&&`,`||`,`!`)
            - `&&`(AND): 둘 다 참일 때만 `true`
            - `||`(OR): 둘 중 하나만 참이어도 `true`
            - `!`(NOT): 반대 값 반환
        ```javascript
        console.log((10 > 5) && (5 < 8)); // true  (둘 다 참)
        console.log((10 < 5) || (5 < 8)); // true  (하나만 참이어도 true)
        console.log(!(10 > 5));  // false (true의 반대)
        ```

        4. 삼항 연산자 (condition ? true값 : false값)
            - `if-else`문을 한 줄로 줄일 때 사용
        ```javascript
        let age = 20;
        let result = (age >= 18) ? "성인" : "미성년자";
        console.log(result); // "성인"
        ```

    - JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠

        1. `++`(증가 연산자), `--`(감소 연산자)
            - `++x`: 먼저 1 증가 후 그 값 사용
            - `x++`: 현재 값 사용 후 1 증가
            - `--x`: 먼저 1 감소 후 그 값 사용
            - `x--`: 현재 값 사용 후 1 감소
            
            ```javascript
            let x = 5;
            console.log(++x); // 6 (전위 연산: 먼저 증가 후 출력)
            console.log(x);   // 6

            let y = 5;
            console.log(y++); // 5 (후위 연산: 출력 후 증가)
            console.log(y);   // 6
            ```
        
        2. 복합 대입 연산자 (`+=`,`-=`,`*=`,`/=`,`%=`,`**=`)
            ```javascript
            let a = 10;

            a += 3; // a = a + 3 (13)
            a -= 2; // a = a - 2 (11)
            a *= 2; // a = a * 2 (22)
            a /= 2; // a = a / 2 (11)
            a %= 3; // a = a % 3 (2)
            a **= 2; // a = a ** 2 (4)
            console.log(a);
            ```

        3. 함수를 사용한 증가/감소
            ```javascript
            function increase(n) {
                return n + 1;
            }
            function decrease(n) {
                return n - 1;
            }

            console.log(increase(10)); // 11
            console.log(decrease(10)); // 9
            ```

    - 연산자 우선순위에 대해 작성해주세요. 🍠
        -덧셈(+), 뻴셈(-) < 곱셈(*), 나눗셈(/), 나머지(%) 먼저 계산

- string 🍠

    문자열(string)은 텍스트 데이터를 다룰 때 사용

    ```javascript
    let str1 = "Hello";   // 큰따옴표
    let str2 = 'World';   // 작은따옴표

    let name = "Teri";
    let message = `Hello, ${name}!`;  // 백틱엔 변수삽입 가능!
    console.log(message);  // Hello, Teri!

    // 문자열 길이 확인: length
    console.log(name.length); // 4

    // 문자열 인덱싱: [], charAt
    console.log(str1[0]); //'H' (대괄호 표기법)
    console.log(str1.charAt(1)); //'e' (charAt 메서드)
    console.log(str1[str1.length-1]); //'o': 마지막 문자 가져오기

    // 문자열 합치기: +, concat
    console.log(str1 + " " + str2); //Hello World
    console.log(str1.concat(" ", str2)); //Hello World

    // 문자열 일부 추출: slice, substring, substr
    let str = "JavaScript";

    console.log(str.slice(0, 4)); // "Java" 0부터 4전까지 자르기
    console.log(str.substring(0, 4)); // "Java" 0부터 4전까지 (음수사용불가)
    console.log(str.substr(4, 6)); // "Script" 4부터 6길이만큼 (옛날방식)

    // 문자열 변환
    let str = "  JavaScript  ";

    console.log(str.toUpperCase()); // "  JAVASCRIPT  "
    console.log(str.toLowerCase()); // "  javascript  "
    console.log(str.trim()); // "JavaScript" (앞뒤 공백제거)
    console.log("Hi ".repeat(3)); // "Hi Hi Hi "

    // 문자열 검색
    let str = "Hello World";

    console.log(str.indexOf("o")); // 4 (처음 찾은 위치 반환, 없으면 -1)
    console.log(str.lastIndexOf("o")); // 7 (마지막 위치 반환)
    console.log(str.includes("World")); // true (포함 여부 t/f)
    console.log(str.startsWith("Hell")); // true (특정 문자열로 시작하는지 t/f)
    console.log(str.endsWith("ld")); // true (특정 문자열로 끝나는지 t/f)

    // 문자열 대체: replace
    let text = "I love JavaScript!";
    console.log(text.replace("JavaScript", "Python")); // "I love Python!"

    let str = "apple, Apple, APPLE"; // 정규 표현식 사용 가능
    console.log(str.replace(/apple/gi, "banana")); // "banana, banana, banana"

    // 문자열 분할: spilt
    let str = "apple,banana,grape";
    let fruits = str.split(","); // ['apple', 'banana', 'grape']

    // 문자열 -> 숫자 변환
    console.log(parseInt("42")); // 42 (정수)
    console.log(parseFloat("42.5")); // 42.5 (실수)
    console.log(Number("42.5")); // 42.5
    ```


- bigint 🍠
    - `Number` 의 최대 표현 정수(2^53-1) 이상의 큰 정수를 다룰 때 사용하는 JS 데이터 타입

    ```javascript
    // bigint 생성법 1) n 붙이기
    let bigNum = 123456789012345678901234567890n;
    console.log(bigNum); // 123456789012345678901234567890n
    console.log(typeof bigNum); // "bigint"

    // 2) BigInt() 함수 사용 (소수점 사용 XX)
    let bigNum2 = BigInt("123456789012345678901234567890");
    console.log(bigNum2); // 123456789012345678901234567890n
    ```

    - `Number`는 최대 2^53-1의 정수 출력, 그 이상이면 정확한 값이 나오지 않는 오류발생
    - `BibInt`를 사용하면 정확한 계산 가능!

    ```javascript
    let num = 9007199254740991;
    console.log(num + 1); // ❌ 9007199254740992 (정확 X)
    console.log(num + 2); // ❌ 9007199254740992 (오류 발생!)

    let bigNum = 9007199254740991n;
    console.log(bigNum + 1n); // ✅ 9007199254740992n
    console.log(bigNum + 2n); // ✅ 9007199254740993n
    ```

    - `BigInt` 연산 (사칙연산) --> 똑같이 다됨
    ```javascript
    let a = 100000000000000000000n;
    let b = 200000000000000000000n;

    console.log(a + b); // 300000000000000000000n
    console.log(a - b); // -100000000000000000000n
    console.log(a * b); // 20000000000000000000000000000000000000000n
    console.log(b / a); // 2n (정수 나눗셈, 소수점 버림)
    console.log(b % a); // 0n (나머지 연산)
    console.log(2n ** 10n); // 1024n (거듭제곱)

    console.log(7n / 3n); //2n (나눗셈은 정수값만 반환!, 소수점 버림)
    ```

    - `BigInt`와 `Number`는 다른 타입으로 같이 사용 불가!
    ```javascript
    let big = 10n;
    let num = 5;
    console.log(big + num); // ❌ TypeError: Cannot mix BigInt and other types

    // BigInt -> Number 변환: Number()
    console.log(Number(10n) + 5); // ✅ 15

    // Number -> BigInt 변환: BigInt(), 변환시 소수점 버려짐
    console.log(BigInt(5) + 10n); // ✅ 15n
    console.log(BigInt(3.14)); // 3n (소수점 버려짐)
    ```

    - 그치만 `BigInt`와 `Number` 비교 연산은 가능
    ```javascript
    console.log(10n > 5); // ✅ true
    console.log(10n === 10); // ❌ false (타입 다름)
    console.log(10n == 10); // ✅ true (자동 변환)
    ```

### 객체 타입 (Object Type)

위의 7개 원시 타입 제외 자바스크립트를 이루고 있는 대부분의 타입이 객체 타입. 여기에는 배열, 함수, 정규식, 클래스 등이 포함된다.

여기서 한 가지 주목할 것이 **`객체 타입은 참조를 전달`**하기에, **`참조 타입`**으로도 불린다는 것이다.

```jsx
const hello1 = () => {}; 
const hello2 = () => {};
```

위의 내용을 보면 실제로, 함수의 내용이 같아 보입니다. 하지만, 서로의 참조가 다르기에 false가 반환됨을 알 수 있습니다.

```jsx
hello1 === hello2 // false
```

- array

다양한 Array method에 대해 정리해주세요. 🍠

    - sort 🍠: 배열 정렬 (기본: 문자열 기준)

    ```javascript
    let numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort();
    console.log(numbers); // X [1, 10, 100, 25, 40, 5] (문자열 정렬됨)

    numbers.sort((a, b) => a - b);
    console.log(numbers) // O [1, 5, 10, 25, 40, 100] (숫자 정렬)
    ```
    숫자 정렬 시 `a-b`(오름차순), `b-a` (내림차순) 사용! 

    - join 🍠
    - reverse 🍠
    - splice 🍠
    - slice 🍠
    - find 🍠
    - filter 🍠
    - map 🍠
    - reduce 🍠
    - some  🍠
    - every 🍠
    - forEach 🍠