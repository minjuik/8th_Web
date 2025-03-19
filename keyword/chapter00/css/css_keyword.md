### border vs outline
    
```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          margin-bottom: 40px;
          box-sizing: border-box;
        }
    
        .box1 {
          border: 10px solid black;
        }
    
        .box2 {
          outline: 10px solid red;
        }
      </style>
    </head>
    
    <body>
      <div class="box box1">border-box</div>
      <div class="box box2">content-box</div>
    </body>
    
    </html>
```
- border VS outline의 차이점
    - 둘 다 요소의 테두리를 정의하는 속성.
      - border: 요소의 박스 모델 안쪽, 요소 크기에 포함(width, height에 영향)
      - outline: 요소의 경계 바깥쪽, 요소 크기에 포함되지 않음
      - 본인이 VSCode를 통해 여러번 실행시켜보며 개발자 도구와, 캡처한 이미지를 활용하여 어떠한 차이점을 갖고 있는지 상세하게 정리해주세요! ->??ㅠㅠ
     
### relative / absolute

1. relative 실습
  <aside>
   <img width="559" alt="스크린샷 2024-07-18 오후 6 56 12" src="https://github.com/user-attachments/assets/277f8a05-8123-431d-a06f-6b4b3e3ce3a2" />

<img width="568" alt="스크린샷 2024-07-18 오후 6 57 43" src="https://github.com/user-attachments/assets/e595d3c8-3a51-4cff-8e2c-05d8e151b6ff" />

    
💡 Q: 그럼, 한번 여러분들이 이번에는 위의 이미지 상태에서 고구마 상자를 아래와 같은 이미지처럼 이동시켜 주세요. 

Hint: `bottom`과 `right`속성을 활용해서 진행해주세요. 필요시 고구마 상자 글씨 태그에 class 명을 부여해도 좋습니다.

⭐️ 꼭 양수만 사용할 수 있는 것은 아닙니다! ⭐️

</aside>

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: purple;
      color: white;
      box-sizing: border-box;
      position: relative;
      bottom: -160px;
      right: 2px;
    }
  </style>
</head>

<body>
  <div class="box">BOX</div>
  <h1>고구마 상자</h1>
</body>

</html>
```

박스가 고구마 상자가 위에서 글씨 아래쪽에 위치 & 왼쪽으로 당겨짐

  * bottom: 아래에서 n만큼 떨어져잇음을 나타냄. 값을 음수로
  * right: 오른쪽에서 n만큼 떨어져잇음을 나타냄. 값을 양수로

![스크린샷 2025-03-19 150104](https://github.com/user-attachments/assets/45063246-af27-4c7c-8fd5-17a20da3ee23)


2. absolute 실습

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
    * {
      margin: 0;
      box-sizing: border-box;
    }

    .box1 {
      width: 500px;
      height: 500px;
      background-color: purple;
      color: white;
      position: relative;
    }

    .box2 {
      width: 200px;
      height: 200px;
      background-color: yellow;
    }
  </style>
</head>

<body>
  <div class="box1">BOX1</div>
  <h1 class="box2">BOX2</h1>
</body>

</html>
```
- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    
    <img width="505" alt="스크린샷 2024-07-18 오후 7 13 52" src="https://github.com/user-attachments/assets/67a3c027-156f-4e1c-9ede-af3d24f44724" />

    코드는 아래에 첨부해주세요!
  
    ```html
    <!DOCTYPE html>
    <html lang="en">

        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
            * {
              margin: 0;
              box-sizing: border-box;
            }

            .box1 {
              width: 500px;
              height: 500px;
              background-color: purple;
              color: white;
              position: relative;
            }

    .        box2 {
              width: 200px;
              height: 200px;
              background-color: yellow;
              position: absolute;
              top: 0px;
            }
          </style>
        </head>

        <body>
          <div class="box1">BOX1</div>
          <h1 class="box2">BOX2</h1>
        </body>

    </html>
    ```

    box2가 아래에서 위로 올라감 (box1 상단까지) -> box2 위치 absolute 후 top:0px;

  ![스크린샷 2025-03-19 151413](https://github.com/user-attachments/assets/c1b9f5b2-ce3c-4f14-ad37-05545b8388ed)

  
### 정렬의 진수 ⭐⭐⭐

- **`text-align`**: 텍스트(인라인 요소)를 정렬할 때 사용
    - 속성으로 left(왼쪽 정렬), rignt(오른쪽 정렬), center(가운데 정렬), justify(양쪽 정렬(문단 정렬))가 있다.
 
      ```css
      .text-box {
          text-align: center; /* 텍스트를 가운데 정렬 */
      }
      ```
      ```html
      <div class="text-box">안녕하세요!</div>
      ```
      결과: `"안녕하세요!"`가 가운데 정렬됨
      
- **`margin`**: 요소 자체를 정렬할 때 사용. 여백을 이용한 정렬
    - 중앙 정렬 (`margin: auto;`)
      ```css
      .box {
          width: 200px;
          margin: 0 auto; /* 가로 중앙 정렬 */
        }
      ```
      `auto`를 사용하면 블록 요소를 가운데 정렬할 수 있다. 가로정렬만 가능. (세로정렬은 `flex` 또는 `grid`가 필요)

    - 여백 조절
      ```css
      .box {
          margin: 10px 20px 30px 40px; 
          /* 위 10px, 오른쪽 20px, 아래 30px, 왼쪽 40px */
      }
      ```

- **`flex`**: 부모 요소를 `display: flex;`로 설정하면 자식 요소를 정렬할 수 있다.
 
   ```css
      .container {
          display: flex;
          justify-content: center; /* 가로 중앙 정렬 */
          align-items: center; /* 세로 중앙 정렬 */
          height: 100vh;
      }
    ```
  
   ```html
      <div class="container">
          <div class="box">정렬된 박스</div>
      </div>
    ```
   
    - 졍렬 옵션
        - `justify-content`: 가로 정렬 (왼, 가운데, 오)
        - `align-items`: 세로 정렬 (위, 가운데, 아래)
        - `align-self`: 특정 요소만 정렬
        
- **`translate`**: 요소의 위치를 이동시킬 때 사용 (`position`과 함께 사용 가능)

  ```css
  .box {
      transform: translate(50px, 100px);
  }
  ```
  `translate(50px, 100px);`  오른쪽 50px, 아래 100px 이동

  (단축 사용) `translateX(50px);` 오른쪽 50px 이동 / `translateY(-30px);` 위로 30px 이동

- **`grid`**: CSS에서 가장 강력한 정렬 방법 (2차원 정렬 가능). 전체 레이아웃 정렬

```css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
      grid-template-rows: 100px 200px; /* 두 개의 행 */
      justify-content: center; /* 가로 정렬 */
      align-items: center; /* 세로 정렬 */
    }
```

```html
    <div class="container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
```
가로/세로 정렬을 쉽게 할 수 있다.

👉 `flex`를 사용하면 가로/세로 정렬이 편함!

👉 `grid`는 레이아웃 전체를 정렬할 때 강력함!

🔥 실전에서는 `flex`와 `grid`를 가장 많이 쓴다

### 반응형 background


### transform


### transition


### animation
