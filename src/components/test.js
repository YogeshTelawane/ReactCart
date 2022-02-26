let appConfigMap = {
    "dev-stms.byjusorders.com": {
      env: "development",
      url: "https://dev-nucleus.byjusorders.com/nucleusapi",
      gaTrackingId: "UA-146798497-8",
      lsUrl: "https://uat.leadsquared.com/LeadManagement",
      tllmsUrl: "https://staging.tllms.com/admin/logistics",
      sfBaseUrl: "https://byjusprod--fullcopy.lightning.force.com/lightning/r",
      cognitoConfig: {
        aws_project_region: "ap-south-1",
        aws_cognito_identity_pool_id:
          "ap-south-1:56b1f3aa-47fb-4308-b58f-ac0010b26129",
        aws_cognito_region: "ap-south-1",
        aws_user_pools_id: "ap-south-1_Z12CpShDW",
        aws_user_pools_web_client_id: "5tnm1g4ka04mqid308q7bct87r",
      },
    },
    "uat-stms.byjusorders.com": {
      env: "uat",
      url: "https://uat-nucleus.byjusorders.com/nucleusapi",
      gaTrackingId: "UA-146798497-8",
    },
    "staging-stms.byjusorders.com": {
      env: "staging",
      url: "https://staging-nucleus.byjusorders.com/nucleusapi",
      gaTrackingId: "UA-146798497-2",
      sfBaseUrl: "https://byjusprod--fullcopy.lightning.force.com/lightning/r",
      oAuthConfig : {
        domain: "byjusdevauth.byjusorders.com" 
      }
    },
    "stms.byjusorders.com": {
      env: "production",
      url: "https://nucleus.byjusorders.com/nucleusapi",
      gaTrackingId: "UA-146798497-11",
      lsUrl: "https://run.leadsquared.com/LeadManagement",
      tllmsUrl: "https://tllms.com/admin/logistics",
      sfBaseUrl: "https://byjusprod.lightning.force.com/lightning/r",
      cognitoConfig: {
        aws_project_region: "ap-south-1",
        aws_cognito_identity_pool_id:
          "ap-south-1:56b1f3aa-47fb-4308-b58f-ac0010b26129",
        aws_cognito_region: "ap-south-1",
        aws_user_pools_id: "ap-south-1_Z12CpShDW",
        aws_user_pools_web_client_id: "5tnm1g4ka04mqid308q7bct87r",
      },
      oAuthConfig : {
        domain: "byjusdevauth.byjusorders.com" 
      }
    },
    localhost: {
      env: "local",
      url: "http://localhost:3000/nucleusapi",
      gaTrackingId: "UA-146798497-2",
      lsUrl: "https://uat.leadsquared.com/LeadManagement",
      tllmsUrl: "https://staging.tllms.com/admin/logistics",
      sfBaseUrl: "https://byjusprod--fullcopy.lightning.force.com/lightning/r",
      cognitoConfig: {
        aws_project_region: "ap-south-1",
        aws_cognito_identity_pool_id:
          "ap-south-1:56b1f3aa-47fb-4308-b58f-ac0010b26129",
        aws_cognito_region: "ap-south-1",
        aws_user_pools_id: "ap-south-1_Z12CpShDW",
        aws_user_pools_web_client_id: "5tnm1g4ka04mqid308q7bct87r",
      }
    },
  };
  
   let oAuthConfig = {
    domain: "byjusdevauth.byjusorders.com",
    scope: [
      "phone",
      "email",
      "profile",
      "openid",
      "aws.cognito.signin.user.admin",
    ],
    responseType: "code"
  }

  //console.log({...appConfigMap, ...oAuthConfig})

  
   function appConfigFactory(host) {
    const environment = host ? appConfigMap[host] : appConfigMap["localhost"];
    let res = {...environment, ...oAuthConfig
    }

    console.log(res);
    //return {...environment, ...oAuthConfig}

    //console.log(environment, ...oAuthConfig)
  }
  
 appConfigFactory("localhost")
