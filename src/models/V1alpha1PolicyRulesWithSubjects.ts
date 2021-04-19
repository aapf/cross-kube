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
import FlowcontrolV1alpha1Subject from './FlowcontrolV1alpha1Subject'
import V1alpha1NonResourcePolicyRule from './V1alpha1NonResourcePolicyRule'
import V1alpha1ResourcePolicyRule from './V1alpha1ResourcePolicyRule'

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 * @export
 * @interface V1alpha1PolicyRulesWithSubjects
 */
export default interface V1alpha1PolicyRulesWithSubjects extends KubeObject {
  /**
   * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
   * @type {Array<V1alpha1NonResourcePolicyRule>}
   * @memberof V1alpha1PolicyRulesWithSubjects
   */
  nonResourceRules?: Array<V1alpha1NonResourcePolicyRule>

  /**
   * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
   * @type {Array<V1alpha1ResourcePolicyRule>}
   * @memberof V1alpha1PolicyRulesWithSubjects
   */
  resourceRules?: Array<V1alpha1ResourcePolicyRule>

  /**
   * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
   * @type {Array<FlowcontrolV1alpha1Subject>}
   * @memberof V1alpha1PolicyRulesWithSubjects
   */
  subjects: Array<FlowcontrolV1alpha1Subject>
}
