import { gql } from 'apollo-boost';

const FRAGMENT_ROLE_PERMISSION = gql`
  fragment FragmentRolePermission on RolePermission {
    id
    originId
    name
    slug
    operations
  }
`;

const FRAGMENT_ACADEMIC_YEAR = gql`
  fragment FragmentLoginAcademicYear on AcademicYear {
    id
    name
    fromYear
    toYear
    isEnabled
    isCurrent
    flexibilityControlInfo {
      inventoryThresholdForUrgencyMessage
      maxRequestsForEachStudent
    }
  }
`;

const FRAGMENT_USER_ROLE = gql`
  fragment FragmentUserRole on UserRole {
    id
    role {
      id
      originId
      name
      isAdmin
      permissions {
        ...FragmentRolePermission
        childPermissions {
          ...FragmentRolePermission
          childPermissions {
            ...FragmentRolePermission
            childPermissions {
              ...FragmentRolePermission
            }
          }
        }
      }
    }
    accessScope {
      properties {
        id
        originId
        name
        areaUnitOfMeasurement
        lengthUnitOfMeasurement
        currency
        timezone
        billingCycle
        contactEmailAddress
        ownerName
        flatPreferencePlanSetting {
          smokingEnabled
          petEnabled
          dietaryEnabled
          genderEnabled
        }
        city {
          id
          name
        }
        academicYear {
          past {
            ...FragmentLoginAcademicYear
          }
          current {
            ...FragmentLoginAcademicYear
          }
          upcoming {
            ...FragmentLoginAcademicYear
          }
        }
      }
    }
  }
  ${FRAGMENT_ROLE_PERMISSION}
  ${FRAGMENT_ACADEMIC_YEAR}
`;

export const VIEWER = gql`
  query QueryViewer {
    viewer {
      id
      name
      email
      level
      landlord {
        id
        name
      }
      topLandlord {
        id
        name
      }
      property {
        id
        name
      }
      currentRole {
        ...FragmentUserRole
      }
      roles {
        ...FragmentUserRole
      }
    }
  }
  ${FRAGMENT_USER_ROLE}
`;

export const LOGIN = gql`
  mutation MutationLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      authToken
    }
  }
`;

export const USER_FORGOT_PASSWORD = gql`
  mutation MutationUserForgotPassword($email: String!) {
    userForgotPassword(email: $email) {
      success
    }
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation MutationResetUserPassword($token: String!, $password: String!) {
    resetUserPassword(token: $token, password: $password) {
      success
    }
  }
`;
