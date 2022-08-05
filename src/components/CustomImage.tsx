type Props = {
  imgSrc: string,
  pt: string,
}

export default function CustomImage({ imgSrc, pt }: Props) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="food" />
    </div>
  )
}
