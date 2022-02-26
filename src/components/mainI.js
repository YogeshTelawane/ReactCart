const a = {

AWSCognito: {
    clientId: '7ct474h4ddmk4r25d0m3dgouri',
    clientSecret: '6pgfrup75ha4do2nl2qt9778ogpc3p1rlj27277ig3544se2bl6',
    federatedClientId: '5tnm1g4ka04mqid308q7bct87r',
    loginConfig: {
      uri: `${cognitoLoginURI}/login`,
      method: 'get'
    },
    implicitGrantConfig: {
      uri: `${cognitoLoginURI}//oauth2/token`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      grantType: 'client_credentials'
    },
    tokenConfig: {
      uri: `${cognitoLoginURI}/oauth2/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      grantType: 'authorization_code'
    },
    newTokenConfig: {
      uri: `${cognitoLoginURI}/oauth2/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      grantType: 'refresh_token'
    },
    userInfoConfig: {
      uri: `${cognitoLoginURI}/oauth2/userInfo`,
      method: 'get'
    },
    cognitoHandlerConfig: {
      region: 'ap-south-1',
      cognitoUserPoolId: 'ap-south-1_Z12CpShDW',
      tokenUse: 'access',
      tokenExpiration: 3600000
    }
  }

}