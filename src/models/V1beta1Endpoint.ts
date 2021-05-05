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
import V1ObjectReference from './V1ObjectReference'
import V1beta1EndpointConditions from './V1beta1EndpointConditions'

/**
 * Endpoint represents a single logical \"backend\" implementing a service.
 * @export
 * @interface V1beta1Endpoint
 */
export default interface V1beta1Endpoint extends KubeObject {
  /**
   * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100.
   * @type {Array<string>}
   * @memberof V1beta1Endpoint
   */
  addresses: Array<string>

  /**
   *
   * @type {V1beta1EndpointConditions}
   * @memberof V1beta1Endpoint
   */
  conditions?: V1beta1EndpointConditions

  /**
   * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must pass DNS Label (RFC 1123) validation.
   * @type {string}
   * @memberof V1beta1Endpoint
   */
  hostname?: string

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1beta1Endpoint
   */
  targetRef?: V1ObjectReference

  /**
   * topology contains arbitrary topology information associated with the endpoint. These key/value pairs must conform with the label format. https://kubernetes.io/docs/concepts/overview/working-with-objects/labels Topology may include a maximum of 16 key/value pairs. This includes, but is not limited to the following well known keys: * kubernetes.io/hostname: the value indicates the hostname of the node   where the endpoint is located. This should match the corresponding   node label. * topology.kubernetes.io/zone: the value indicates the zone where the   endpoint is located. This should match the corresponding node label. * topology.kubernetes.io/region: the value indicates the region where the   endpoint is located. This should match the corresponding node label.
   * @type {{ [key: string]: string; }}
   * @memberof V1beta1Endpoint
   */
  topology?: { [key: string]: string }
}