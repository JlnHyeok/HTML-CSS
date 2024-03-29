import React from 'react'
// react 17버전 이상에서는 명시적으로 import하지 않아도 jsx에서 자동으로 해준다.

// 이 문장을 사용해야 import된다.
// emotion/react 패키지안에서 jsx를 쓰겠다.
/** @jsxImportSource @emotion/react */
import { ClassNames, css, keyframes } from '@emotion/react'

// emotion에서 styled component import 가능
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const color = 'white'

// 백틱으로 css 를 전달할 수도 있고,
const style = css`
  color: hotpink;
`
const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

// 객체로도 css 를 전달할 수도 있다.
const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={[anotherStyle , style]}>Some text with an underline.</div>
)

const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'Sans-Serif',
      color: 'black'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const ArticleText = props => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray'
    }}
    {...props} // <- props contains the `className` prop
  />
)

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

let SomeComponent2 = props => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
)

export default function EmotionExample() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
        >
        Hover to change color.
      </div>

      <Button>
        This my button component
      </Button>

      <SomeComponent/>
      <AnotherComponent/>

      <P>PPPP</P>
      <ArticleText>ArticleText</ArticleText>
      <div
        css={css`
        animation: ${bounce} 2s ease infinite;
        `}
      >
        some bouncing text!
      </div>

      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent2
            wrapperClassName={css({ color: 'green' })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent2>
        )}
      </ClassNames>

    </>
  )
}
