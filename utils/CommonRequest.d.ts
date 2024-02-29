export declare type Comparison = 'Equals' | 'NotEquals' | 'GreaterThen' | 'GreaterThenOrEquals' | 'LessThen' | 'LessThenOrEquals' | 'Contains' | 'StartsWith' | 'EndsWith';
export declare type ExpressionParam = {
    Property: string;
    Comparison: Comparison;
    Value: string | number | boolean;
};
export declare type QueryParam = {
    Sorts?: {
        [key: string]: Boolean;
    };
    Predicates?: ExpressionParam[];
};
export declare type QueryFunc = (url: string, data: QueryParam) => Promise<any>;
export declare type QueryPagingFunc = (url: string, data: QueryParam, pageSize?: Number, pageNum?: Number) => Promise<any>;
declare const pagingRequest: QueryPagingFunc;
export { pagingRequest };
