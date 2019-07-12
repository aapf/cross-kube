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
 * NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
 * @export
 * @interface V1NodeSystemInfo
 */
export default interface V1NodeSystemInfo extends KubeObject {
  /**
   * The Architecture reported by the node
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  architecture: string

  /**
   * Boot ID reported by the node.
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  bootID: string

  /**
   * ContainerRuntime Version reported by the node through runtime remote API (e.g. docker://1.5.0).
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  containerRuntimeVersion: string

  /**
   * Kernel Version reported by the node from \'uname -r\' (e.g. 3.16.0-0.bpo.4-amd64).
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  kernelVersion: string

  /**
   * KubeProxy Version reported by the node.
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  kubeProxyVersion: string

  /**
   * Kubelet Version reported by the node.
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  kubeletVersion: string

  /**
   * MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  machineID: string

  /**
   * The Operating System reported by the node
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  operatingSystem: string

  /**
   * OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  osImage: string

  /**
   * SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-US/Red_Hat_Subscription_Management/1/html/RHSM/getting-system-uuid.html
   * @type {string}
   * @memberof V1NodeSystemInfo
   */
  systemUUID: string
}