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

  
### 정렬의 진수


### 반응형 background


### transform


### transition


### animation
