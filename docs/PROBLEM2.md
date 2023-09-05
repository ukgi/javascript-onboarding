## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

## problem2 기능 목록

### feature 1 problem2 함수 작성하기

- string type의 인자를 받는다.
- string을 스프레드로 풀어서 배열로 만든다.
- forEach로 순회하면서 현재 순회중인 요소의 인덱스와 indexOf 메서드의 값이 다르면 중복되어있는 요소이므로 배열에서 제거한다.
- 배열을 join메서드로 다시 string으로 변환한다.
