
    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#truco')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:carlosmatiasalvarez.cma@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }
