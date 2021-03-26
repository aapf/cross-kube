/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V1ObjectMeta from './V1ObjectMeta'
import V1SelfSubjectAccessReviewSpec from './V1SelfSubjectAccessReviewSpec'
import V1SubjectAccessReviewStatus from './V1SubjectAccessReviewStatus'

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means \"in all namespaces\".  Self is a special case, because users should always be able to check whether they can perform an action
 * @export
 * @interface V1SelfSubjectAccessReview
 */
export default interface V1SelfSubjectAccessReview extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1SelfSubjectAccessReview
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1SelfSubjectAccessReview
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1SelfSubjectAccessReview
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1SelfSubjectAccessReviewSpec}
   * @memberof V1SelfSubjectAccessReview
   */
  spec: V1SelfSubjectAccessReviewSpec

  /**
   *
   * @type {V1SubjectAccessReviewStatus}
   * @memberof V1SelfSubjectAccessReview
   */
  status?: V1SubjectAccessReviewStatus
}
