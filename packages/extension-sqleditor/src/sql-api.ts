export const TARGET_SQL_ADAPTERS = 'system.sqladapters';

export interface SqlConnectionInfo {
  id: string | null;
  label: string;
  isDefault?: boolean;
}

/**
 * Describes a single database extension that can be managed through the SQL editor.
 *
 * Implementations should return the same identifiers from {@link SqlDatabase.listDbExtensions}
 * and accept them in {@link SqlDatabase.enableDbExtension} / {@link SqlDatabase.disableDbExtension}.
 */
export interface SqlDatabaseExtensionInfo {
  id: string;
  label: string;
  description?: string;
  /**
   * Indicates whether the extension is currently installed or enabled for the active database
   * connection. Omit or leave false when the adapter cannot determine the installed state.
   */
  installed?: boolean;
}

/**
 * Additional adapter-specific actions that can be surfaced by the SQL editor UI.
 *
 * These are optional and are not used by the generic extension manager, which relies instead
 * on the extension-related methods on {@link SqlDatabase}.
 */
export interface SqlAdapterAction {
  id: string;
  label: string;
  icon?: string;
  run(): Promise<void>;
}

/**
 * Abstraction for a concrete SQL engine that can be used from the SQL editor.
 *
 * All engines must implement connection management and query execution. Extension management
 * is optional but, when provided, follows the contract documented on the corresponding methods.
 */
export interface SqlDatabase {
  readonly engineId: string;
  readonly currentConnectionId: string | null;

  listConnections(): Promise<SqlConnectionInfo[]>;
  selectConnection(id: string | null): Promise<void>;
  runQuery(sql: string): Promise<{ columns: string[]; rows: unknown[][] }>;

  /** Optional engine/database version string for toolbar display after a connection is active. */
  readVersion?(): Promise<string>;

  createConnection?(): Promise<SqlConnectionInfo | null>;
  deleteConnection?(id: string): Promise<void>;

  extraActions?: SqlAdapterAction[];

  /**
   * Return the list of extensions known to this engine for the currently selected connection.
   *
   * The list should be stable for the active connection and use {@link SqlDatabaseExtensionInfo.installed}
   * to mark which extensions are currently installed or enabled when that information is available.
   */
  listDbExtensions?(): Promise<SqlDatabaseExtensionInfo[]>;
  /**
   * Ensure that the extension identified by {@link SqlDatabaseExtensionInfo.id} is installed
   * and enabled for the current connection. It is safe for implementations to be idempotent.
   */
  enableDbExtension?(id: string): Promise<void>;
  /**
   * Disable or uninstall the given extension for the current connection, if the engine supports it.
   * Adapters that cannot disable extensions should omit this method entirely.
   */
  disableDbExtension?(id: string): Promise<void>;

  close(): Promise<void> | void;
}

export interface SqlAdapterContribution {
  id: string;
  label: string;
  icon?: string;
  loader: () => Promise<SqlDatabase>;
}

