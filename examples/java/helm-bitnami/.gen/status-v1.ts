// generated by cdk8s

import { ApiObject } from 'cdk8s';
import { Construct } from '@aws-cdk/core';


/**
 * Status is a return value for calls that don't return other objects.
 */
export class Status extends ApiObject {
  public constructor(scope: Construct, ns: string, options: StatusOptions) {
    super(scope, ns, {
      ...options,
      kind: 'Status',
      apiVersion: 'v1',
    });
  }
}

/**
 * Status is a return value for calls that don't return other objects.
 */
export interface StatusOptions {
  /**
   * Suggested HTTP return code for this status, 0 if not set.
   */
  readonly code?: number;

  /**
   * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
   */
  readonly details?: StatusDetails;

  /**
   * A human-readable description of the status of this operation.
   */
  readonly message?: string;

  /**
   * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly metadata?: ListMeta;

  /**
   * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
   */
  readonly reason?: string;

}

/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 */
export interface StatusDetails {
  /**
   * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
   */
  readonly causes?: StatusCause[];

  /**
   * The group attribute of the resource associated with the status StatusReason.
   */
  readonly group?: string;

  /**
   * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   */
  readonly kind?: string;

  /**
   * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
   */
  readonly name?: string;

  /**
   * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
   */
  readonly retryAfterSeconds?: number;

  /**
   * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  readonly uid?: string;

}

/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 */
export interface ListMeta {
  /**
   * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
   */
  readonly continue?: string;

  /**
   * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   */
  readonly resourceVersion?: string;

  /**
   * selfLink is a URL representing this object. Populated by the system. Read-only.
   */
  readonly selfLink?: string;

}

/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 */
export interface StatusCause {
  /**
   * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items"
   */
  readonly field?: string;

  /**
   * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
   */
  readonly message?: string;

  /**
   * A machine-readable description of the cause of the error. If this value is empty there is no information available.
   */
  readonly reason?: string;

}

