
/**
 * Floyd's Cycle-Finding Algorithm, also known as Tortoise and Hare Algorithm.
 * Helps to detect a loop in a linked list.
 * 
 * 
 * Refer: https://en.wikipedia.org/wiki/Cycle_detection#Tortoise_and_hare
 * https://stackoverflow.com/questions/2663115/how-to-detect-a-loop-in-a-linked-list 
 * 
 * */

function hasLoop(head) {

    if (head == null) // list does not exist..so no loop either
        return false;

    let slow, fast; // create two references.
    slow = fast = head; // make both refer to the start of the list

    while (true) {
        
        slow = slow.next;          // 1 hop

        if (fast.next != null)
            fast = fast.next.next; // 2 hops
        else
            return false;          // next node null => no loop

        if (slow == null || fast == null) // if either hits null..no loop
            return false;

        if (slow == fast) // if the two ever meet...we must have a loop
            return true;
    }
}