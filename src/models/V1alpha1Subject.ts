// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 * @export
 * @interface V1alpha1Subject
 */
export default interface V1alpha1Subject extends KubeObject {
  /**
   * APIVersion holds the API group and version of the referenced subject. Defaults to \"v1\" for ServiceAccount subjects. Defaults to \"rbac.authorization.k8s.io/v1alpha1\" for User and Group subjects.
   * @type {string}
   * @memberof V1alpha1Subject
   */
  apiVersion?: string

  /**
   * Kind of object being referenced. Values defined by this API group are \"User\", \"Group\", and \"ServiceAccount\". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
   * @type {string}
   * @memberof V1alpha1Subject
   */
  kind: string

  /**
   * Name of the object being referenced.
   * @type {string}
   * @memberof V1alpha1Subject
   */
  name: string

  /**
   * Namespace of the referenced object.  If the object kind is non-namespace, such as \"User\" or \"Group\", and this value is not empty the Authorizer should report an error.
   * @type {string}
   * @memberof V1alpha1Subject
   */
  namespace?: string
}