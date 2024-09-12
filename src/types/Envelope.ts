export type Envelope<T> = {
	result: T | null;
	errorInfo: ErrorInfo[] | null;
	timeGenerated: Date;
};

export type ErrorInfo = {
	errorCode: string | null;
	errorMessage: string | null;
	invalidField: string | null;
};
