import withJoi from 'next-joi'

export default withJoi({
  onValidationError: (_, res, errors) => {
    return res.status(400).end(JSON.stringify({
      errors: errors.details.map(e => e.message)
    }))
  }
})
