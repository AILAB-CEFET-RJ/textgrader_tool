import styled from 'styled-components'
import { Button, Modal, Skeleton } from 'antd'

const MyButton = styled(Button)`
  width: 100%;
`

const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  margin: 2rem;
  text-align: center;
`

const Wrapper = styled.div`
  padding: 0 50px;
  max-width: 1920px;
  min-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 40%;
  display: flex;
  gap: 3rem;
`

export const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  input[type="file"] {
    margin-right: 10px;
  }
`

export const S = {
  ButtonWrapper,
  Wrapper,
  Title,
  MyButton,
  UploadWrapper
}