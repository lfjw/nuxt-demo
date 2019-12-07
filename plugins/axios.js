// export default(content) => {  上下文

// }


export default function ({
  $axios,
  redirect
}) {

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })


  $axios.onResponse((res) => {
    // axios 配置返回结果
    return Promise.resolve(res.data)
  })


  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
